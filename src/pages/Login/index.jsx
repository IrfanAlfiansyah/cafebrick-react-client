import React, { Component } from 'react'
import { Link, Navigate } from 'react-router-dom';
import axios from "axios";
import Profilesignin from "../../assets/img/profilesignin.png";
import Google from "../../assets/img/google.png";
import Instagram from "../../assets/img/ig.svg";
import Facebook from "../../assets/img/fb.svg";
import Twitter from "../../assets/img/tw.svg";
import Logo from "../../assets/img/logo.png";

import './Login.css';

class Login extends Component {
  state = {
    email: "",
    pass: "",
    isPasswordShown: false,
    isError: false,
    errorMsg: "",
    isSuccess: false,
  }
  render() {
   if (this.state.isSuccess === true) {
    return <Navigate to="/" />
   }
    //const userInfo = JSON.parse(localStorage.getItem("userinfo-cafebrick"));
    //console.log(userInfo.token)
    return (
      <div className="containerlog">
        <aside className="side-content">
          <img src={Profilesignin} alt="profile-signin" className="profile-login" />
        </aside>

        <main className="main-contentlog">
          <header className="main-headerlog">
            <img src={Logo} alt="coffee-shop-logo" className="coffee-shop-logo" />
            <p className="main-header-titlelog">Cafebr!ck</p>
            <p className="login">Login</p>
          </header>
          <form className="register-form">
            <label htmlFor='email' className="label-input-login" for="email">Email Address :</label>
            <input className="login-input-text" type="text"placeholder="Enter your email address"
              onChange={(e) => {
                this.setState({
                  email: e.target.value,
                });
              }}
            />
            <label htmlFor='pass' className="label-input-login" for="password">Password :</label>
            <input className="login-input-password" type={`${this.state.isPasswordShown ? "text" : "password"}`} placeholder="Enter your password"
              onChange={(e) => {
                this.setState({
                  pass: e.target.value,
                });
              }}
            />
            {this.state.isError ? <p>{this.state.errorMsg}</p> : <></>}
            <label className='check-pass'>
              <input type="checkbox" value={this.state.isPasswordShown}
                onChange={() => {
                  this.setState({
                    isPasswordShown: !this.state.isPasswordShown,
                  });
                }}
              >
              </input>Show Password
            </label>
          </form>

          <Link to="/forgotpassword">
            <p className="forgot-password-text">Forgot Password? </p>
          </Link>
          <button type="button" className="login-submit"
            onClick={() => {
              const { email, pass } = this.state;
              const body = {
                email,
                pass,
              };
              axios.post(`${process.env.REACT_APP_HOST}/auth`, body)
                .then((result) => {
                  console.log(result.data);
                  localStorage.setItem(
                    "userinfo-cafebrick",
                    JSON.stringify(result.data.data));
                  this.setState({
                    isError: false,
                    errorMsg: "",
                    isSuccess: true,
                  });
                })
                .catch((error) => {
                  console.log(error)
                  this.setState({
                    isError: true,
                    errorMsg: error.response.data.err.msg,
                  });
                });
            }}
          >
            Login
          </button>
          <section className="other-login-method">
            <button className="other-login-method"> <img src={Google} alt="google-logo"
              className="coffee-shop-logo" />Login With Google </button>
          </section>

          <section className="has-account">
            <div className="underline"></div>
            <p className="has-account-text">Don't have an account?</p>
            <div className="underline"></div>
          </section>
          <Link to="/auth">
            <div className="signup-button">Signup Here</div>
          </Link>
          <footer className="row footerlog">
            <div className="col-sm-7 aboutlog">
              <div className="about-headerlog d-flex align-items-center" >
                <div className="footer-logolog">
                  <img src={Logo} alt="" />
                </div>
                <div>Cafebr!ck</div>
              </div>
              <div className="about-textlog">
                Cafebr!ck is a store that sells some good <br />meals, and especially coffee. We provide <br />high quality beans
              </div>
              <div className="social-medialog">
                <img src={Facebook} alt="" />
                <img src={Instagram} alt="" />
                <img src={Twitter} alt="" />
              </div>
              <div className="watermarklog">
                <p>@2022Cafebrick</p>
              </div>
            </div>
            <div className="col-sm-5 footer-sidelog">
              <div className="product1">
                <div className="product-listlog">Product</div>
                <p>Download</p>
                <p>Pricing</p>
                <p>Locations</p>
                <p>Countries</p>
                <p>Blog</p>
              </div>
              <div className="engagelog">
                <div className="engage-listlog">Engage</div>
                <p>Cafebr!ck?</p>
                <p>FAQ</p>
                <p>About Us</p>
                <p>Privacy Policy</p>
                <p>Terms Of Service</p>
              </div>
            </div>
          </footer>
        </main >
      </div >
    );
  }
}


export default Login