const hre = require("hardhat");

async function main() {
 
  const Flocked = await hre.ethers.getContractFactory("flocked");
  const flocked = await Flocked.deploy();

  await flocked.deployed();

  console.log("flocked deployed to:", flocked.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
