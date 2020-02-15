import React from 'react';
//import './App.css';
import "./static/css/bootstrap.min.css";
import "./static/css/font-awesome.min.css";
import "./static/css/nice-select.css";
import "./static/css/slicknav.min.css";
import "./static/css/flaticon.css";
import "./static/css/style.css";

import './static/css/owl.carousel.min.css';
import "./static/css/jquery-ui.min.css";

import 'jquery';
 
import logo from './static/img/check.png';


function Home() {
  return (
    <div className="Home">

<a href="/#" class="site-btn btn-line"> BUY</a>
<section class="popular-room set-bg p-in" style={{ backgroundImage: 'url(require("./static/img/bg-2.jpg"))' }}>
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
                            <li><img src={logo} alt="" />The need to build relationships with consumers .
                            </li>
                            <li><img src={logo} alt="" />Praesent tincidunt diam in ante faucibus tristique.</li>
                            <li><img src={logo} alt="" />Vivamus id nisl sed mi varius lobortis.</li>
                            <li><img src={logo} alt="" />Suspendisse sit amet erat placerat, molestie neque id
                            </li>
                            <li><img src={logo} alt="" />Fusce pretium libero sit amet ipsum posuere pretium.
                            </li>
                            <li><img src={logo} alt="" />Praesent tincidunt diam in ante faucibus tristique.</li>
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
  );
}

export default Home;
