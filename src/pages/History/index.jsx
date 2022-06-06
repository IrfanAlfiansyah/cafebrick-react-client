import React, { Component } from 'react'
import './History.css';
import Search from "../../assets/img/search.png";
import Chat from "../../assets/img/chat.png";
import Profile2 from "../../assets/img/mini-profile.png";
import Logo from "../../assets/img/logo.png";
import Instagram from "../../assets/img/ig.svg";
import Facebook from "../../assets/img/fb.svg";
import Twitter from "../../assets/img/tw.svg";
import Veggie from "../../assets/img/veggie.png"

class History extends Component {
  render() {
    return (
      <div className='global-containerhs'>
        <div className="header-hs row sticky-top">
          <div className="col-sm-3 logo-hs">
            <img src={Logo} alt="logo" />
            <h1>Cafebr!ck</h1>
          </div>
          <div className="col-sm-6 navigasi-hs">
            <li>Home</li>
            <li>Product</li>
            <li>Your Cart</li>
            <li>History</li>
          </div>
          <div className="col-sm-3 history">
            <div className="search-hs">
              <img src={Search} alt="search" />
            </div>
            <div className="message-hs">
              <img src={Chat} alt="chat" />
            </div>
            <div className="profile-hs">
              <img src={Profile2} alt="user" />
            </div>
          </div>
        </div>
        <div className='main-contenths'>
          <div className='item-containerhs'>
            <h1>Let’s see what you have bought!</h1>
            <p>Select item to delete</p>
          </div>
          <div className='main-card'>
            <div className='main-card1 col-sm-4'>
              <div className='card1'>
                <img src={Veggie} alt="Veggie Tomato Mix" />
                <div className='order'>
                  <h2>Veggie Tomato Mix</h2>
                  <h3>IDR 34.000</h3>
                  <h3>Delivered</h3>
                </div>
                <div class="form-checkhs">
                  <input type="checkbox" id="check1" name="option1" value="something" />
                </div>
              </div>
              <div className='card1'>
                <img src={Veggie} alt="Veggie Tomato Mix" />
                <div className='order'>
                  <h2>Veggie Tomato Mix</h2>
                  <h3>IDR 34.000</h3>
                  <h3>Delivered</h3>
                </div>
                <div class="form-checkhs">
                  <input type="checkbox" id="check1" name="option1" value="something" />
                </div>
              </div>
              <div className='card1'>
                <img src={Veggie} alt="Veggie Tomato Mix" />
                <div className='order'>
                  <h2>Veggie Tomato Mix</h2>
                  <h3>IDR 34.000</h3>
                  <h3>Delivered</h3>
                </div>
                <div class="form-checkhs">
                  <input type="checkbox" id="check1" name="option1" value="something" />
                </div>
              </div>
              <div className='card1'>
                <img src={Veggie} alt="Veggie Tomato Mix" />
                <div className='order'>
                  <h2>Veggie Tomato Mix</h2>
                  <h3>IDR 34.000</h3>
                  <h3>Delivered</h3>
                </div>
                <div class="form-checkhs">
                  <input type="checkbox" id="check1" name="option1" value="something" />
                </div>
              </div>
              <div className='card1'>
                <img src={Veggie} alt="Veggie Tomato Mix" />
                <div className='order'>
                  <h2>Veggie Tomato Mix</h2>
                  <h3>IDR 34.000</h3>
                  <h3>Delivered</h3>
                </div>
                <div class="form-checkhs">
                  <input type="checkbox" id="check1" name="option1" value="something" />
                </div>
              </div>
            </div>
            <div className='main-card2 col-sm-4'>
              <div className='card1'>
                <img src={Veggie} alt="Veggie Tomato Mix" />
                <div className='order'>
                  <h2>Veggie Tomato Mix</h2>
                  <h3>IDR 34.000</h3>
                  <h3>Delivered</h3>
                </div>
                <div class="form-checkhs">
                  <input type="checkbox" id="check1" name="option1" value="something" />
                </div>
              </div>
              <div className='card1'>
                <img src={Veggie} alt="Veggie Tomato Mix" />
                <div className='order'>
                  <h2>Veggie Tomato Mix</h2>
                  <h3>IDR 34.000</h3>
                  <h3>Delivered</h3>
                </div>
                <div class="form-checkhs">
                  <input type="checkbox" id="check1" name="option1" value="something" />
                </div>
              </div>
              <div className='card1'>
                <img src={Veggie} alt="Veggie Tomato Mix" />
                <div className='order'>
                  <h2>Veggie Tomato Mix</h2>
                  <h3>IDR 34.000</h3>
                  <h3>Delivered</h3>
                </div>
                <div class="form-checkhs">
                  <input type="checkbox" id="check1" name="option1" value="something" />
                </div>
              </div>
              <div className='card1'>
                <img src={Veggie} alt="Veggie Tomato Mix" />
                <div className='order'>
                  <h2>Veggie Tomato Mix</h2>
                  <h3>IDR 34.000</h3>
                  <h3>Delivered</h3>
                </div>
                <div class="form-checkhs">
                  <input type="checkbox" id="check1" name="option1" value="something" />
                </div>
              </div>
              <div className='card1'>
                <img src={Veggie} alt="Veggie Tomato Mix" />
                <div className='order'>
                  <h2>Veggie Tomato Mix</h2>
                  <h3>IDR 34.000</h3>
                  <h3>Delivered</h3>
                </div>
                <div class="form-checkhs">
                  <input type="checkbox" id="check1" name="option1" value="something" />
                </div>
              </div>
            </div>
            <div className='main-card3 col-sm-4'>
              <div className='card1'>
                <img src={Veggie} alt="Veggie Tomato Mix" />
                <div className='order'>
                  <h2>Veggie Tomato Mix</h2>
                  <h3>IDR 34.000</h3>
                  <h3>Delivered</h3>
                </div>
                <div class="form-checkhs">
                  <input type="checkbox" id="check1" name="option1" value="something" />
                </div>
              </div>
              <div className='card1'>
                <img src={Veggie} alt="Veggie Tomato Mix" />
                <div className='order'>
                  <h2>Veggie Tomato Mix</h2>
                  <h3>IDR 34.000</h3>
                  <h3>Delivered</h3>
                </div>
                <div class="form-checkhs">
                  <input type="checkbox" id="check1" name="option1" value="something" />
                </div>
              </div>
              <div className='card1'>
                <img src={Veggie} alt="Veggie Tomato Mix" />
                <div className='order'>
                  <h2>Veggie Tomato Mix</h2>
                  <h3>IDR 34.000</h3>
                  <h3>Delivered</h3>
                </div>
                <div class="form-checkhs">
                  <input type="checkbox" id="check1" name="option1" value="something" />
                </div>
              </div>
              <div className='card1'>
                <img src={Veggie} alt="Veggie Tomato Mix" />
                <div className='order'>
                  <h2>Veggie Tomato Mix</h2>
                  <h3>IDR 34.000</h3>
                  <h3>Delivered</h3>
                </div>
                <div class="form-checkhs">
                  <input type="checkbox" id="check1" name="option1" value="something" />
                </div>
              </div>
              <div className='card1'>
                <img src={Veggie} alt="Veggie Tomato Mix" />
                <div className='order'>
                  <h2>Veggie Tomato Mix</h2>
                  <h3>IDR 34.000</h3>
                  <h3>Delivered</h3>
                </div>
                <div class="form-checkhs">
                  <input type="checkbox" id="check1" name="option1" value="something" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className='footer-hs'>
          <div className='footer-left-hs col-sm-8'>
            <div className='title-boths'>
              <img src={Logo} alt='logo'></img>
              <p>Cafebr!ck</p></div>
            <div className="about-texths">
              Cafebr!ck is a store that sells some good <br/> meals, and especially coffee. We provide <br/> high quality beans
            </div>
            <div className="social-mediahs">
              <img src={Facebook} alt="" />
              <img src={Instagram} alt="" />
              <img src={Twitter} alt="" />
            </div>
            <div className="watermarkhs">
              <p>@2022Cafebr!ck</p>
            </div>
          </div>
          <div className="producths col-sm-2">
            <div className="product-lisths">Product</div>
            <p>Download</p>
            <p>Pricing</p>
            <p>Locations</p>
            <p>Countries</p>
            <p>Blog</p>
          </div>
          <div className="productpy col-sm-2">
            <div className="product-lisths">Engage</div>
            <p>Cafebr!ck?</p>
            <p>FAQ</p>
            <p>About Us</p>
            <p>Privacy Policy</p>
            <p>Terms Of Service</p>
          </div>
        </footer>
      </div>
    )
  }
}

export default History