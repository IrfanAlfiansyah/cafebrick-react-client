import React, { Component } from "react";
// import { Link } from "react-router-dom"
import "./Header.css";


export default class Header extends Component {
  constructor(props) {
    super(props);
      this.state = {
        // isLoggedIn: localStorage.getItem("user-info") ? true : false;
        isSearch: true,
        setSearchName: props
      }
    }
  
  render(){
    return (
      <header>
        <nav className="custom-nav-container row">
          
        </nav>
      </header>
    )
  }
};
