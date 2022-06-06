import React, { Component } from 'react'
import './Payment.css';
import Search from "../../assets/img/search.png";
import Chat from "../../assets/img/chat.png";
import Profile2 from "../../assets/img/mini-profile.png";
import Logo from "../../assets/img/logo.png";
import Order1 from "../../assets/img/hazelnutlatte.png"
import Order2 from "../../assets/img/chicken.png"
import Card from "../../assets/img/card.png"
import Bank from "../../assets/img/bank.png"
import Cod from "../../assets/img/cod.png"
import Instagram from "../../assets/img/ig.svg";
import Facebook from "../../assets/img/fb.svg";
import Twitter from "../../assets/img/tw.svg";

class Payment extends Component {
  render() {
    return (
      <div className='global-containerpy'>
        <div className="header-py row sticky-top">
          <div className="col-sm-3 logo-py">
            <img src={Logo} alt="logo" />
            <h1>Cafebr!ck</h1>
          </div>
          <div className="col-sm-6 navigasi-py">
            <li>Home</li>
            <li>Product</li>
            <li>Your Cart</li>
            <li>History</li>
          </div>
          <div className="col-sm-3 payment">
            <div className="search-py">
              <img src={Search} alt="search" />
            </div>
            <div className="message-py">
              <img src={Chat} alt="chat" />
            </div>
            <div className="profile-py">
              <img src={Profile2} alt="user" />
            </div>
          </div>
        </div>
        <div className='main-contentpy'>
          <div className='item-container'>
            <h1>Checkout your <br /> item now!</h1>
            <div className='box-item'>
              <h1>Order Sumary</h1>
              <div className='detail-order1'>
                <img src={Order1} alt="hazelnut-latte" />
                <div className='description1'>
                  <h2>Hazelnut Latte</h2>
                  <h2>X 1</h2>
                  <h2>Regular</h2>
                </div>
                <h3>IDR 24.000</h3>
              </div>
              <div className='detail-order2'>
                <img src={Order2} alt="chicken-fire-wings" />
                <div className='description2'>
                  <h2>Chicken Fire Wings</h2>
                  <h2>X 2</h2>
                </div>
                <h3>IDR 30.000</h3>
              </div>
              <div className='price-bar'>
                <div className='subtotal-py'>
                  <p>SUBTOTAL</p>
                  <p>TAX & FEES</p>
                  <p>SHIPPING</p>
                </div>
                <div className='price-py'>
                  <p>IDR 120.000</p>
                  <p>IDR 20.000</p>
                  <p>IDR 10.000</p>
                </div>
              </div>
              <div className='total-py'>
                <p>TOTAL</p>
                <p>IDR 150.000</p>
              </div>
            </div>
          </div>
          <div className='right-container'>
            <div className='item-container2'>
              <div className='label-py'>
                <h1>Address Details</h1>
                <h3>edit</h3>
              </div>
              <div className='box-item2'>
                <h2>Delivery to Iskandar Street</h2>
                <p>Km 5 refinery road oppsite republic road, effurun, Jakarta</p>
                <p>+62 81348287878</p>
              </div>
            </div>
            <div className='item-container3'>
              <div className='method-py'>
                <h1>Payment Method</h1>
              </div>
              <form className='form-payment'>
                <label className="pm-radio-method-container">
                  <input type="radio" name="pm-method-input" />
                  <span className="checkmark"></span>
                  <div className='pm-card-vector-container'>
                    <img src={Card} alt="card" className='pm-card-vector' />
                  </div>
                  <p>Card</p>
                </label>
                <label className="pm-radio-method-container">
                  <input type="radio" name="pm-method-input" />
                  <span className="checkmark"></span>
                  <div className='pm-bank-vector-container'>
                    <img src={Bank} alt="" className='pm-bank-vector' />
                  </div>
                  <p>Bank account</p>
                </label>
                <label className="pm-radio-method-container">
                  <input type="radio" name="pm-method-input" />
                  <span className="checkmark"></span>
                  <div className='pm-cod-vector-container'>
                    <img src={Cod} alt="" className='pm-cod-vector' />
                  </div>
                  <p>Cash on Delivery</p>
                </label>
              </form>
              <button className='confirm-py'>Confirm and Pay</button>
            </div>
          </div>
        </div>
        <footer className='footer-py'>
          <div className='footer-left-py col-sm-8'>
            <div className='title-botpy'>
              <img src={Logo} alt='logo'></img>
              <p>Cafebr!ck</p></div>
            <div className="about-textpy">
              Cafebr!ck is a store that sells some good meals, and especially coffee. We provide high quality beans
            </div>
            <div className="social-mediapy">
              <img src={Facebook} alt="" />
              <img src={Instagram} alt="" />
              <img src={Twitter} alt="" />
            </div>
            <div className="watermarkpy">
              <p>@2022Cafebr!ck</p>
            </div>
          </div>

          <div className="productpy col-sm-2">
            <div className="product-listpy">Product</div>
            <p>Download</p>
            <p>Pricing</p>
            <p>Locations</p>
            <p>Countries</p>
            <p>Blog</p>
          </div>
          <div className="productpy col-sm-2">
            <div className="product-listpy">Engage</div>
            <p>Cafebr!ck?</p>
            <p>FAQ</p>
            <p>About Us</p>
            <p>Privacy Policy</p>
            <p>Terms Of Service</p>
          </div>
        </footer>
      </div >
    )
  }
}

export default Payment