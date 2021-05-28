const dotenv = require('dotenv');
var HDWalletProvider = require("truffle-hdwallet-provider");
dotenv.config();
const MNEMONIC = process.env.MNEMONIC_KEY;

module.exports = {
  compilers: {
    solc: {
      version: "0.8.4",
    },
  },
  plugins: [
    'truffle-plugin-verify'
  ],
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    ropsten: {
      provider: function() {
        return new HDWalletProvider(MNEMONIC, "https://ropsten.infura.io/v3/8672bb19b17947da8c48c7669d3498ab")
      },
      network_id: 3,
      gas: 4000000      //make sure this gas allocation isn't over 4M, which is the max
    },
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    develop: {
      port: 8545
    }
  },
  api_keys: {
    etherscan: process.env.ETHERSCAN_KEY
  }
};
