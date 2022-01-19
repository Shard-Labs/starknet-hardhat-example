import { HardhatUserConfig } from "hardhat/types";
import "@shardlabs/starknet-hardhat-plugin";

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const config: HardhatUserConfig = {
  cairo: {
    // uses (my-venv) defined by `python -m venv path/to/my-venv`
    // venv: "path/to/my-venv"
    
    // uses the currently active Python environment (hopefully with available Starknet commands!) 
    venv: "active"
  },
  networks: {
    devnet: {
      url: "http://localhost:5000"
    }
  },
  mocha: {
    starknetNetwork: "devnet"
    // starknetNetwork: "alpha"
  }
};

export default config;
