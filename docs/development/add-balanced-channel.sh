#!/bin/bash
set -e  # Exit on errors

# Configuration
BITCOIN_CLI="docker exec bitcoin_regtest bitcoin-cli -regtest"
LND_CLI="docker exec lnd lncli --network=regtest"
LND_OTHER_CLI="docker exec lnd_other_node lncli --network=regtest"

# Step 1: Generate new address and mine 2 blocks to generate funds
echo "💰 Getting new LND addresses..."
LND_ADDRESS=$($LND_CLI newaddress p2wkh | jq -r '.address')
LND_OTHER_NODE_ADDRESS=$($LND_OTHER_CLI newaddress p2wkh | jq -r '.address')

echo "🔨 Mining 2 blocks"
$BITCOIN_CLI generatetoaddress 2 "${LND_ADDRESS}"
echo "🔨 Mining 101 blocks to make balance spendable"
$BITCOIN_CLI generatetoaddress 101 "${LND_OTHER_NODE_ADDRESS}"
sleep 1

# Step 2: Connect LND to LND_OTHER_NODE
LND_OTHER_PUBKEY=$($LND_OTHER_CLI getinfo | jq -r '.identity_pubkey')
LND_OTHER_HOST="lnd_other_node:9735"
IS_CONNECTED=$($LND_CLI listpeers | jq -r --arg PUBKEY "$LND_OTHER_PUBKEY" '.peers[]? | select(.pub_key == $PUBKEY) | .pub_key')

if [ -z "$IS_CONNECTED" ]; then
    echo "🔗 Connecting LND to LND_OTHER_NODE..."
    $LND_CLI connect "$LND_OTHER_PUBKEY@$LND_OTHER_HOST"
else
    echo "✅ Already connected to LND_OTHER_NODE."
fi

# Step 4: Open a channel from LND to LND_OTHER_NODE
echo "🚀 Opening channel with 0.15 BTC from LND to LND_OTHER_NODE..."
CURRENT_CHANNEL_COUNT=$($LND_CLI listchannels | jq '.channels | length')
$LND_CLI openchannel --node_key "$LND_OTHER_PUBKEY" --local_amt 15000000
$BITCOIN_CLI generatetoaddress 20 "${LND_OTHER_NODE_ADDRESS}"  # Confirm channel

# Step 5: Wait for LND to recognize the channel (max 5 sec, check every 250ms)
echo "⏳ Waiting for LND to recognize the channel..."
TIMEOUT=5
INTERVAL=0.25
ELAPSED=0

while [ $ELAPSED -lt $TIMEOUT ]; do
    NEW_CHANNEL_COUNT=$($LND_CLI listchannels | jq '.channels | length')
    
    if [ "$NEW_CHANNEL_COUNT" -gt "$CURRENT_CHANNEL_COUNT" ]; then
        echo "✅ New channel detected! Current channels: $NEW_CHANNEL_COUNT"
        break
    fi

    sleep $INTERVAL
    ELAPSED=$(echo "$ELAPSED + $INTERVAL" | bc)
done

if [ "$NEW_CHANNEL_COUNT" -le "$CURRENT_CHANNEL_COUNT" ]; then
    echo "❌ Timeout: Channel not recognized within $TIMEOUT seconds."
    exit 1
fi

# Step 6: Generate and pay an invoice for 0.05 BTC
echo "📜 Generating invoice from LND_OTHER_NODE..."
INVOICE=$($LND_OTHER_CLI addinvoice --amt 5000000 | jq -r '.payment_request')
echo "💸 Paying invoice from LND..."
$LND_CLI payinvoice --force "$INVOICE"

# Done!
LND_PUBKEY=$($LND_CLI getinfo | jq -r '.identity_pubkey')
echo -e ""
echo "✅ Lightning Nodes connected & added a balanced channel!"
echo "🔗 LND Pubkey: $LND_PUBKEY"
echo "🔗 LND Host: lnd:9735"
echo "🔗 LND OTHER NODE Pubkey: $LND_OTHER_PUBKEY"
echo "🔗 LND OTHER NODE Host: $LND_OTHER_HOST"

# Get channel details from LND
CHANNELS_JSON=$($LND_CLI listchannels)
# Parse and format output
echo -e ""
echo "⚡ Listing all channels with balances:"

echo "$CHANNELS_JSON" | jq -r '
  .channels[] |
  "🔵 Channel with Peer: " + .remote_pubkey + "\n" +
  "∑ Capacity: " + (.capacity | tostring) + " sats\n" +
  "💰 Local Balance: " + (.local_balance | tostring) + " sats\n" +
  "🔄 Remote Balance: " + (.remote_balance | tostring) + " sats\n" +
  "📡 Active: " + (.active | tostring) + "\n" +
  "----------------------"
'
