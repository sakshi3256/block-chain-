pragma solidity ^0.4.17;


contract Inbox {
    
  string public message;

  function Inbox(string initailMessage) public {
    message = initailMessage;
  }
  
     function setMessage(string newMessage) public payable {
        
        message = newMessage;
    }
    
    function getMessage() public view returns (string){
        return message;
    }
}

