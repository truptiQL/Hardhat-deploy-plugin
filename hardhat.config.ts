import { HardhatUserConfig } from "hardhat/types";
import "hardhat-deploy";
import "hardhat-deploy-ethers";
require("dotenv").config();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  },
  networks: {
    sepolia: {
      url: process.env.SEPOLIA_URL,
      chainId: 11155111,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
  namedAccounts: {
    deployer: 0,
  },
};
export default config;
