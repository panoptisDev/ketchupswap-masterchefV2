// `hardhat run <script>`
import { run, ethers } from "hardhat";

async function main() {

  const [deployer] = await ethers.getSigners();

  const EggToken = await ethers.getContractFactory("EggToken");
  const MasterChefV2 = await ethers.getContractFactory("MasterChefV2");
  const MockLPToken = await ethers.getContractFactory("EggToken");
  const CoolToken = await ethers.getContractFactory("EggToken");
  const Multicall = await ethers.getContractFactory("Multicall");
  


  const masterChefV2 = MasterChefV2.connect(deployer).attach('0x3Ab114caEC2F9A4481adC0284a06Ad85ac238e96');
  const coolToken = CoolToken.connect(deployer).attach('0xE127539771BE02F2a199d121a6782D867A7e8115')
  const eggToken = MockLPToken.connect(deployer).attach('0xEf19Ae40fc52540A5fDfc499c3981c6eb027D77a')
  const mockLpToken = MockLPToken.connect(deployer).attach('0xF19792af657A312E1d5dA80F958fBf602524898d')
  
  // await masterChefV2.add(0, '0x89dcddca577f3658a451775d58ea99da532263c8', 0, true) // fake hidden 
  // await masterChefV2.add(100 * 25, '0xF19792af657A312E1d5dA80F958fBf602524898d', 0, true) // real mock with our token 
  // await masterChefV2.add(0, '0x2f7682b64b88149ba3250aee32db712964de5fa9', 0, true)// dependency
  // await masterChefV2.add(0, '0xE66790075ad839978fEBa15D4d8bB2b415556a1D', 0, true)// dependency
  
  // await masterChefV2.set(1, 10000, 0, true)// dependency

  // await coolToken.functions['mint(address,uint256)'](deployer.address, ethers.utils.parseUnits('1000'))
  // await mockLpToken.functions['mint(address,uint256)'](deployer.address, ethers.utils.parseUnits('500'))
  


  // await eggToken.transferOwnership('0x3Ab114caEC2F9A4481adC0284a06Ad85ac238e96')

  await masterChefV2.massUpdatePools();

  console.log('done')
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
