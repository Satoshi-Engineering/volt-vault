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
    - Request: `paymentRequestEncoded`
    - Response: [See](https://lightning.engineering/api-docs/api/lnd/lightning/query-routes/)

## Infos

Currently working with proto of `LND v0.19.1-beta`.

- [Proto File](https://github.com/lightningnetwork/lnd/blob/v0.19.1-beta/lnrpc/lightning.proto)
- [Permalink](https://github.com/lightningnetwork/lnd/blob/59a86b3b5475276c1e266c10656d13300dc2b5a1/lnrpc/lightning.proto)

## Roadmap

- Channel Checker
- Accounting Layer

## Development

See [DEVELOPMENT](docs/DEVELOPMENT.md)

## Tip us

If you like this project, please adapt the landingpage to your local stores, that
accept bitcoin or even extend it. Why not [send some tip love?](https://satoshiengineering.com/tipjar/)
