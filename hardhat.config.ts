import "@nomiclabs/hardhat-truffle5";
import "@nomiclabs/hardhat-waffle";
import "hardhat-deploy";
import "solidity-coverage";
import "@nomiclabs/hardhat-etherscan";
import "hardhat-dependency-compiler";
import "hardhat-typechain";
import "hardhat-tracer";
import "hardhat-spdx-license-identifier";
// yarn add @nomiclabs/hardhat-truffle5
// yarn add @nomiclabs/hardhat-waffle
// yarn add hardhat-deploy
// yarn add solidity-coverage
// yarn add @nomiclabs/hardhat-etherscan
// yarn add hardhat-dependency-compiler
// yarn add hardhat-typechain
// yarn add hardhat-tracer
// yarn add hardhat-spdx-license-identifier
// yarn add @nomiclabs/hardhat-ethers
// npx hardhat run scripts/deploy.ts --network bsc_testnet
require("dotenv").config();

module.exports = {
  defaultNetwork: "bsc_testnet",
  networks: {

    hardhat: {
      live: false,
      tags: ["local"],
      allowUnlimitedContractSize: true,
      accounts: {
        accountsBalance: "1000000000000000000000000",
      },
    },
    bsc_testnet: {
      url: "https://data-seed-prebsc-2-s2.binance.org:8545",
      chainId: 97,
      accounts: [process.env.PRIVATE_KEY_TESTNET],
    },/*
    bsc_mainnet: {
      live: true,
      url: "https://bsc-dataseed.binance.org/",
      chainId: 56,
      accounts: [process.env.PRIVATE_KEY_MAINNET],
    },
    eth_mainnet: {
      live: true,
      url: "https://mainnet.infura.io/v3/1ab9fb1648044c74be945d9d28214ac6",
      chainId: 1,
      accounts: [process.env.PRIVATE_KEY_MAINNET],
    },
    polygon: {
      live: true,
      url: "https://polygon-mainnet.infura.io/v3/1ab9fb1648044c74be945d9d28214ac6",
      chainId: 137,
      accounts: [process.env.PRIVATE_KEY_MAINNET],
    },
    avalanche: {
      live: true,
      url: "https://api.avax.network/ext/bc/C/rpc",
      chainId: 43114,
      accounts: [process.env.PRIVATE_KEY_MAINNET],
    },
    localhost: {
      live: false,
      tags: ["local"],
      url: "http://127.0.0.1:8547",
      accounts: [process.env.PRIVATE_KEY_LOCALHOST],
      gas: "auto",
    },*/
  },
  mocha: {
    timeout: "100s",
  },
  paths: {
    artifacts: "./artifacts",
    cache: "./cache",
    deploy: "deploy",
    deployments: "deployments",
    sources: "contracts",
  },
  solidity: {
    compilers: [
      {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 100,
          },
        },
      },
    ],
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },
};

// Path: scripts/deploy.ts