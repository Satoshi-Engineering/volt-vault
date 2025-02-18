# Development

## Prerequisites

- Node.js 22 LTS
- npm
- Docker (recommended for Lightning node setup, see below)

## Installation

```bash
npm i
```

You can either connect the project to your own Lightning node or use the Lightning regtest setup in `./development`.

### Option A: Connect to Your Own Lightning Node

To grant the project access to the `admin.macaroon` and `tls.cert`, you have two options:

- **Copy the necessary files manually:**
  - Copy `admin.macaroon` from your LND node to `./data/lnd/data/chain/bitcoin/mainnet/admin.macaroon`
  - Copy `tls.cert` from your LND node to `./data/tls.cert`
- **Mount the LND data directory to `./data/lnd`**

> [!NOTE]
> You can modify `macaroonCertDir` and `macaroonCertFile` in `config.json` as needed.

### Option B: Use the Dockerized Development Setup

```bash
cd development
docker compose up -d

# Ensure script permissions are set correctly
chmod +x add-balanced-channel.sh 

./add-balanced-channel.sh 
```

## Create Configuration File (`./config.json`)

```json
{
  "grpc": {
    "server": "localhost:10009",
    "macaroonCertDir": "data/lnd/data/chain/bitcoin/regtest"
  }
}
```

## Running from Source

```bash
npm run dev
```

## Development Notes

### LND Node Bash Examples

```bash
# Create an invoice on the other node
docker exec lnd_other_node lncli --network=regtest addinvoice --amt 2000

# Pay the invoice 
docker exec lnd lncli --network=regtest payinvoice --force "payment_request"
```

### Proto

Currently working with proto of LND v0.18.4-beta

- [LND Proto File](https://github.com/lightningnetwork/lnd/blob/v0.18.4-beta/lnrpc/lightning.proto)
- [Permalink to Proto File](https://github.com/lightningnetwork/lnd/blob/ddeb8351684a611f6c27f16f09be75d5c039f08c/lnrpc/lightning.proto)
