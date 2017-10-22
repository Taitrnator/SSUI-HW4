import React from 'react';
import {
  Link
} from 'react-router-dom';

const featuredProductsList =  ["WunderDog GPS Collar", "Catigory 5 Cat Harness", "Yosemite Food Bowl"];

const FeaturedProducts = () => (
  <div>
    <h3 className="mp-article-header">Featured Products</h3>
    <article className="mp-featured">
      <section><Link to="./ProductPage/:GPSCollar"><div className="img-container"><img src="https://cdn.shopify.com/s/files/1/1577/4333/products/25502-TopRopeCollar-TwilightGray_1024x1024.jpg?v=1500310812" alt="product1" /></div><h4>Wunderdog GPS Collar</h4><p>$99.99</p></Link></section>
      <section><Link to="./ProductPage/:CatHarness"><div className="img-container"><img src="https://www.thecatconnection.com/mm5/graphics/00000001/CC_NewHarness_2.jpg" alt="product2" /></div><h4>Catigory 5 Cat Harness</h4><p>$34.99</p></Link></section>
      <section><Link to="./ProductPage/:DogHarness"><div className="img-container"><img src="https://cdn.shopify.com/s/files/1/1577/4333/products/30301-DoublebackHarness-Right_640x.jpg?v=1495721792" alt="product3" /></div><h4>MuddyPaws Pawesome Harness</h4><p>$34.99</p></Link></section>
    </article>
  </div>
)
export default FeaturedProducts
