import React, { Component } from 'react';
import Home from './containers/Home.js';
import ProductList from './containers/ProductList.js';
import ProductPage from './containers/ProductPage.js';
import Header from './components/Header.js';
import FeaturedProducts from './components/FeaturedProducts';
import ShoppingCart from './components/ShoppingCart';
import manageCart from './services/manageCart';
import './css/App.css';


class App extends Component {
  constructor(props) {
  super(props);
    this.state = {
      page: 2,
      cartItems: manageCart.getInventory(),
      toggleClass: "hidden",
      activePage: "home"
    };
  }

  // cart functionality here because idk where else to put it
  addToCart(item) {
    manageCart.addItem(item);
    this.setState({cartItems: manageCart.getInventory(), toggleClass: ""}, this.forceUpdate());
  }
  removeFromCart(item) {
    manageCart.removeItem(item);
    this.setState({cartItems: manageCart.getInventory()});
  }
  toggleCart() {
    var css = (this.state.toggleClass === "hidden") ? "" : "hidden";
    this.setState({"toggleClass" : css});
  }


  navToPage(page = 0, activePage = "home") {
    this.setState(() => { return {page: page, activePage: activePage} });
  }
  renderPageView() {
    if(this.state.page === 0) {
      return (
        <div>
        <ProductPage navToPage={this.navToPage.bind(this)} activePage={this.state.activePage} addToCart={this.addToCart.bind(this)} />);
        </div>
      )
    }
    if(this.state.page === 1) {
      return (
        <ProductList navToPage={this.navToPage.bind(this)} activePage={this.state.activePage} />
      )
    }
    if(this.state.page === 2) {
      return (
        <div>
        <Home navToPage={this.navToPage.bind(this)} />
        </div>
      )
    }
  }
  render() {
    return (
      <div>
          <Header navToPage={this.navToPage.bind(this)} toggleCart={this.toggleCart.bind(this)}/>
          <ShoppingCart toggleClass={this.state.toggleClass} cartItems={this.state.cartItems} removeFromCart={this.removeFromCart.bind(this)} />
          {this.renderPageView()}
      </div>
    )
  }
}

export default App
