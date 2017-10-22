import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart.js';
import { Link } from 'react-router-dom';

const TopHeader = () => {
  constructor(props) {
    super(props);
    this.buttonClick = props.buttonClick;
  }


  topBanner() {
      return (
          <div className="mp-promobanner">
              <p>20% off your entire order. Use code
                  <strong>Doggo</strong>
              </p>
          </div>
      )
  }
  render() {
    return (
      <header>
          {this.topBanner()}
          <nav className="mp-menu">
              <ul className="leftnav">
                  <li>
                    <Link to='/'><img className="mp-logo" src="https://taitrnator.github.io/SSUI-Homework-3/resources/images/muddypaws-logo.png" alt="logo"/></Link>
                  </li>
                  <li>
                      <h4>Adventure gear of the furred kind.</h4>
                  </li>
              </ul>
              <ShoppingCart />
          </nav>

      </header>
    )
  }
}

export default TopHeader
