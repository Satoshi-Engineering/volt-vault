# Changelog


## v0.0.9

[compare changes](https://github.com/Satoshi-Engineering/volt-vault/compare/v0.0.8...v0.0.9)

### 💅 Refactors

- Move error to response code mapping from errorMappingEventHandler to defineNitroErrorHandler ([7c94872](https://github.com/Satoshi-Engineering/volt-vault/commit/7c94872))

### 📖 Documentation

- Update roadmap ([4ad3997](https://github.com/Satoshi-Engineering/volt-vault/commit/4ad3997))
- Add licence ([aa19870](https://github.com/Satoshi-Engineering/volt-vault/commit/aa19870))

### 🏡 Chore

- Npm i ([b6f954b](https://github.com/Satoshi-Engineering/volt-vault/commit/b6f954b))
- **nuxt/ui:** Update to 3.0.0-beta.2 ([f01eda6](https://github.com/Satoshi-Engineering/volt-vault/commit/f01eda6))
- Audit fix Refs: projects#1528 ([#1528](https://github.com/Satoshi-Engineering/volt-vault/issues/1528))

### 🤖 CI

- Wait with build & publish job on tests ([1a69b26](https://github.com/Satoshi-Engineering/volt-vault/commit/1a69b26))

### ❤️ Contributors

- Thespielplatz <informatics@gmx.net>

## v0.0.8

[compare changes](https://github.com/Satoshi-Engineering/volt-vault/compare/v0.0.7...v0.0.8)

### 💅 Refactors

- **GRPCClient:** Move error mapping to status codes to errorMappingEventHandler ([448c838](https://github.com/Satoshi-Engineering/volt-vault/commit/448c838))

### 🏡 Chore

- **GRPCClient:** Identify error via grpc error codes ([abd2cd0](https://github.com/Satoshi-Engineering/volt-vault/commit/abd2cd0))

### 🎨 Styles

- Eslint fix ([81d8032](https://github.com/Satoshi-Engineering/volt-vault/commit/81d8032))

### 🤖 CI

- Publish release on github release event ([8dbcfce](https://github.com/Satoshi-Engineering/volt-vault/commit/8dbcfce))

### ❤️ Contributors

- Thespielplatz <informatics@gmx.net>

## v0.0.7

[compare changes](https://github.com/Satoshi-Engineering/volt-vault/compare/v0.0.6...v0.0.7)

### 🚀 Enhancements

- **protobuf:** Update protobuf defintions to LND v0.18.5-beta ([b1fb4c9](https://github.com/Satoshi-Engineering/volt-vault/commit/b1fb4c9))

### 🩹 Fixes

- **ci:** Add a wait lnd to be ready step in balanced channel script ([3e15e70](https://github.com/Satoshi-Engineering/volt-vault/commit/3e15e70))
- **ci:** Add mine blocks to another address to make sure the lnd other address has mined & usable BTC ([6b0014e](https://github.com/Satoshi-Engineering/volt-vault/commit/6b0014e))
- **ci:** Add wait for query routes to success in add balance script ([276fd16](https://github.com/Satoshi-Engineering/volt-vault/commit/276fd16))
- **ci:** Queryroutes has to be 1 (integer) in balance script ([3345711](https://github.com/Satoshi-Engineering/volt-vault/commit/3345711))
- **ci:** Fix lnd mounted directory ownership ([cf5147c](https://github.com/Satoshi-Engineering/volt-vault/commit/cf5147c))
- **ci:** Move chmod before ls ([cfcfec6](https://github.com/Satoshi-Engineering/volt-vault/commit/cfcfec6))
- **ci:** Change file permission starting with ./data recursively ([ba3f078](https://github.com/Satoshi-Engineering/volt-vault/commit/ba3f078))
- **ci:** Change file permission starting with ./data recursively ([291f409](https://github.com/Satoshi-Engineering/volt-vault/commit/291f409))
- E2e test ([dcd720f](https://github.com/Satoshi-Engineering/volt-vault/commit/dcd720f))

### 💅 Refactors

- Remove deprecated query-routes-for-pay-req route ([7711920](https://github.com/Satoshi-Engineering/volt-vault/commit/7711920))
- Change playwright test to run with npx playwright ([e0f47a7](https://github.com/Satoshi-Engineering/volt-vault/commit/e0f47a7))
- Compact schema testing ([8a47b7f](https://github.com/Satoshi-Engineering/volt-vault/commit/8a47b7f))
- Add createError to assert ([f94ebdd](https://github.com/Satoshi-Engineering/volt-vault/commit/f94ebdd))

### 📖 Documentation

- **readme:** Updated features and roadmap ([0799887](https://github.com/Satoshi-Engineering/volt-vault/commit/0799887))
- **dev:** Add hints when lnd nodes are not starting up ([f1f32bc](https://github.com/Satoshi-Engineering/volt-vault/commit/f1f32bc))
- Add example how to start unit test with watch ([c6a3b8f](https://github.com/Satoshi-Engineering/volt-vault/commit/c6a3b8f))

### 📦 Build

- **deps:** Bump koa from 2.15.3 to 2.15.4 ([7f04f86](https://github.com/Satoshi-Engineering/volt-vault/commit/7f04f86))

### 🏡 Chore

- Npm audit fix ([f91fe0b](https://github.com/Satoshi-Engineering/volt-vault/commit/f91fe0b))
- **deveopment:** Add a docker compose project with bitcoin node and 2x lnd nodes ([cf48bb1](https://github.com/Satoshi-Engineering/volt-vault/commit/cf48bb1))
- **docs:** Add a script to connect lnd nodes, open a channel and rebalance it ([90ca1d1](https://github.com/Satoshi-Engineering/volt-vault/commit/90ca1d1))
- **docs:** Update development ([345c467](https://github.com/Satoshi-Engineering/volt-vault/commit/345c467))
- **docs:** Add guide to update proto & restructure development docs ([f615dbc](https://github.com/Satoshi-Engineering/volt-vault/commit/f615dbc))
- Add vscode tailwind settings ([49328f2](https://github.com/Satoshi-Engineering/volt-vault/commit/49328f2))
- Update footer design ([627aa4e](https://github.com/Satoshi-Engineering/volt-vault/commit/627aa4e))
- Update to nuxtui 3.0.0 ([137983d](https://github.com/Satoshi-Engineering/volt-vault/commit/137983d))
- Add preliminary favicon ([d8724c6](https://github.com/Satoshi-Engineering/volt-vault/commit/d8724c6))
- Remove consoe.info ([989ca7c](https://github.com/Satoshi-Engineering/volt-vault/commit/989ca7c))
- **ErrorLoggingPlugin:** Add scope to warning message ([b21c7b0](https://github.com/Satoshi-Engineering/volt-vault/commit/b21c7b0))
- Add vitest ([595d9b1](https://github.com/Satoshi-Engineering/volt-vault/commit/595d9b1))
- Npm audit fix ([2270bc9](https://github.com/Satoshi-Engineering/volt-vault/commit/2270bc9))
- Add playwright test for index page ([3d1b65e](https://github.com/Satoshi-Engineering/volt-vault/commit/3d1b65e))
- **nuxt:** Ignore playwright folders from hot reload ([677dc51](https://github.com/Satoshi-Engineering/volt-vault/commit/677dc51))
- Add e2e test for get-info api ([c71d143](https://github.com/Satoshi-Engineering/volt-vault/commit/c71d143))
- Add e2e test for query-routes api ([0ff1d85](https://github.com/Satoshi-Engineering/volt-vault/commit/0ff1d85))
- Exclude e2e tests from nuxt test ([f224412](https://github.com/Satoshi-Engineering/volt-vault/commit/f224412))
- Remove console.log from test ([b88e47f](https://github.com/Satoshi-Engineering/volt-vault/commit/b88e47f))
- Configure unit and e2e tests for pipeline ([bc82ae0](https://github.com/Satoshi-Engineering/volt-vault/commit/bc82ae0))
- Add listchannel info to script ([0ad0517](https://github.com/Satoshi-Engineering/volt-vault/commit/0ad0517))
- Add validation error test ([3a45855](https://github.com/Satoshi-Engineering/volt-vault/commit/3a45855))
- **e2e:** Add lnd commands to start and stop the lnd node ([44cfc78](https://github.com/Satoshi-Engineering/volt-vault/commit/44cfc78))
- **grpcclient:** Add error wrapper for custom error handling ([defc0d4](https://github.com/Satoshi-Engineering/volt-vault/commit/defc0d4))
- **e2e:** Add test for connection and connection loss of lnd ([608862f](https://github.com/Satoshi-Engineering/volt-vault/commit/608862f))
- **e2e:** Add failing query routes test due wrong network ([df4cf32](https://github.com/Satoshi-Engineering/volt-vault/commit/df4cf32))
- Npm audit fix ([b56bd96](https://github.com/Satoshi-Engineering/volt-vault/commit/b56bd96))
- Package updates ([162029b](https://github.com/Satoshi-Engineering/volt-vault/commit/162029b))
- **Startup:** Add lnd connection test ([5045676](https://github.com/Satoshi-Engineering/volt-vault/commit/5045676))

### 🎨 Styles

- Remove console.info ([5e551fb](https://github.com/Satoshi-Engineering/volt-vault/commit/5e551fb))
- Remove function wide try catch ([912cf2e](https://github.com/Satoshi-Engineering/volt-vault/commit/912cf2e))
- Remove blank line ([1819984](https://github.com/Satoshi-Engineering/volt-vault/commit/1819984))

### 🤖 CI

- Add unit and e2e testing ([92adcfa](https://github.com/Satoshi-Engineering/volt-vault/commit/92adcfa))
- Update changelogen ([61fa222](https://github.com/Satoshi-Engineering/volt-vault/commit/61fa222))

### ❤️ Contributors

- Thespielplatz <informatics@gmx.net>
- Thomas Schagerl <tom@satoshiengineering.com>

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

