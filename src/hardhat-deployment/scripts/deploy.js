// imports
const { ethers, run, network } = require("hardhat")

// async main
async function main() {
  MoneyTransferFactory = await ethers.getContractFactory("MoneyTransfer")
  console.log("Deploying contract...")
  const moneyTransfer = await MoneyTransferFactory.deploy()
  console.log("Contract deployed at:", moneyTransfer.target)
}

// main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })