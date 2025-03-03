# Volt Vault

[![Version](https://img.shields.io/github/package-json/v/Satoshi-Engineering/volt-vault?color=6B3D91)](https://github.com/Satoshi-Engineering/volt-vault/)
[![License](https://img.shields.io/github/license/Satoshi-Engineering/volt-vault?color=6B3D91)](https://github.com/Satoshi-Engineering/volt-vault/blob/main/LICENSE)
[![Stars](https://img.shields.io/github/stars/Satoshi-Engineering/volt-vault.svg?style=flat&color=6B3D91)](https://github.com/Satoshi-Engineering/volt-vault/stargazers)

Volt Vault is Satoshi Engineering's internal project, focused on implementing essential features missing
in the Lightning Network landscape, bridging gaps to enhance functionality and usability.

## Features

- GRPC Endpoints
  - `/api/lnd/get-info`: Partial response from [See](https://lightning.engineering/api-docs/api/lnd/lightning/get-info/)
- QueryRoutes API
  - `/api/lnd/query-routes`
    - Request: `pub_key` and `amt`
    - Response: [See](https://lightning.engineering/api-docs/api/lnd/lightning/query-routes/)

## Infos

Currently working with proto of `LND v0.18.5-beta`.

- [Proto File](https://github.com/lightningnetwork/lnd/blob/v0.18.5-beta/lnrpc/lightning.proto)
- [Permalink](https://github.com/lightningnetwork/lnd/blob/4ccf4fc24c750d098cf24566ef4bbc0311c7d476/lnrpc/lightning.proto)

## Roadmap

- Channel Checker
- Accounting Layer

## Development

See [DEVELOPMENT](docs/DEVELOPMENT.md)

## Tip us

If you like this project, please adapt the landingpage to your local stores, that
accept bitcoin or even extend it. Why not [send some tip love?](https://satoshiengineering.com/tipjar/)
