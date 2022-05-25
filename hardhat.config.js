require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
const dotenv = require("dotenv");

 
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.1",
  networks: {
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/989522f84be978c1de37630",
      accounts: ["ce4a7bf2e24acd9b55195a85779b9862acd12befe97e6277c"],
    },
  },
  etherscan: {
    apiKey: {
      rinkeby: '53KJ3SMHBRBC7W5NDCDCZE',
    },
  },
};
