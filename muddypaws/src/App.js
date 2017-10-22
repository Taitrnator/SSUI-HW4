import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Home from './containers/Home.js';
import ProductList from './containers/ProductList.js';
import ProductPage from './containers/ProductPage.js';
import SideBar from './components/SideBar.js';
import TopHeader from './components/Header.js';
import FeaturedProducts from './components/FeaturedProducts.js';
import './css/App.css';

const App = () => {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         page: 0,
    //         view: "Home"
    //     }
    // }
    // manageCart() {
    //   console.log("manage cart");
    // }
    <div>
    <TopHeader buttonClick={this.navToPage.bind(this)} addToCart={this.manageCart.bind(this)} />
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/ProductList' component={ProductList}/>
      <Route path='/ProductPage' component={ProductPage}/>
    </Switch>
    </div>
        /* <View activePage={this.state.page} activeItem={this.state.view} renderPageView={this.navToPage.bind(this)}/> */
}

export default App;
