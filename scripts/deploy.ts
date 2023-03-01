// `hardhat run <script>`
import { run, ethers } from "hardhat";

async function main() {

  const [deployer] = await ethers.getSigners();

  const EggToken = await ethers.getContractFactory("EggToken");
  const MasterChefV2 = await ethers.getContractFactory("MasterChefV2");
  const MockLPToken = await ethers.getContractFactory("EggToken");
  const CoolToken = await ethers.getContractFactory("EggToken");
  
  const eggToken = await EggToken.deploy();
  await eggToken.deployed();

  const masterChefV2 = await MasterChefV2.deploy(eggToken.address, deployer.address, deployer.address, '1000000000000000000', ethers.provider.blockNumber);
  const mockLPToken = await MockLPToken.deploy();
  const coolToken = await CoolToken.deploy();

  await coolToken.deployed();
  await masterChefV2.deployed();
  await mockLPToken.deployed();


  // todo transfer initial tokens
  await eggToken.functions['mint(address,uint256)'](deployer.address, ethers.utils.parseUnits('100000'))
  await eggToken.transferOwnership(masterChefV2.address);

 

  console.log("eggToken deployed to:", eggToken.address);
  console.log("mockLPToken deployed to:", mockLPToken.address);
  console.log("coolToken deployed to:", coolToken.address);
  console.log("masterChefV2 deployed to:", masterChefV2.address);

  // print the address of the deployed contract
  console.log("Verify Contract Address:", eggToken.address);
  console.log("Verify Contract Address:", mockLPToken.address);
  console.log("Verify Contract Address:", coolToken.address);
  console.log("Verify Contract Address:", masterChefV2.address);

  console.log("Sleeping.....");
  // Wait for etherscan to notice that the contract has been deployed
  await sleep(10000);

  // Verify the contract after deploying
  await run("verify:verify", {
    address: eggToken.address,
    constructorArguments: [
      'EggToken',
      'EGG',
      '1000000000000000000000000'
    ],
  });

  await run("verify:verify", {
    address: mockLPToken.address,
    constructorArguments: [
      'MockLPToken',
      'MLP',
      '1000000000000000000000000'
    ],
  });

  await run("verify:verify", {
    address: coolToken.address,
    constructorArguments: [
      'CoolToken',
      'COOL',
      '1000000000000000000000000'
    ],
  });

  await run("verify:verify", {
    address: masterChefV2.address,
    constructorArguments: [
      eggToken.address,
      deployer.address,
      deployer.address,
      '1000000000000000000',
      ethers.provider.blockNumber
    ],
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
  
// Hardhat will run the script again automatically when you change it.