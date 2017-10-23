import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import products from '../JSON/products.json';
import manageCart from '../services/manageCart.js';
import FeaturedProducts from '../components/FeaturedProducts'

class ProductPage extends Component {

  activeItem(id, thumbnail = false) {
    console.log(`retrieving ${id}`)
    for (var item in products.list) {
      if (products.list[item].id === id) {
          return (thumbnail ? products.list[item].images[0] :products.list[item]);
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
    var productId = this.props.activePage,
        item = this.activeItem(productId),
        sizes = (item.hasSizes ? this.getSizes(item.sizestype) : null),
        addToCart = this.props.addToCart,
        activeColor = 'strawberry',
        activeSize = 'x_small',
        activeThumbnail = this.activeItem(true);

    let colorControls = products.colors.map((e, index) => {
      let condensedName = e.trim().toLowerCase();
      return (
        <label key={index} className={"color-option " + condensedName} htmlFor={e}><input type="radio" id={condensedName} name="color" value={e} /></label>
      )
    });

    let sizeControls = sizes.map((e, index) => {
      return(
        <label key={index} htmlFor={e.size} className="size-option">{e.label}<input id={e.size} name="size" type="radio" value={e.label} checked="" /></label>
      )
      });

    let thumbnailControls = item.images.map((e) => {
      return (
        <img key={e} className="mp-thumbnail" src={e} alt={e.index} />
      )
    });

    return (
      <div>
      <main>
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
            <p id="mp-price">${item.price}</p>
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
            <button id="addToCart" className="mp-button expand" onClick={() => manageCart.addItem(item.id)}>Add to Cart</button>
          </section>
        </article>
        <article className="product-feat-description">
          <section className="product-feat-copy">
            <p>{item.description}</p>
          </section>
          <section className="product-feat-img"><img className="feat-img" src={item.featuredimage} alt="adventure-dog" /></section>
        </article>
      </main>
      <FeaturedProducts navToPage = { this.props.navToPage } activePage= {this.props.activePage} />
    </div>
    )
  }
}
export default ProductPage
