import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import axios from "axios";
import "./Home.css";
// import withParams from '../../helper/withParams';
import withSearchParams from '../../helper/withSearchParams';

import Instagram from "../../assets/img/ig.svg";
import Facebook from "../../assets/img/fb.svg";
import Twitter from "../../assets/img/tw.svg";
import Logo from "../../assets/img/logo.png";
import Coffee2 from "../../assets/img/coffee2.png"
import Staff from "../../assets/img/org.png"
import Locations from "../../assets/img/map.png"
import Customers from "../../assets/img/love.png"
import Teamwork from "../../assets/img/teamwork.png"
import Checklist from "../../assets/img/ceklist.png"
import Minichecklist from "../../assets/img/cheklist2.png"
import Hazelnut from "../../assets/img/hazelnutlatte.png"
import Pinkypromise from "../../assets/img/pinkypromise.png"
import Chickenwings from "../../assets/img/chickenwings.png"
import Globe from "../../assets/img/globe.png"
import Sponsored from "../../assets/img/Sponsored.png"
import Viezh from "../../assets/img/viez.png"
import Yessica from "../../assets/img/yessica.png"
import Kim from "../../assets/img/kim.png"
import Star from "../../assets/img/star.png"
import Paginasi from "../../assets/img/page.png"
import Left from "../../assets/img/left..png"
import Right from "../../assets/img/right..png"

class Home extends Component {
  render() {
    return (
      <div className="container-fluids">
        <div className="header sticky-top">
          <div className="navbar-hm sticky-top">
            <div className="col-sm-3 logo-hm">
              <div className="img-logo">
                <img src={Logo} alt="logo" />
              </div>
              <div className="text-logo-hm">Cafebr!ck</div>
            </div>
            <div className="col-sm-6 navbar-item-hm">
              <li className="home-link">Home</li>
              <Link to="/product">
                <li>Product</li>
              </Link>
              <li>Your Chart</li>
              <Link to="/history">
              <li>History</li>
              </Link>
            </div>
            <div className="col-sm-3 auth-hm">
              <Link to="/login">
                <div className="btn-login-hm">Login</div>
              </Link>
              <Link to="/auth">
                <div className="btn-signUp-hm">Sign Up</div>
              </Link>
            </div>
          </div>
        </div>
        <div className="banner">
          <img src={Coffee2} alt="" />
          <div className="text-banner">Start Your Day With <br />Coffee and Good Meals</div>
          <p>We Provide a high quality beans, good taste, and healthy <br />meals made by love just for you. Start your day with us <br />for a bigger smile</p>
          <Link to="/login">
            <div className="get-started">Get Started</div>
          </Link>
        </div>
        <div className="info-store">
          <div className="staff">
            <div className="img-staff">
              <img src={Staff} alt="staff" />
            </div>
            <div className="text-staff">
              <div className="nilai">90+</div>
              <p>Staff</p>
            </div>
          </div>
          <div className="line"></div>
          <div className="staff">
            <div className="img-staff">
              <img src={Locations} alt="locations" />
            </div>
            <div className="text-staff">
              <div className="nilai">30+</div>
              <p>Stores</p>
            </div>
          </div>
          <div className="line"></div>
          <div className="staff">
            <div className="img-staff">
              <img src={Customers} alt="customers" />
            </div>
            <div className="text-staff">
              <div className="nilai">800+</div>
              <p>Customer</p>
            </div>
          </div>
        </div>
        <div className="team-work">
          <img className="team-work-img" src={Teamwork} alt="teamwork" />
          <div className="team-work-text">
            <div className="quotes">We Provide Good Coffee<br /> and A Healthy Meals</div>
            <div className="text-quotes">You can explore the menu that we provide with fun and <br />have their own taste adn make your day better
            </div>
            <div className="checklist">
              <img src={Checklist} alt="checklist" />
              <div className="checklist-text">High quality beans </div>
            </div>
            <div className="checklist">
              <img src={Checklist} alt="checklist" />
              <div className="checklist-text">Healthy meals, you can request the ingredients </div>
            </div>
            <div className="checklist">
              <img src={Checklist} alt="checklist" />
              <div className="checklist-text">Chat with our staff to get better experience for ordering</div>
            </div>
            <div className="checklist">
              <img src={Checklist} alt="checklist" />
              <div className="checklist-text">Free member card with a minimum purchase of IDR 200.000 </div>
            </div>
          </div>
        </div>
        <div className="favorite">
          <div className="favorite-title">
            <p>Here is People's Favorite</p>
          </div>
          <div className="desc">
            <p>Let's choose and have a bit tasteof people's favorite. it might be yours tool</p>
          </div>
          <div className="favorite-product-hm">
            <div className="img-product-container">
              <img className="img-product" src={Hazelnut} alt="" />
              <div className="product-tittle-hm">Hazelnut Late</div>
            </div>
            <div className="img-product-container">
              <img className="img-product" src={Pinkypromise} alt="" />
              <div className="product-tittle">Pinky Promise</div>
            </div>
            <div className="img-product-container">
              <img className="img-product" src={Chickenwings} alt="" />
              <div className="product-tittle">Chicken Wings</div>
            </div>
          </div>
          <div className="product-info">
            <div className="hazelnutlatte">
              <div className="container-product">
                <div className="checklist2">
                  <img src={Minichecklist} alt="" />
                  <div className="check-text">HazelnutSyrup</div>
                </div>
                <div className="checklist2">
                  <img src={Minichecklist} alt="" />
                  <div className="check-text">Vanila Whiped Cream</div>
                </div>
                <div className="checklist2">
                  <img src={Minichecklist} alt="" />
                  <div className="check-text">Ice / Hot</div>
                </div>
                <div className="checklist2">
                  <img src={Minichecklist} alt="" />
                  <div className="check-text">Sliced Banana on Top</div>
                </div>
                <div className="price-container">
                  <div className="price">
                    <div className="price-label">IDR 25.000</div>
                    <div className="order-now">Order Now</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pinkypromise">
              <div className="container-product">
                <div className="checklist2">
                  <img src={Minichecklist} alt="" />
                  <div className="check-text">1 Shot of coffee</div>
                </div>
                <div className="checklist2">
                  <img src={Minichecklist} alt="" />
                  <div className="check-text">Vanila Whiped Cream</div>
                </div>
                <div className="checklist2">
                  <img src={Minichecklist} alt="" />
                  <div className="check-text">Chocolate Biscuits</div>
                </div>
                <div className="checklist2">
                  <img src={Minichecklist} alt="" />
                  <div className="check-text">Strawberry Syrup</div>
                </div>
                <div className="checklist2">
                  <img src={Minichecklist} alt="" />
                  <div className="check-text">Sliced Strawberry on top</div>
                </div>
                <div className="price-container">
                  <div className="price">
                    <div className="price-label">IDR 30.000</div>
                    <div className="order-now">Order Now</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="chickenwings">
              <div className="container-product">
                <div className="checklist2">
                  <img src={Minichecklist} alt="" />
                  <div className="check-text">Wings</div>
                </div>
                <div className="checklist2">
                  <img src={Minichecklist} alt="" />
                  <div className="check-text">Drum Sticks</div>
                </div>
                <div className="checklist2">
                  <img src={Minichecklist} alt="" />
                  <div className="check-text">Mayonaise and Lemon</div>
                </div>
                <div className="checklist2">
                  <img src={Minichecklist} alt="" />
                  <div className="check-text">Hot Fried</div>
                </div>
                <div className="checklist2">
                  <img src={Minichecklist} alt="" />
                  <div className="check-text">Secret Recipe</div>
                </div>
                <div className="checklist2">
                  <img src={Minichecklist} alt="" />
                  <div className="check-text">Buy 1 Get 1 only for dine in</div>
                </div>
                <div className="price-container">
                  <div className="price">
                    <div className="price-label">IDR 40.000</div>
                    <div className="order-now">Order Now</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="globe">
          <h3>Visits our store in the</h3>
          <h3>spot on the map bellow</h3>
          <p>See Our Store in every city on the spot and spend your good day there. See </p>
          <p>you soon!</p>
          <img src={Globe} alt="" />
        </div>
        <div className="partner">
          <h3>Our Partner</h3>
          <div className="img-list">
            <img src={Sponsored} alt="" />
          </div>
        </div>
        <div className="testimony">
          <div className="testi-title">
            <h2>Loved by Thousands of</h2>
            <h2> Happy Customer</h2>
            <p>These are the stories of our customers who have visited us with great</p>
            <p>pleasure.</p>
          </div>
          <div className="testi-list">
            <div className="testi-list-item">
              <div className="cs-name">
                <img src={Viezh} alt="" />
                <div className="cs">Viezh Robert <br /> Warsaw, Poland </div>
                <div className="rating">
                  <div>4.5</div>
                  <div className="star"><img src={Star} alt="" /></div>
                </div>
              </div>
              <div className="testi-desc">
                <p>“Wow... I am very happy to spend my whole day here. the Wi-fi is good, and the coffee and meals tho. I like it here!! Very recommended!</p>
              </div>
            </div>
            <div className="testi-list-item">
              <div className="cs-name">
                <img src={Yessica} alt="" />
                <div className="cs">Yessica Christy <br /> Shanxi, China </div>
                <div className="rating">
                  <div>4.5</div>
                  <div className="star"><img src={Star} alt="" /></div>
                </div>
              </div>
              <div className="testi-desc">
                <p>“I like it because i like to travel far and still can make my day better just by drinking their Hazlnut Late</p>
              </div>
            </div>
            <div className="testi-list-item">
              <div className="cs-name">
                <img src={Kim} alt="" />
                <div className="cs">Kim Young Jou <br /> Seoul, South Korea </div>
                <div className="rating">
                  <div>4.5</div>
                  <div className="star"><img src={Star} alt="" /></div>
                </div>
              </div>
              <div className="testi-desc">
                <p>“This is very unusual for my taste, I haven't liked coffee berfore, but their cofffee is the best! and yup, you have to order the chicke wings, the best in town!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="paginasi" />
        <div className="slide">
          <img src={Paginasi} alt="" />
        </div>
        <div className="button">
          <img className="btn-left" src={Left} alt="" />
          <img className="btn-right" src={Right} alt="" />
        </div>
        <div className="promo-container">
          <div className="promo">
            <div className="text-promo">
              <h2>Check Our Promo Today</h2>
              <p>Let's see the deals and pick yours</p>
            </div>
            <div className="btn-promo">See Promo</div>
          </div>
        </div>
        <footer className="row footer">
          <div className="col-sm-6 about">
            <div className="about-header d-flex align-items-center" >
              <div className="footer-logo">
                <img src={Logo} alt="" />
              </div>
              <div>Cafebr!ck</div>
            </div>
            <div className="about-text">
              Cafebr!ck is a store that sells some good <br />meals, and especially coffee. We provide <br />high quality beans
            </div>
            <div className="social-media">
              <img src={Facebook} alt="" />
              <img src={Instagram} alt="" />
              <img src={Twitter} alt="" />
            </div>
            <div className="watermark">
              <p>@2022Cafebrick</p>
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
    );
  }
}

export default withSearchParams(Home);