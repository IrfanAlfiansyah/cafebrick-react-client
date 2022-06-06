import React, { Component } from 'react'
import './ForgotPassword.css';
import Banner from "../../assets/img/coffee3.png";
import Logo from "../../assets/img/logo.png";
import Instagram from "../../assets/img/ig.svg";
import Facebook from "../../assets/img/fb.svg";
import Twitter from "../../assets/img/tw.svg";

class ForgotPassword extends Component {
  render() {
    return (
      <div className='global-container'>
        <aside className='sidefp'>
          <img className='side-imgfp' src={Banner} alt="banner" />
        </aside>
        <main className='main-fp'>
          <div className='content-fp'>
            <div className='header-fp'>
              <img className='logo-imgfp' src={Logo} alt='logo'></img>
              <p className='main-header-titlefp'>Cafebr!ck</p>
            </div>
            <div className='titlefp'>
              <h1>Forgot Your Password?</h1>
              <p>Don't Worry, We Got Your Back!</p>
            </div>
            <form className="forgot-form">
              <label htmlFor='fp' className="label-input-fp"></label>
              <input className="input-fp" type="text" placeholder="Enter your email address to get link" />
            </form>
            <button className='send-fp'>Send</button>
            <div className='info-fp'>
              <h1>Click here if you didn’t receive any link in 2 minutes</h1>
              <p>01:52</p>
            </div>
            <button className='resend-fp'>Resend Link</button>
          </div>
          <footer className='footer-fp '>
            <div className='footer-left-fp col-sm-7'>
              <div className='title-botfp'>
                <img src={Logo} alt='logo'></img>
                <p>Cafebr!ck</p></div>
              <div className="about-textfp">
                Cafebr!ck is a store that sells some good meals, and especially coffee. We provide high quality beans
              </div>
              <div className="social-mediafp">
                <img src={Facebook} alt="" />
                <img src={Instagram} alt="" />
                <img src={Twitter} alt="" />
              </div>
              <div className="watermarkfp">
                <p>@2022Cafebr!ck</p>
              </div>
            </div>
            <div className='footer-right-fp col-sm-5'>
              <div className="productfp">
                <div className="product-listfp">Product</div>
                <p>Download</p>
                <p>Pricing</p>
                <p>Locations</p>
                <p>Countries</p>
                <p>Blog</p>
              </div>
              <div className="productfp">
                <div className="product-listfp">Engage</div>
                <p>Cafebr!ck?</p>
                <p>FAQ</p>
                <p>About Us</p>
                <p>Privacy Policy</p>
                <p>Terms Of Service</p>
              </div>
            </div>
          </footer>
        </main>
      </div>
    )
  }
}

export default ForgotPassword