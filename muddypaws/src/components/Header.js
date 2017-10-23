import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.navToPage = props.navToPage;
    this.toggleCart = props.toggleCart;
  }
  render() {
    return(
      <header>
        <div className="mp-promobanner">
            <p>20% off your entire order. Use code <strong>Doggo</strong></p>
        </div>
          <nav className="mp-menu">
              <ul className="leftnav">
                  <li onClick={() => this.navToPage(2)}>
                    <img className="mp-logo" src="https://taitrnator.github.io/SSUI-Homework-3/resources/images/muddypaws-logo.png" alt="logo"/>
                  </li>
                  <li>
                      <h4>Adventure gear of the furred kind.</h4>
                  </li>
              </ul>
              <ul className="rightnav">
                  <li id="cartButton" className="mp-cart" onClick={() => this.toggleCart() }><img src="https://taitrnator.github.io/SSUI-Homework-3/resources/images/shoppingcart.png" alt="shoppingcart"/></li>
              </ul>
          </nav>
      </header>
    )
  }
}

export default Header
