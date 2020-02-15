pragma solidity ^0.4.17;

contract Sample {
    
   address public manager;
      

  function Sample() public {
    manager = msg.sender;
  }
  
     function sendEther() public payable {
        require(msg.value > .01 ether);
    }
    
}

