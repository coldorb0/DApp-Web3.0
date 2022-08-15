require("@nomiclabs/hardhat-waffle");


task("accounts", "Prints the list of accounts", async (taskArgs, hre) =>
{
const accounts = await hre.ethers.getSigners();
for (const account of accounts) {
console.log(account.address);
}
});





/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.4",
  paths: {                         // add this 
    artifacts: './src/artifacts',  // this is where our compiled contracts will go
  },
  networks: {                      // and this ... 
    hardhat: {
      chainId: 1337                // this is needed for MetaMask
    },
  ropsten: {
    url: "https://ropsten.infura.io/v3/75102bb91ce34f7fb44dd0745753812e",
    accounts: [
      "3aa9d1bbefa9f32b9b81b2fae29e66f5926acc16ae072c7cf55011b620c40dc5"
    ]
  }
  }
};
