# Development

## Prerequisites

- nodejs 22 LTS
- npm
- docker (recommended for lightning node setup, see below)

## Install

```bash
npm i
```

- Setup Dev LND node --> see chapter below
- Give access to the admin.macaroon and tls.cert
  - Either copy the filex
    - Copy the admin.macaroon from the lnd node to `./data/lnd/data/chain/bitcoin/mainnet/admin.macaroon`
    - Copy the tls.cert from the lnd node to `./data/tls.cert`
  - or mount the lnd data director to `./data/lnd` with the compose file

## Setup Dev LND node

### `docker-compose.yml`

```yml
services:
  lnd:
    image: lightninglabs/lnd:v0.18.4-beta
    container_name: lnd-testnet
    restart: always
    ports:
      - "9735:9735" # LND Peer Port
      - "10009:10009" # gRPC Port
      - "8080:8080" # REST Port
    volumes:
      - ./data:/root/.lnd
      - ./walletpassword:/root/.lnd/walletpassword

    environment:
      NETWORK: testnet
    command:
      - "--bitcoin.active"
      - "--bitcoin.testnet"
      - "--bitcoin.node=neutrino"
      - "--neutrino.connect=btcd-testnet.lightning.computer"
      - "--rpclisten=0.0.0.0:10009"
      - "--restlisten=0.0.0.0:8080"
      - "--listen=0.0.0.0:9735"
      - "--wallet-unlock-password-file=/root/.lnd/walletpassword"
```

- create wallet

```bash
docker compose up -d 
docker exec -it lnd-testnet lncli create 
nano walletpassword
# enter the same wallet unlock password
```

## Create config file `./config.json`

```json
{
  "grpc": {
    "server": "localhost:10009"
  }
}
```

## Run from source

```bash
npm run dev
```

## Dev Notes

### Proto

Currently working with proto of lnd v0.18.4-beta

- https://github.com/lightningnetwork/lnd/blob/v0.18.4-beta/lnrpc/lightning.proto
- Permalink to Proto File: https://github.com/lightningnetwork/lnd/blob/ddeb8351684a611f6c27f16f09be75d5c039f08c/lnrpc/lightning.proto
