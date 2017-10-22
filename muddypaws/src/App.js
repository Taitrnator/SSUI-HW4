import React, { Component } from 'react';
import Home from './containers/Home.js';
import ProductList from './containers/ProductList.js';
import ProductPage from './containers/ProductPage.js';
import SideBar from './components/SideBar.js';
import Header from './components/Header.js';
import './css/App.css';


class App extends Component {
  constructor(props) {
  super(props);
    this.state = {
      page: 2,
      itemsInCart: []
    };
  }
  navToPage(arg) {
    this.setState({page: arg})
  }
  manageCart(item) {
    this.setState({itemsInCart: item});
  }
  toggleCart() {
      var css = (this.state.toggleClass === "hidden") ? "" : "hidden";
      this.setState({"toggleClass" : css});
  }
  shoppingCart() {
    return (
      <ul className="rightnav">
          <li id="cartButton" className="mp-cart" onClick={() => this.toggleCart() }><img src="https://taitrnator.github.io/SSUI-Homework-3/resources/images/shoppingcart.png" alt="shoppingcart"/></li>
          <li id="shoppingCart" className={"mp-shopping-cart " + this.state.toggleClass }>
            <header><h3>Your Cart</h3></header>
            <ul>
            </ul>
            <section className="mp-total">
              <h4 className="left">Subtotal</h4>
              <h4 className="right">$0.00</h4>
            </section>
            <button className="mp-button expand">Checkout</button>
          </li>
      </ul>
      )
  }

  renderPageView() {
    if(this.state.page === 0)
      return <ProductPage activePage="CatHarness" addToCart={this.manageCart.bind(this)} navToPage={this.navToPage.bind(this)}/>
    if(this.state.page === 1)
      return <ProductList navToPage={this.navToPage.bind(this)} />
    if(this.state.page === 2)
      return <Home navToPage={this.navToPage.bind(this)} />
  }
  render() {
    console.log(`App items in cart? ${this.state.itemsInCart}`)
    return (
      <div>
          <Header navToPage={this.navToPage.bind(this)} shoppingCart={this.shoppingCart.bind(this)}/>
          {this.renderPageView()}
      </div>
    )
  }
}

export default App;
