# Changelog


## v0.0.6

[compare changes](https://github.com/Satoshi-Engineering/volt-vault/compare/v0.0.5...v0.0.6)

### 🚀 Enhancements

- Add types for proto generated grpc files ([6720dc6](https://github.com/Satoshi-Engineering/volt-vault/commit/6720dc6))
- Add types for proto generated grpc files ([3774f80](https://github.com/Satoshi-Engineering/volt-vault/commit/3774f80))

### 🩹 Fixes

- Eslint ignore auto generated files ([201f8d0](https://github.com/Satoshi-Engineering/volt-vault/commit/201f8d0))
- Get info response import typo ([4a8fab3](https://github.com/Satoshi-Engineering/volt-vault/commit/4a8fab3))

### 💅 Refactors

- Query-routes expect paymentRequest in payload and deprecate query-routes-for-pay-req in favor of query-routes ([9fc7e52](https://github.com/Satoshi-Engineering/volt-vault/commit/9fc7e52))
- Get-info api filter response to only expose defined data ([60681f4](https://github.com/Satoshi-Engineering/volt-vault/commit/60681f4))

### 📖 Documentation

- **development:** Add link to readme and update minimalistic infos ([f41e0e2](https://github.com/Satoshi-Engineering/volt-vault/commit/f41e0e2))
- **development:** Add descript of lnd credentials ([3ae6b88](https://github.com/Satoshi-Engineering/volt-vault/commit/3ae6b88))
- **development:** Restructer development readme ([bb921e9](https://github.com/Satoshi-Engineering/volt-vault/commit/bb921e9))
- **development:** Add config.json example ([995aef8](https://github.com/Satoshi-Engineering/volt-vault/commit/995aef8))

### 🏡 Chore

- Add sample config file and make telegramSender parameters nullish ([e6a9af0](https://github.com/Satoshi-Engineering/volt-vault/commit/e6a9af0))

### ❤️ Contributors

- Thomas Schagerl <tom@satoshiengineering.com>
- Dr-erych <dave@satoshiengineering.com>
- Thespielplatz <informatics@gmx.net>

## v0.0.5

[compare changes](https://github.com/Satoshi-Engineering/volt-vault/compare/v0.0.4...v0.0.5)

### 💅 Refactors

- Return the decoded payReq alongside the queryRoutesResponse ([71b5996](https://github.com/Satoshi-Engineering/volt-vault/commit/71b5996))

### ❤️ Contributors

- Dr-erych <dave@satoshiengineering.com>

## v0.0.4

[compare changes](https://github.com/Satoshi-Engineering/volt-vault/compare/v0.0.3...v0.0.4)

### 🚀 Enhancements

- Add new route that queries the routes for a given payment request ([d4b2225](https://github.com/Satoshi-Engineering/volt-vault/commit/d4b2225))

### ❤️ Contributors

- Dr-erych <dave@satoshiengineering.com>

## v0.0.3

[compare changes](https://github.com/Satoshi-Engineering/volt-vault/compare/v0.0.2...v0.0.3)

### 🩹 Fixes

- Fix default admin macaroon path ([43985be](https://github.com/Satoshi-Engineering/volt-vault/commit/43985be))
- Copy lightning proto into the docker image ([d4471eb](https://github.com/Satoshi-Engineering/volt-vault/commit/d4471eb))
- Add directory path to dockerfile ([29b0e8b](https://github.com/Satoshi-Engineering/volt-vault/commit/29b0e8b))

### 📖 Documentation

- Add api description ([e1f5567](https://github.com/Satoshi-Engineering/volt-vault/commit/e1f5567))

### 🏡 Chore

- Add grpc server to config.json ([dd7f4b2](https://github.com/Satoshi-Engineering/volt-vault/commit/dd7f4b2))
- Move the longer error message to message field ([a5556d4](https://github.com/Satoshi-Engineering/volt-vault/commit/a5556d4))
- Make lnd routes get only ([1514b0f](https://github.com/Satoshi-Engineering/volt-vault/commit/1514b0f))
- **footer:** Add version Badge ([40be3fb](https://github.com/Satoshi-Engineering/volt-vault/commit/40be3fb))
- **footer:** Color adjust ([032ff1d](https://github.com/Satoshi-Engineering/volt-vault/commit/032ff1d))
- Eslint fix ([e92f9b0](https://github.com/Satoshi-Engineering/volt-vault/commit/e92f9b0))

### ❤️ Contributors

- Thespielplatz <informatics@gmx.net>

## v0.0.2


### 🚀 Enhancements

- Add get info api - connect to lnd on localhost - load protodefinitions - load tls - load macaroon file - write gprcclient - use nitro plugin to init grpc client ([15b3c9a](https://github.com/Satoshi-Engineering/volt-vault/commit/15b3c9a))
- Add queryRoutes api ([dbe4f66](https://github.com/Satoshi-Engineering/volt-vault/commit/dbe4f66))

### 📦 Build

- Add npm run bump patch command ([0084e60](https://github.com/Satoshi-Engineering/volt-vault/commit/0084e60))

### 🏡 Chore

- Initial commit ([e9bd5d4](https://github.com/Satoshi-Engineering/volt-vault/commit/e9bd5d4))
- Add info page ([cc6f453](https://github.com/Satoshi-Engineering/volt-vault/commit/cc6f453))
- Add default gitignore's ([4d96d20](https://github.com/Satoshi-Engineering/volt-vault/commit/4d96d20))
- Add nuxt/ui and Github Badge ([4fe4082](https://github.com/Satoshi-Engineering/volt-vault/commit/4fe4082))
- Add config.json loader ([ade8873](https://github.com/Satoshi-Engineering/volt-vault/commit/ade8873))
- Lint fixes ([4225988](https://github.com/Satoshi-Engineering/volt-vault/commit/4225988))
- Eslint fixes ([279aa50](https://github.com/Satoshi-Engineering/volt-vault/commit/279aa50))

### 🤖 CI

- Add linting ([9a2ebfa](https://github.com/Satoshi-Engineering/volt-vault/commit/9a2ebfa))
- Add github workflow and docker build file ([b9eb96e](https://github.com/Satoshi-Engineering/volt-vault/commit/b9eb96e))

### ❤️ Contributors

- Thespielplatz <informatics@gmx.net>

