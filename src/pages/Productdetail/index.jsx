import React, { Component } from 'react'
import "./Productdetail.css";

import Logo from "../../assets/img/logo.png";
import Search from "../../assets/img/search.png";
import Chat from "../../assets/img/chat.png";
import Profile2 from "../../assets/img/mini-profile.png";
import Coldbrew from "../../assets/img/coldbrew.png";
import R from "../../assets/img/R.png";
import L from "../../assets/img/L.png";
import XL from "../../assets/img/XL.png";
import Instagram from "../../assets/img/ig.svg";
import Facebook from "../../assets/img/fb.svg";
import Twitter from "../../assets/img/tw.svg";

class Productdetail extends Component {
  render() {
    return (
      <div className='containerproductdetail'>
        <nav className='nav-container sticky-top'>
          <div className="logoproductdetail col-sm-2">
            <img src={Logo} alt="logo" />
            <p className="nameproductdetail">Cafebr!ck</p>
          </div>
          <div className="col-sm-4 navbar">
            <ul>
              <li>
                Home</li>
              <li>
                Product</li>
              <li>
                Your Cart</li>
              <li>
                History</li>
            </ul>
          </div>
          <div className="nav-icon">
            <img src={Search} alt="search" />
            <img src={Chat} alt="chat" />
            <img src={Profile2} alt="profile" />
          </div>
        </nav>
        <div className='containerproductdetail2'>
          <div className='containerproductdetail3 col-sm-4'>
            <p className='detail'>Favorite & Promo > Cold Brew</p>

            <div className='detailproduct'>
              <img className='img-detail' src={Coldbrew} alt="coldbrew"></img>
              <h1 className='name-product'>COLD BREW</h1>
              <p className='price-product'>IDR 30.000</p>
              <button className='adtocart'>Add To Cart</button>
              <button className='askastaff'>Ask a Staff</button>
            </div>
          </div>

          <div className='containerproductdetail4 col-sm-8'>
            <div className='last'>
              <p className='deliverydetail'>Delivery only on Monday to friday at  1 - 7 pm</p>
              <p className='infoproduct'>Cold brewing is a method of brewing that combines ground coffee and cool water and uses time instead of heat to extract the flavor. It is brewed in small batches and steeped for as long as 48 hours.</p>
              <p className='size-order'>Choose a size</p>
              <div className='size-container'>
                <img className='size' src={R} alt="R"></img>
                <img className='size' src={L} alt="L"></img>
                <img className='size' src={XL} alt="XL"></img>
              </div>
            </div>
          </div>
        </div>
        <div className='order'>
          <div className='order-detail'>
            <img class="img-order col-sm-3" src={Coldbrew} alt="coldbrew"></img>
            <h3 className='order-title col-sm-6'>COLD BREW <br /> XL (Extra Large) <br /> L (Large)</h3>
            <div className='count-column col-sm-3'>
            </div>
          </div>
        </div>
        <button className='button-checkout'>Checkout</button>
        <footer className="row footer1">
          <div className="col-sm-8 about1">
            <div className="about-header1 d-flex align-items-center" >
              <div className="footer-logo1">
                <img src={Logo} alt="" />
              </div>
              <div>Cafebr!ck</div>
            </div>
            <div className="about-text1">
              Cafebr!ck is a store that sells some good <br />meals, and especially coffee. We provide <br />high quality beans
            </div>
            <div className="social-media1">
              <img src={Facebook} alt="" />
              <img src={Instagram} alt="" />
              <img src={Twitter} alt="" />
            </div>
            <div className="watermark1">
              <p>@2022Cafebrick</p>
            </div>
          </div>
          <div className="col-sm-4 footer-side1">
            <div className="product1">
              <div className="product-list1">Product</div>
              <p>Download</p>
              <p>Pricing</p>
              <p>Locations</p>
              <p>Countries</p>
              <p>Blog</p>
            </div>
            <div className="engage1">
              <div className="engage-list1">Engage</div>
              <p>Cafebr!ck?</p>
              <p>FAQ</p>
              <p>About Us</p>
              <p>Privacy Policy</p>
              <p>Terms Of Service</p>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Productdetail