# xSwap Smart Contracts (v2)

- Language: Solidity v0.8.16
- Project framework: Hardhat
- Node.js: v18
- Yarn: v1.22

### Setup Environment

1. Ensure you have relevant Node.js version. For NVM: `nvm use`

2. Install dependencies: `yarn install`

3. Setup environment variables:

    * Clone variables example file: `cp .env.example .env`
    * Edit `.env` according to your needs

### Development Commands

Below is the list of commands executed via `yarn` with their descriptions:

 Command                | Alias            | Description
------------------------|------------------|------------
 `yarn hardhat`         | `yarn h`         | Call [`hardhat`](https://hardhat.org/) CLI
 `yarn build`           | `yarn b`         | Compile contracts (puts to `artifacts` folder)
 `yarn lint`            | `yarn l`         | Run linter against contracts in `contracts` folder
 `yarn prettify`        | `yarn p`         | Format code of contracts in `contracts` folder
 `yarn test`            | `yarn t`         | Run contract tests from `test` folder
 `yarn coverage`        | `yarn c`         | Generate test coverage report

There is a set of custom `hardhat` commands. Each of them can be called via `yarn hardhat`:

```
yarn h --network <network> <q-command> <q-command-arguments>
```

where:

* `<network>` - network to execute command in, e.g. `polygon`. See all networks in `hardhat.config.ts`
* `<q-command>` - command from the table of available ones below
* `<q-command-arguments>` - arguments corresponding to the command from the table below

See `hardhat.config.ts` for all supported commands with descriptions. Note that parameters listed in
the config as `camelCase` must be provided as `kebab-case` to the `hardhat` executable, for example:

```ts
task('x-protocol-bridge-hyphen-deploy', 'Deploys Hyphen bridge protocol')
  .addParam('hyphen', 'Hyphen contract address')
  .addParam('withdrawWhitelist', 'Withdraw whitelist contract address')
  .addFlag('dry', 'Perform a dry run (estimate only)')
  .addOptionalParam('nonce', 'Nonce override')
  .setAction(...)
```

will be transformed to (for Polygon network here):

```
yarn hp x-protocol-bridge-hyphen-deploy --hyphen 0x123..aBc --withdraw-whitelist 0x123..aBc --dry
```

These commands may also be helpful:

```shell
yarn h help
yarn h node
yarn h run
```

### Contract Verification

In order to verify a contract:

* Get your hands on address of deployed smart contract to verify: `<contract-address>`
* Make sure you've built smart contracts with `yarn build`. Get full contract name to verify: `<contract-name>`
* Pick an explorer to verify contract in: `<explorer-network>`. IDs differ from networks but correlate.
  See the `etherscan` section in the `hardhat.config.ts`
* Ensure you have an API key specified for `<explorer-network>` in `.env`
* Run the verification command: `yarn h verify --network <explorer-network> --contract <contract-name> <contract-address>`

An example of contract verification call:

```
yarn h verify \
  --network polygon \
  --contract contracts/protocols/MultiChain.sol:MultiChainProtocol \
  0xA5d6357901c6E44B5781C8ce0103c3B71EE2B661
```
