async function main() {
  // Get the deployer's account
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  // Get the ContractFactory and deploy the contract
  const Payments = await ethers.getContractFactory("Payments");
  const payroll = await Payments.deploy();

  await payroll.deployed();

  console.log("SimplePayroll contract deployed to:", payroll.address);
}

// Run the main function
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
