import React, { Component } from 'react'
import { Link, Navigate } from 'react-router-dom';
import axios from "axios";
import Profilesignin from "../../assets/img/profilesignin.png";
import Google from "../../assets/img/google.png";
import Instagram from "../../assets/img/ig.svg";
import Facebook from "../../assets/img/fb.svg";
import Twitter from "../../assets/img/tw.svg";
import Logo from "../../assets/img/logo.png";
import OpenEye from "../../assets/img/open-eye.png";
import ClosedEye from "../../assets/img/closed-eye.png";


import "./Auth.css";


class Auth extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      pass: "",
      phone_number: "",
      isError: false,
      errorMsg: "",
      isRegistered: false,
      isPasswordShown: false,
      isSuccess: "",
    };
  };

  render() {
    if (this.state.isRegistered === true) {
      return <Navigate to="/Login" />
    }
    return (
      <main className='box'>
        <aside className="side-auth">
          <img className="side-imgauth" src={Profilesignin} alt="" />
        </aside>
        <section className="main-headerauth">
          <header className="headerauth">
            <img className="logo-imgauth" src={Logo} alt="logo" />
            <p className="main-header-titleauth">Cafebr!ck</p>
            <div className="titleauth">
              <p className="title-textauth">Sign Up</p>
            </div>
          </header>

          <div className="formauth">
            <div className="containerauth">
              <form className="form-containerauth">
                <div className="mb-3">
                  <label htmlFor='email' className="label-input-auth">Email Address :</label>
                  <input type="text" className="auth-input-text" placeholder="Enter your email adress"
                    onChange={(e) => {
                      this.setState({
                        email: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor='pass' className="label-input-auth">Password :</label>
                  <input type={this.state.isPasswordShown ? "text" : "password"} className="auth-input-password" placeholder="Enter your password"
                    onChange={(e) => {
                      this.setState({
                        pass: e.target.value
                      });
                    }}
                  />
                  <div className='icon-pass-container'
                    onClick={() => {
                      this.setState({
                        isPasswordShown: !this.state.isPasswordShown
                      })
                    }}>
                    {this.state.isPasswordShown ? <img src={OpenEye} alt="Open-Eye" className='pass-icon' /> : <img src={ClosedEye} alt="Closed-Eye" className='pass-icon' />}
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor='phone_number' className="label-input-auth">Phone Number :</label>
                  <input type="text" className="auth-input-text" placeholder="Enter your phone number"
                    onCange={(e) => {
                      this.setState({
                        phone_number: e.target.value,
                      });
                    }}
                  />
                </div>
                {/* {this.state.isError ? <div className='signup-error'>{this.state.errorMsg}</div> : <></>} */}

                <div className="mb-3">
                  <button className="btn-signup" data-bs-toggle="modal" data-bs-target="#exampleModal"
                    onClick={() => { 
                      alert("hallo")
                      const { email, pass, phone_number } = this.state;
                      const body = {email, pass, phone_number};
                  axios
                  .post(`${process.env.REACT_APP_HOST}/auth/new`, body)
                  .then(result => {
                    console.log(result.data.data)
                    this.setState({
                    isError: false,
                    isSuccess: result.data.data.msg,
                    })
                  })
                  .catch(error => {
                    console.log(error.response)
                    this.setState({
                    isError: true,
                  errorMsg: `${error.response.data.err.msg}`
                    })
                  })
                }}
                >
                  Sign Up
                  </button>
                </div>
                <div className="mb-3">
                  <button type="button" className="btn-google">
                    <img className="img-google" src={Google} alt="google" />
                    Sign up with Google
                  </button>
                </div>
                <section className="has-accountauth">
                  <div className="underlineauth"></div>
                  <p className="has-account-textauth">Already have an account?</p>
                  <div className="underlineauth"></div>
                </section>
                <div className="mb-3">
                  <Link to="/login">
                    <button type="button" className="btn-login">
                      Login Here
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>

          <footer className="side-infoauth">
            <section className="left-infoauth">
              <section className="headauth">
                <img className="logo-img2auth" src={Logo} alt="logo" />
                <p className="logo-textauth">Cafebr!ck</p>
              </section>
              <section className="body-infoauth">
                <p className="left-textauth">
                  Cafebr!ck is a store that sells some good meals, and
                  especially coffee. We provide high quality beans
                </p>
              </section>
              <section className="sosmedauth">
                <div className="sosmed-iconauth">
                  <img className="sosmed-imgauth" src={Facebook} alt="fb" />
                </div>
                <div className="sosmed-iconauth">
                  <img className="sosmed-imgauth" src={Twitter} alt="tw" />
                </div>
                <div className="sosmed-iconauth">
                  <img className="sosmed-imgauth" src={Instagram} alt="ig" />
                </div>
              </section>
              <section className="left-footerauth">
                <p className="footer-textauth">©2022Cafebr!ck</p>
              </section>
            </section>
            <section className="right-infoauth">
              <div className="bodyauth">
                <p className="right-text-head">Product</p>
                <p className="right-text">Download</p>
                <p className="right-text">Pricing</p>
                <p className="right-text">Locations</p>
                <p className="right-text">Countries</p>
                <p className="right-text">Blog</p>
              </div>
              <div className="bodyauth">
                <p className="right-text-head">Engage</p>
                <p className="right-text">Cafebr!ck?</p>
                <p className="right-text">About Us</p>
                <p className="right-text">FAQ</p>
                <p className="right-text">Privacy Policy</p>
                <p className="right-text">Terms of Service</p>
              </div>
            </section>
          </footer>
        </section>
      </main>
    )
  }
}

export default Auth