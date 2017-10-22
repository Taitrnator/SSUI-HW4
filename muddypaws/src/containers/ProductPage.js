import React, { Component } from 'react';
import products from '../JSON/products.json';
import { Link } from 'react-router-dom';

const ProductPage = () => {
  constructor(props) {
    super(props);
    this.activePage = props.activePage;
    this.addToCart = props.addToCart;
    this.state = {
      activeItem: this.activeItem(),
      activeColor: 'strawberry',
      activeSize: 'x_small',
      activeThumbnail: this.activeItem(true)
    }
  }

  activeItem(thumbnail = false) {
    for (var item in products.items) {
      if (products.items[item].name === this.activePage) {
          return (thumbnail ? products.items[item].images[0] :products.items[item]);
      }
    }
  }

  getSizes(type) {
    if(type === "cat") {
      return products.sizes[0].cat;
    }
    else {
      return products.sizes[0].dog;
    }
  }

  render() {
    let item = this.state.activeItem,
        sizes = (item.hasSizes ? this.getSizes(item.sizestype) : null);


    let colorControls = products.colors.map((e) => {
      let condensedName = e.trim().toLowerCase();
      return (
        <label key={e} className={"color-option " + condensedName} htmlFor={e}><input type="radio" id={condensedName} name="color" value={e} /></label>
      )
    });

    let sizeControls = sizes.map((e) => {
      return(
        <label key={e.size} htmlFor={e.size} className="size-option">{e.label}<input id={e.size} name="size" type="radio" value={e.label} checked="" /></label>
      )
      });

    let thumbnailControls = item.images.map((e) => {
      return (
        <img key={e} className="mp-thumbnail" src={e} alt={e.index} />
      )
    });

    return (
      <div>
      <article className="mp-product-row">
          <section className="mp-thumbnails">
            {thumbnailControls}
          </section>
          <section id="mp-focused-img-container">
            <img id="mp-focused-img" src={item.images[0]} alt="" />
          </section>
          <section className="mp-focused-item">
            <h4 id="mp-product-name">{item.name}</h4>
            <a>Write Review</a>
            <p id="mp-price">{item.price}</p>
            <div className="mp-size-ctrl mp-container">
              <label className="mp-label" htmlFor="size-ctrl">Size: <strong id="active-size">Doggo</strong></label>
              <div className="size-ctrl">
              {sizeControls}
              </div>
            </div>
            <div className="mp-color-ctrl mp-container">
              <label className="mp-label" htmlFor="color-ctrl">Color: <strong id="active-color">Strawberry</strong></label>
              <div className="color-ctrl">
                {colorControls}
              </div>
            </div>
            <button id="addToCart" className="mp-button expand" onClick={() => this.addToCart()}>Add to Cart</button>
          </section>
        </article>
        <article className="product-feat-description">
          <section className="product-feat-copy">
            <p>{item.description}</p>
          </section>
          <section className="product-feat-img"><img className="feat-img" src={item.featuredimage} alt="adventure-dog" /></section>
        </article>
      </div>
    )
  }
}
export default ProductPage