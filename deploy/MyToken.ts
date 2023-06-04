import {HardhatRuntimeEnvironment} from 'hardhat/types'; // This adds the type from hardhat runtime environment.
import {DeployFunction} from 'hardhat-deploy/types'; // This adds the type that a deploy function is expected to fulfill.

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) { // the deploy function receives the hardhat runtime env as an argument
  const {deployments, getNamedAccounts} = hre; // we get the deployments and getNamedAccounts which are provided by hardhat-deploy.
  const {deploy} = deployments; // The deployments field itself contains the deploy function.

  const {deployer, tokenOwner} = await getNamedAccounts(); // Fetch the accounts. These can be configured in hardhat.config.ts as explained above.

  await deploy('MyToken', { 
    from: deployer, 
    args: ['MyToken', 'MT', 18], 
    log: true, // Display the address and gas used in the console (not when run in test though).
  });

  await deploy('MyToken_v1', { // name of the deployed contract
    contract: 'MyToken', // name of the token source
    from: deployer,
    args: ['MyToken_v1', 'MT', 18 ],
    log: true,
  });
};
export default func;
func.tags = ['MyToken', 'MyToken_v1']; // This sets up a tag so you can execute the script on its own (and its dependencies).
