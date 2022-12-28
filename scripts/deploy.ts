import * as dotenv from "dotenv";
import { ethers } from "hardhat";
dotenv.config();

let fundsAddress;
const network = "goerli";

async function main() {
  const provider = new ethers.providers.InfuraProvider(
    network,
    process.env.INFURA_API_KEY
  );

  const wallet = ethers.Wallet.fromMnemonic(process.env.MNEMONIC ?? "");
  const signer = wallet.connect(provider);

  const fundsFactory = await ethers.getContractFactory("Funds", signer);
  const fundsContract = await fundsFactory.deploy();
  await fundsContract.deployed();
  fundsAddress = fundsContract.address;
  console.log("deployed fund contract to:", fundsAddress);
}
main();
