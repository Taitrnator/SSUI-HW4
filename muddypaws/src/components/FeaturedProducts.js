import React, { Component } from 'react';
import products from '../JSON/products.json';
import { Link } from 'react-router-dom';

const FeaturedProducts = () => {
  constructor(props) {
    super(props);
    this.buttonClick = props.buttonClick;
    this.activePage = props.activePage;
    this.featuredProductList = ["WunderDog GPS Collar", "Catigory 5 Cat Harness", "MuddyPaws Dog Harness", "Yosemite Food Bowl"];
  }

  activeItem(elem) {
    for (var item in products.items) {
      if (products.items[item].name === elem) {
        return products.items[item];
      }
    }
  }

  renderProduct(elem) {
    let item = this.activeItem(elem);
    return(
      <section key={elem} onClick={() => this.buttonClick({"page": 2, "view" : item.name })}>
        <div className="img-container"><img src={item.thumbnail} alt={item.name} /></div>
        <h4>{item.name}</h4>
        <p>${item.price}</p>
      </section>
    )
  }

  render() {
    let activeProductList = this.featuredProductList.filter(item => item !== this.activePage);
    return(
      <div>
        <h3 className="mp-article-header">Featured Products</h3>
        <article className="mp-featured">
            {this.renderProduct(activeProductList[0])}
            {this.renderProduct(activeProductList[1])}
            {this.renderProduct(activeProductList[2])}
        </article>
      </div>
    )
  }
}
export default FeaturedProducts
