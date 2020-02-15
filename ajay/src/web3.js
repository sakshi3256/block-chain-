
const HDWalletProvider = require('truffle-hdwallet-provider/index');
const Web3 = require('web3');

const provider = new HDWalletProvider(
  'tired kind audit swamp comic april turkey flock vault arrow private script',
  'https://rinkeby.infura.io/v3/86b2b172dafc41808b51c864185fdd9a'  
);

const web3 = new Web3(provider);


export default web3;