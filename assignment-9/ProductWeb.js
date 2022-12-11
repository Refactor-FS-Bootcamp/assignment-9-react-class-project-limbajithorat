import React, { Component } from "react";
import Products from "./Products";
import "./Productweb.css";
class ProductWeb extends Component {
  render() {
    return (
      <div className="maincontainer">
        <nav id="navbar">
          <div className="brand">Active Shop</div>
          <ul id="navcontent">
            <li>
              <a className="head" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="head" href="#">
                About
              </a>
            </li>
            <li>
              <a className="head" href="#">
                Services
              </a>
            </li>
            <li>
              <i className="fa fa-cart-shopping"></i>
              <a href="#">Cart:</a>
            </li>
          </ul>
        </nav>
        <div className="wrap">
          <div className="search">
            <input
              type="text"
              className="searchTerm"
              placeholder="Search Product.."
            />
            <button type="submit" className="searchButton">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>

        <div className="products">
          <Products />
        </div>
      </div>
    );
  }
}

export default ProductWeb;
