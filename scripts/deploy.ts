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


  console.log("masterChefV2 deployed to:", masterChefV2.address);
  console.log("eggToken deployed to:", eggToken.address);
  console.log("mockLPToken deployed to:", mockLPToken.address);
  console.log("coolToken deployed to:", coolToken.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
