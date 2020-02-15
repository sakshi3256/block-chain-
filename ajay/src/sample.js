import web3 from './web3';

const address='0xbE94e06A9FD77532215C6E638e8F6ED79cB0D188';

const abi = [
  {
    constant: false,
    inputs: [],
    name: "sendEther",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function"
  },
  {
    constant: true,
    inputs: [],
    name: "manager",
    outputs: [{ name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
  }
];


export default new web3.eth.Contract(abi,address);
