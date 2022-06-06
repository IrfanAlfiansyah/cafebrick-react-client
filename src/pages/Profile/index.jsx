import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Profile.css';
import Instagram from "../../assets/img/ig.svg";
import Facebook from "../../assets/img/fb.svg";
import Twitter from "../../assets/img/tw.svg";
import Logo from "../../assets/img/logo.png";
import Search from "../../assets/img/search.png";
import Chat from "../../assets/img/chat.png";
import Profile1 from "../../assets/img/profile.png";
import Profile2 from "../../assets/img/mini-profile.png";

class Profile extends Component {
  render() {
    return (
      <div className="container-profil">
        <nav className="nav-container sticky-top">
          <div className="col-sm-3 logo">
            <img className='logo-profil' src={Logo} alt="logo" />
            <p className="name">Cafebr!ck</p>
          </div>
          <div className="col-sm-6 navbar-profil">
            <ul>
              <Link to="/">
                <li>
                  Home</li></Link>
              <Link to="/product">
                <li>
                  Product</li></Link>
              <li>
                Your Cart</li>
              <li>
                History</li>
            </ul>
          </div>
          <div className="col-sm-3 nav-icon">
            <img src={Search} alt="search" />
            <img src={Chat} alt="chat" />
            <img src={Profile2} alt="profile" />
          </div>
        </nav>
        <main className="main-container">
          <h2 className="user-profile">User Profile</h2>
          <div className="profile-container">
            <div className="profile-info">
              <div className="profile">
                <img
                  src={Profile1}
                  alt="profile-user" />
                <div className="username">
                  <h3>Zulaikha</h3>
                  <p>zulaikha17@gmail.com</p>
                </div>
              </div>
              <form>
                <div className="profile-button">
                  <button className="choose-photo" type="submit">Choose photo</button>
                  <button className="remove-photo" type="submit">Remove photo</button>
                  <button className="edit-password" type="submit">Edit Password</button>
                  <p>Do you want to save the change?</p>
                  <button className="save-change" type="submit">Save Change</button>
                  <button className="cancel" type="submit">Cancel</button>
                  <button className="logout" type="submit">Log out</button>
                </div>
              </form>
            </div>
            <div className="profile-detail">
              <div className="contacts">
                <h3>Contacts</h3>
                <form className="form-contacts">
                  <div className="from-email-adress">
                    <label className='label-input' for="email">Email adress :</label>
                    <input className='input-form' type="email" id="email" placeholder="Enter your email adress" />
                    <label className='label-input' for="adres">Delivery adress :</label>
                    <input className='input-form' type="text" id="adress" placeholder="Enter your delivery adress" />
                  </div>
                  <div className="form-phone">
                    <label className='label-input' for="phone">Mobile number :</label>
                    <input className='input-form' type="text" id="phone" placeholder="Enter your mobile number" />
                  </div>
                </form>
              </div>
              <div className="details">
                <h3>Details</h3>
                <form className="form-details">
                  <div className="form-display-first-last">
                    <label className='label-input' for="name">Display name :</label>
                    <input className='input-form' type="text" id="name" placeholder="Enter your display name" />
                    <label className='label-input' for="first">First name :</label>
                    <input className='input-form' type="text" id="first" placeholder="Enter your first name" />
                    <label className='label-input' for="last">Last name :</label>
                    <input className='input-form' type="text" id="last" placeholder="Enter your last name" />
                  </div>
                  <div className="form-date">
                    <label className='label-input' for="date">DD/MM/YY</label>
                    <input className='input-form' type="date" id="last" placeholder="Enter your birthday date" />
                  </div>
                </form>
              </div>
              <div className="gender">
                <label className="radio-container">Male
                  <input type="radio" checked="checked" name="radio" />
                  <span className="checkmark"></span>
                </label>
                <label className="radio-container">Female
                  <input type="radio" name="radio" />
                  <span className="checkmark"></span>
                </label>
              </div>
            </div>
          </div>
        </main>
        <footer className="footer-container-profil">
          <div className="main-footer">
            <div className="col-sm-6 desc-footer">
              <div className="logo-img">
                <img src={Logo} alt="logo" />
                <p>Cafebr!ck</p>
              </div>
              <p className="description">Cafebr!ck is a store that sells some good meals, and especially coffee. We provide
                high quality beans</p>
              <img src={Facebook} alt="fb" />
              <img src={Twitter} alt="tw" />
              <img src={Instagram} alt="ig" />
              <p className="copy-right">©2022Cafebr!ck</p>
            </div>
            <div className="list-footer">
              <div className="col-sm-3 product-profil">
                <h3>Product</h3>
                <ul>
                  <li>Download</li>
                  <li>Pricing</li>
                  <li>Location</li>
                  <li>Countries</li>
                  <li>Blog</li>
                </ul>
              </div>
              <div className="col-sm-3 engage-profil">
                <h3>Engage</h3>
                <ul>
                  <li>Cafebr!ck?</li>
                  <li>FAQ</li>
                  <li>About Us</li>
                  <li>Privacy Policy</li>
                  <li>Terms of Service</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Profile