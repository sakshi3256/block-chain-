const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const {interface , bytecode} = require('../compile');


let accounts;
let sample;

beforeEach((async ()=>{

   accounts =  await web3.eth.getAccounts();
    
   sample = await new web3.eth.Contract(JSON.parse(interface))
              .deploy({ data: bytecode })
              .send({ from: accounts[0], gas: '1000000' });
}));

describe('Inbox', ()=>{
    it('deploys a contract',()=>{
           assert.ok(sample.options.address);
      });

      it('sending ether successfully',async () => {
          await sample.methods.sendEther().send({
          from: accounts[0],
          value: web3.utils.toWei('.01', 'ether')
         });
      });
      

});
/*
class Car{
    
    park(){
        return 'stoped';
    }

    drive(){
        return 'room';
    }

}

let car;

beforeEach(() =>{
     car = new Car();
});


describe('Car',()=>{
    it('can park',()=>{
      assert.equal(car.park(),'stoped');  
    });

    it('can drive',() =>{
       assert.equal(car.drive(),'room');
    });
}); */