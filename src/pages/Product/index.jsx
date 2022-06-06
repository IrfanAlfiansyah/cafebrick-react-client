import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Product.css';
import Instagram from "../../assets/img/ig.svg";
import Facebook from "../../assets/img/fb.svg";
import Twitter from "../../assets/img/tw.svg";
import Logo from "../../assets/img/logo.png";
import Hazelnut from "../../assets/img/hazelnutlatte.png"
import Drumstick from "../../assets/img/drumstick.png"
import Creamyicelatte from "../../assets/img/creamyicelatte.png"
import Saltyrice from "../../assets/img/saltyrice.png"
import Search from "../../assets/img/search.png";
import Chat from "../../assets/img/chat.png";
import Profile2 from "../../assets/img/mini-profile.png";
import Beef from "../../assets/img/beef.png"
import Summerfriedrice from "../../assets/img/summerfriedrice.png"
import Veggie from "../../assets/img/veggie.png"

class Product extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row header-pr sticky-top">
          <div className="col-sm-3 logo-pr">
            <img src={Logo} alt="logo" />
            <h2>Cafebr!ck</h2>
          </div>
          <div className="col-sm-6 navigasi-pr">
            <Link to="/">
              <li>Home</li></Link>
            <li>Product</li>
            <li>Your Cart</li>
            <li>History</li>
          </div>
          <div className="col-sm-3 auth-pr">
            <div className="searchIcon">
              <img src={Search} alt="search" />
            </div>
            <div className="message-pr">
              <div className="message-count">1</div>
              <img src={Chat} alt="chat" />
            </div>
            <div className="profile-pr">
              <Link to="/profile">
              <img className="profile-imgpr" src={Profile2}alt="user" />
              </Link>
            </div>
          </div>
        </div>
        <div className="row body">
          <div className="col-sm-4 row side-barpr">
            <div className="promo-title">
              <h3>Promo for you</h3>
              <p>Coupons will be updated every weeks.</p>
              <p>Check them out</p>
            </div>
            <div className="layer">
              <div className="img-containerpr">
                <img src={Beef} alt="products" />
                <div className="discountpr">
                  <h2>Beef Spaghetti</h2>
                  <h2>20% OFF</h2>
                  <p>Buy 1 Choco Oreo and get 20% off</p>
                  <p>for Beef Spaghetti</p>
                  <div className="dash-line"></div>
                  <div className="coupon">
                    <div className="p2">COUPON CODE</div>
                    <h1>FNPR15RG</h1>
                    <p>Valid until October 10th 2022</p>
                  </div>
                </div>
              </div>
              <div className="black-layer"></div>
              <div className="brown-layer"></div>
            </div>
            <div className="apply">
              <div className="apply-coupon">Apply Coupon</div>
            </div>
            <div className="terms">
              <h5>Terms and Condition</h5>
              <p>1. You can only apply 1 coupon per day</p>
              <p>2. It only for dine in</p>
              <p>3. Buy 1 get 1 only for new user</p>
              <p>4. Should make member card to apply coupon</p>
            </div>
          </div>
          <div className="col-sm-8 content">
            <div className="d-flex justify-content-around product-header">
              <div className="header-item">Favorit Product</div>
              <div className="header-item">Coffee</div>
              <div className="header-item">Non Coffee</div>
              <div className="header-item">Foods</div>
              <div className="header-item">Add on</div>
            </div>
            <div className="row favorite-productpr">
              <div className="col-sm-2 d-flex flex-column product-container">
                <div className="d-flex flex-column align-items-center justify-content-center card-product">
                  <img className="img-product" src={Veggie} alt="vegie" />
                  <div className="name-pr">Veggie</div>
                  <div className="name">Tomato</div>
                  <div className="name">Mix</div>
                  <div className="price-pr">IDR 34.000</div>
                </div>
              </div>
              <div className="col-sm-2 d-flex flex-column product-container">
                <div className="d-flex flex-column align-items-center justify-content-center card-product">
                  <img className="img-product" src={Hazelnut} alt="hazelnut" />
                  <div className="name-pr">Hazelnut</div>
                  <div className="name">Latte</div>
                  <div className="price-pr">IDR 25.000</div>
                </div>
              </div>
              <div className="col-sm-2 d-flex flex-column product-container">
                <div className="d-flex flex-column align-items-center justify-content-center card-product">
                  <img className="img-product" src={Summerfriedrice} alt="summerfriedrice" />
                  <div className="name-pr">Summer</div>
                  <div className="name">Fried rice</div>
                  <div className="price-pr">IDR 32.000</div>
                </div>
              </div>
              <div className="col-sm-2 d-flex flex-column product-container">
                <div className="d-flex flex-column align-items-center justify-content-center card-product">
                  <img className="img-product" src={Creamyicelatte} alt="creamyicelatte" />
                  <div className="name-pr">Creamy</div>
                  <div className="name">Ice Latte</div>
                  <div className="price-pr">IDR 27.000</div>
                </div>
              </div>
              <div className="col-sm-2 d-flex flex-column product-container">
                <div className="d-flex flex-column align-items-center justify-content-center card-product">
                  <img className="img-product" src={Drumstick} alt="drumstick" />
                  <div className="name-pr">Drum</div>
                  <div className="name">Stick</div>
                  <div className="price-pr">IDR 30.000</div>
                </div>
              </div>
              <div className="col-sm-2 d-flex flex-column product-container">
                <div className="d-flex flex-column align-items-center justify-content-center card-product">
                  <img className="img-product" src={Saltyrice} alt="saltyrice" />
                  <div className="name-pr">Salty</div>
                  <div className="name">Rice</div>
                  <div className="price-pr">IDR 20.000</div>
                </div>
              </div>
              <div className="col-sm-2 d-flex flex-column product-container">
                <div className="d-flex flex-column align-items-center justify-content-center card-product">
                  <img className="img-product" src={Summerfriedrice} alt="summerfriedrice" />
                  <div className="name-pr">Summer</div>
                  <div className="name">fried rice</div>
                  <div className="price-pr">IDR 32.000</div>
                </div>
              </div>
              <div className="col-sm-2 d-flex flex-column product-container">
                <div className="d-flex flex-column align-items-center justify-content-center card-product">
                  <img className="img-product" src={Creamyicelatte} alt="creamyicelatte" />
                  <div className="name-pr">Creamy</div>
                  <div className="name">Ice Latte</div>
                  <div className="price-pr">IDR 27.000</div>
                </div>
              </div>
              <div className="col-sm-2 d-flex flex-column product-container">
                <div className="d-flex flex-column align-items-center justify-content-center card-product">
                  <img className="img-product" src={Veggie} alt="veggie" />
                  <div className="name-pr">Veggie</div>
                  <div className="name">Tomato</div>
                  <div className="name">Mix</div>
                  <div className="price-pr">IDR 34.000</div>
                </div>
              </div>
              <div className="col-sm-2 d-flex flex-column product-container">
                <div className="d-flex flex-column align-items-center justify-content-center card-product">
                  <img className="img-product" src={Hazelnut} alt="hazelnutlatte" />
                  <div className="name-pr">Hazelnut</div>
                  <div className="name">Latte</div>
                  <div className="price-pr">IDR 25.000</div>
                </div>
              </div>
              <div className="col-sm-2 d-flex flex-column product-container">
                <div className="d-flex flex-column align-items-center justify-content-center card-product">
                  <img className="img-product" src={Summerfriedrice} alt="summerfriedrice" />
                  <div className="name-pr">Summer</div>
                  <div className="name">Fried Rice</div>
                  <div className="price-pr">IDR 32.000</div>
                </div>
              </div>
              <div className="col-sm-2 d-flex flex-column product-container">
                <div className="d-flex flex-column align-items-center justify-content-center card-product">
                  <img className="img-product" src={Creamyicelatte} alt="creamyicelatte" />
                  <div className="name-pr">Creamy</div>
                  <div className="name">Ice Latte</div>
                  <div className="price-pr">IDR 27.000</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="row footer-pr">
          <div className="col-sm-6 about-pr">
            <div className="about-header d-flex align-items-center">
              <div className="footer-logo">
                <img src={Logo} alt="logo" />
              </div>
              <div>Cafebr!ck</div>
            </div>
            <div className="about-text">Coffee Shop is a store that sells some good <br />meals, and
              especially coffee. We provide <br />high quality beans</div>
            <div className="social-icon">
              <img className="img-icon" src={Facebook} alt="fb" />
              <img src={Twitter} alt="tw" />
              <img src={Instagram} alt="ig" />
            </div>
            <div className="watermark">
              <p>©2022Cafebr!ck</p>
            </div>
          </div>
          <div className="col-sm-6 footer-side">
            <div className="product">
              <div className="product-list">Product</div>
              <p>Download</p>
              <p>Pricing</p>
              <p>Locations</p>
              <p>Countries</p>
              <p>Blog</p>
            </div>
            <div className="engage">
              <div className="engage-list">Engage</div>
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

export default Product