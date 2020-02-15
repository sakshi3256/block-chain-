import React, { Component } from 'react';
import Background from './static/img/bg.jpg';
import check from './static/img/check.png';
import web3 from './web3';
import sample from './sample';
import {Modal, ModalBody, ModalFooter, ModalHeader,Button} from 'reactstrap';

const one = require('./static/img/rooms/1.jpg');
const two = require('./static/img/rooms/2.jpg');
const three = require('./static/img/rooms/3.jpg');
const four = require('./static/img/rooms/4.jpg');
const five = require('./static/img/rooms/5.jpg');
const six = require('./static/img/rooms/6.jpg');

  var divStyle = {
    backgroundImage: 'url(' + Background + ')',
    WebkitTransition: 'all', // note the capital 'W' here
    msTransition: 'all' // 'ms' is the only lowercase vendor prefix
  };

export class Home extends Component {

    state = {
        manager: '',
        value: '.111',
        message:'',
        deploy : '',
        deployedMesage :'',
        modalisopen :false
   };

   toggleModal(){
       this.setState({
           modalisopen: ! this.state.modalisopen
       });
   }
  
  async componentDidMount(){
     const manager = await sample.methods.manager().call();
     this.setState({manager});
     console.log(manager);
   }
 
   onSubmit = async (event) =>{
         event.preventDefault();
         const accounts = await web3.eth.getAccounts();
         console.log(accounts);
 
         this.setState({message : 'Waiting on transaction success... '});
 
         const result = await sample.methods.sendEther().send({
           from: accounts[0],gas:'1000000',
           value: web3.utils.toWei(this.state.value, 'ether')
         });
 
         console.log(result);
 
         this.setState({message : 'Transaction Succeed'});
         this.setState({deployedMesage: "Contract deployed to "});
         this.setState({deploy : result.to});
          
   }
    render(){
        return(
         
            
    <div>
   
    <Modal isOpen={this.state.modalisopen}>
        <ModalHeader toggle={this.toggleModal.bind(this)}>Smart Contract</ModalHeader>
        <ModalBody>
            <p> Attempting to deploy contract from account <span style={{fontWeight: 'bold'}}> {this.state.manager}</span> </p>
            <br/>
            <h4 style={{color:'red'}}>{this.state.message}</h4>
            <br></br>
            <p style={{fontWeight: 'bold'}}>  {this.state.deployedMesage + this.state.deploy} </p>
        </ModalBody>
        <ModalFooter>
            <Button color="secondary" onClick={this.toggleModal.bind(this)}>Cancel</Button>
        </ModalFooter>
    </Modal>

    <div className="Home">
      
    <header class="header-section">
  <div class="container-fluid">
      <div class="row">
          <div class="col-lg-12">
              <div class="logo">
                  <a href="/">
                      <h3 style={{color: "white"}}>BROKERAGE</h3>
                  </a>
              </div>
              <ul className="main-menu">
                  
                  <li><a href="/">Home</a></li>
                  <li><a href="/search">Search Results</a></li>
                  <li><a href="/about">About Us</a></li>
                  
                  <li><a href="/contact">Contact</a></li>

                  <li class="top-social">
                      <a href="/#"><i className="fa fa-facebook"></i></a>
                      <a href="#"><i className="fa fa-twitter"></i></a>
                      <a href="#"><i className="fa fa-instagram"></i></a>
                      <a href="#"><i className="fa fa-linkedin"></i></a>
                  </li>
              </ul>
              <div id="mobile-menu-wrap"></div>
          </div>
      </div>
  </div>
</header>

<section class="hero-section home-page" style={divStyle}>
  <div class="container hero-text text-white">
      <h2>Find your next</h2>
      <h1>dream home.</h1>
  </div>
</section>


<section class="hotel-rooms spad">
  <div class="container">
      <div class="row">
          <div class="col-lg-4 col-md-6">
              <div class="room-items">
                  <div class="room-img set-bg" style={{backgroundImage: 'url(' + one + ')',}}>
                      <a href="/" class="room-content">
                         
                      </a>
                  </div>
                  <div class="room-text">
                      <div class="room-details">
                          <div class="room-title">
                              <h5> House with beautiful garden<br></br> and terrace</h5>
                              <a href="#"><i class="flaticon-placeholder"></i> <span>Location</span></a>
                              <a href="#" class="large-width"><i class="flaticon-cursor"></i> <span>Show on
                                      Map</span></a>
                          </div>
                      </div>
                      <div class="room-features">
                          <div class="room-info">
                              <div class="size">
                                  <p>Lot Size</p>
                                  <img src="img/rooms/size.png" alt="" />
                                  <i class="flaticon-bath"></i>
                                  <span>2061 sqft</span>
                              </div>
                              <div class="beds">
                                  <p>Beds</p>
                                  <img src="img/rooms/bed.png" alt=""/>
                                  <span>6</span>
                              </div>
                              <div class="baths">
                                  <p>Baths</p>
                                  <img src="img/rooms/bath.png" alt=""/>
                                  <span>2</span>
                              </div>
                              <div class="garage">
                                  <p>Garage</p>
                                  <img src="img/rooms/garage.png" alt="" />
                                  <span>1</span>
                              </div>
                          </div>
                      </div>
                      <div class="room-price">
                          <p>For Sale</p>
                          <span>₹ 1.5 crores</span>
                      </div>
                      <a href="#" class="site-btn btn-line">View Property</a>
  
  <center> <form onSubmit={this.onSubmit}>
    <input type="hidden" value={this.state.value} onChange={event => this.setState({ value: event.target.value })} /> 
     <br /><button class="site-btn btn-line" onClick={this.toggleModal.bind(this)}> Buy Property </button>
   </form> </center>
    
            
                  </div>
              </div>
          </div>


          <div class="col-lg-4 col-md-6">
              <div class="room-items">
                  <div class="room-img" style={{backgroundImage: 'url(' + two + ')',}}>
                      <a href="#" class="room-content">
                          <i class="flaticon-heart"></i>
                      </a>
                  </div>
                  <div class="room-text">
                      <div class="room-details">
                          <div class="room-title">
                              <h5> Stylish House with swimming pool and garden</h5>
                              <a href="#"><i class="flaticon-placeholder"></i> <span>Location</span></a>
                              <a href="#" class="large-width"><i class="flaticon-cursor"></i> <span>Show on
                                      Map</span></a>
                          </div>
                      </div>
                      <div class="room-features">
                          <div class="room-info">
                              <div class="size">
                                  <p>Lot Size</p>
                                  <img src="img/rooms/size.png" alt="" />
                                  <i class="flaticon-bath"></i>
                                  <span>1561 sqft</span>
                              </div>
                              <div class="beds">
                                  <p>Beds</p>
                                  <img src="img/rooms/bed.png" alt="" />
                                  <span>8</span>
                              </div>
                              <div class="baths">
                                  <p>Baths</p>
                                  <img src="img/rooms/bath.png" alt="" />
                                  <span>2</span>
                              </div>
                              <div class="garage">
                                  <p>Garage</p>
                                  <img src="img/rooms/garage.png" alt="" />
                                  <span>1</span>
                              </div>
                          </div>
                      </div>
                      <div class="room-price">
                          <p>For Sale</p>
                          <span>₹ 1.2 crores </span>
                      </div>
                      <a href="#" class="site-btn btn-line">View Property</a>
                      <center> <form onSubmit={this.onSubmit}>
    <input type="hidden" value={this.state.value} onChange={event => this.setState({ value: event.target.value })} /> 
     <br /><button class="site-btn btn-line" onClick={this.toggleModal.bind(this)}> Buy Property </button>
   </form> </center>
  
                  </div>
              </div>
          </div>
          <div class="col-lg-4 col-md-6">
              <div class="room-items" >
                  <div class="room-img " style={{backgroundImage: 'url(' + three + ')',}}>
                      <a href="#" class="room-content">
                          <i class="flaticon-heart"></i>
                      </a>
                  </div>
                  <div class="room-text">
                      <div class="room-details">
                          <div class="room-title">
                              <h5>Country Style House with beautiful garden and swimming pool</h5>
                              <a href="#"><i class="flaticon-placeholder"></i> <span>Location</span></a>
                              <a href="#" class="large-width"><i class="flaticon-cursor"></i> <span>Show on
                                      Map</span></a>
                          </div>
                      </div>
                      <div class="room-features">
                          <div class="room-info">
                              <div class="size">
                                  <p>Lot Size</p>
                                  <img src="img/rooms/size.png" alt=""/>
                                  <i class="flaticon-bath"></i>
                                  <span>2561 sqft</span>
                              </div>
                              <div class="beds">
                                  <p>Beds</p>
                                  <img src="img/rooms/bed.png" alt="" />
                                  <span>9</span>
                              </div>
                              <div class="baths">
                                  <p>Baths</p>
                                  <img src="img/rooms/bath.png" alt=""/>
                                  <span>2</span>
                              </div>
                              <div class="garage">
                                  <p>Garage</p>
                                  <img src="img/rooms/garage.png" alt=""/>
                                  <span>1</span>
                              </div>
                          </div>
                      </div>
                      <div class="room-price">
                          <p>For Sale</p>
                          <span>₹ 1.9 crores</span>
                      </div>
                      <a href="#" class="site-btn btn-line">View Property</a>
                      <center> <form onSubmit={this.onSubmit}>
    <input type="hidden" value={this.state.value} onChange={event => this.setState({ value: event.target.value })} /> 
     <br /><button class="site-btn btn-line" onClick={this.toggleModal.bind(this)}> Buy Property </button>
   </form> </center>
  
                  </div>
              </div>
          </div>
          <div class="col-lg-4 col-md-6">
              <div class="room-items">
                  <div class="room-img" style={{backgroundImage: 'url(' + four + ')',}}>
                      <a href="#" class="room-content">
                          <i class="flaticon-heart"></i>
                      </a>
                  </div>
                  <div class="room-text">
                      <div class="room-details">
                          <div class="room-title">
                              <h5>Country  House with beautiful garden <br/>and terrace</h5>
                              <a href="#"><i class="flaticon-placeholder"></i> <span>Location</span></a>
                              <a href="#" class="large-width"><i class="flaticon-cursor"></i> <span>Show on
                                      Map</span></a>
                          </div>
                      </div>
                      <div class="room-features">
                          <div class="room-info">
                              <div class="size">
                                  <p>Lot Size</p>
                                  <img src="img/rooms/size.png" alt="" />
                                  <i class="flaticon-bath"></i>
                                  <span>2691 sqft</span>
                              </div>
                              <div class="beds">
                                  <p>Beds</p>
                                  <img src="img/rooms/bed.png" alt="" />
                                  <span>10</span>
                              </div>
                              <div class="baths">
                                  <p>Baths</p>
                                  <img src="img/rooms/bath.png" alt=""/>
                                  <span>2</span>
                              </div>
                              <div class="garage">
                                  <p>Garage</p>
                                  <img src="img/rooms/garage.png" alt=""/>
                                  <span>1</span>
                              </div>
                          </div>
                      </div>
                      <div class="room-price">
                          <p>For Sale</p>
                          <span>₹ 2.2 crores</span>
                      </div>
                      <a href="#" class="site-btn btn-line">View Property</a>
                  </div>
              </div>
          </div>
          <div class="col-lg-4 col-md-6">
              <div class="room-items">
                  <div class="room-img"  style={{backgroundImage: 'url(' + five + ')',}}>
                      <a href="#" class="room-content">
                          <i class="flaticon-heart"></i>
                      </a>
                  </div>
                  <div class="room-text">
                      <div class="room-details">
                          <div class="room-title">
                              <h5>Country Style House with beautiful garden and terrace</h5>
                              <a href="#"><i class="flaticon-placeholder"></i> <span>Location</span></a>
                              <a href="#" class="large-width"><i class="flaticon-cursor"></i> <span>Show on
                                      Map</span></a>
                          </div>
                      </div>
                      <div class="room-features">
                          <div class="room-info">
                              <div class="size">
                                  <p>Lot Size</p>
                                  <img src="img/rooms/size.png" alt=""/>
                                  <i class="flaticon-bath"></i>
                                  <span>3561 sqft</span>
                              </div>
                              <div class="beds">
                                  <p>Beds</p>
                                  <img src="img/rooms/bed.png" alt="" />
                                  <span>7</span>
                              </div>
                              <div class="baths">
                                  <p>Baths</p>
                                  <img src="img/rooms/bath.png" alt="" />
                                  <span>2</span>
                              </div>
                              <div class="garage">
                                  <p>Garage</p>
                                  <img src="img/rooms/garage.png" alt="" />
                                  <span>1</span>
                              </div>
                          </div>
                      </div>
                      <div class="room-price">
                          <p>For Sale</p>
                          <span>₹ 2.1 crores</span>
                      </div>
                      <a href="#" class="site-btn btn-line">View Property</a>
                  </div>
              </div>
          </div>
          <div class="col-lg-4 col-md-6">
              <div class="room-items">
                  <div class="room-img" style={{backgroundImage: 'url(' + six + ')',}}>
                      <a href="#" class="room-content">
                          <i class="flaticon-heart"></i>
                      </a>
                  </div>
                  <div class="room-text">
                      <div class="room-details">
                          <div class="room-title">
                              <h5> House with beautiful garden <br/>and terrace</h5>
                              <a href="#"><i class="flaticon-placeholder"></i> <span>Location</span></a>
                              <a href="#" class="large-width"><i class="flaticon-cursor"></i> <span>Show on
                                      Map</span></a>
                          </div>
                      </div>
                      <div class="room-features">
                          <div class="room-info">
                              <div class="size">
                                  <p>Lot Size</p>
                                  <img src="img/rooms/size.png" alt="" />
                                  <i class="flaticon-bath"></i>
                                  <span>2561 sqft</span>
                              </div>
                              <div class="beds">
                                  <p>Beds</p>
                                  <img src="img/rooms/bed.png" alt="" />
                                  <span>9</span>
                              </div>
                              <div class="baths">
                                  <p>Baths</p>
                                  <img src="img/rooms/bath.png" alt="" />
                                  <span>2</span>
                              </div>
                              <div class="garage">
                                  <p>Garage</p>
                                  <img src="img/rooms/garage.png" alt=""/>
                                  <span>1</span>
                              </div>
                          </div>
                      </div>
                      <div class="room-price">
                          <p>For Sale</p>
                          <span>₹ 1.1 crores</span>
                      </div>
                      <a href="#" class="site-btn btn-line">View Property</a>
                  </div>
              </div>
          </div>
      </div>
  </div>
</section>


<section class="newslatter-section">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <div class="newslatter-text">
                    <img src={require("./static/img/message.png")} alt=""/>
                    <h4>Join our mailing to get weekly updates on <br />our exclusive deals.</h4>
                    <form>
                        <input type="text" placeholder="Email address"/>
                        <button type="submit" class="site-btn news-btn">Subscribe!</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</section>

<section className="services-section">

<div className="container">
<div className="row">
<div className="col-lg-6">
                <div className="left-side">
                    <h2><span>Why choose homes?</span><br />Because we  are the best in <br />the business.</h2>
                    <p>The need to build relationships with consumers and demonstrate a brand’s value is more important than ever. For real estate companies, content marketing is the key.

Research backs this up. According to a recent study by Kapost, content marketing has been shown to produce approximately three times as many leads per dollar as paid search. </p>
                </div>
            </div>
 
<div class="col-lg-6">
                <div class="right-side">
                    <ul>
                        <li><img src={check} alt="" />The need to build relationships with consumers .
                        </li>
                        <li><img src={check} alt="" />Praesent tincidunt diam in ante faucibus tristique.</li>
                        <li><img src={check} alt="" />Vivamus id nisl sed mi varius lobortis.</li>
                        <li><img src={check} alt="" />Suspendisse sit amet erat placerat, molestie neque id
                        </li>
                        <li><img src={check} alt="" />Fusce pretium libero sit amet ipsum posuere pretium.
                        </li>
                        <li><img src={check} alt="" />Praesent tincidunt diam in ante faucibus tristique.</li>
                    </ul>
                </div>
                </div>
 </div>
 </div>
</section>       
    

<footer className="footer-section p-40">
    <div className="container">
        <div className="row p-20">
            <div className="col-lg-12 text-center">
                <div className="copyright" >
                Copyright &copy; 2019 <span style={{color: "white"}}> All rights reserved | This Project is made  <i className="fa fa-heart-o" aria-hidden="true"></i> by Team under guidance   </span>       
                </div>
            </div>
        </div>
      </div> 
</footer>
  
</div>
</div>
    );
  }
}
