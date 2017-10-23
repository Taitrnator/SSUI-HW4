import React, { Component } from 'react';
import manageCart from '../services/manageCart'

class Header extends Component {
  render() {
    return(
      <header>
        <div className="mp-promobanner">
            <p>20% off your entire order. Use code <strong>Doggo</strong></p>
        </div>
          <nav className="mp-menu">
              <ul className="leftnav">
                  <li onClick={() => this.props.navToPage(2)}>
                    <img className="mp-logo" src="https://taitrnator.github.io/SSUI-Homework-3/resources/images/muddypaws-logo.png" alt="logo"/>
                  </li>
                  <li>
                      <h4>Adventure gear of the furred kind.</h4>
                  </li>
              </ul>
              <ul className="rightnav">
                  <li id="cartButton" className="mp-cart" onClick={() => this.props.toggleCart() }><h5>{this.props.cartCount > 0 ? this.props.cartCount : ""}</h5><img src="https://taitrnator.github.io/SSUI-Homework-3/resources/images/shoppingcart.png" alt="shoppingcart"/></li>
              </ul>
          </nav>
      </header>
    )
  }
}

export default Header
