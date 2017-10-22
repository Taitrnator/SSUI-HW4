import React from 'react';
import SideBar from '../components/SideBar.js';
const ProductList = () => (
      <div>
        <SideBar />
        <article className="mp-hero">
            <img className="mp-article-img" src="//cdn.shopify.com/s/files/1/1577/4333/collections/Product-Category-Header-Image-Harnesses_882x589.jpg?v=1504634756" alt="shoptravelgear"/>
        </article>
        <main>
            <article className="mp-product-list">
                <section>
                    <div className="img-container"><img src="//cdn.shopify.com/s/files/1/1577/4333/products/30301-DoublebackHarness-Right_372x279.jpg?v=1495721792" alt="product1"/></div>
                    <div className="description-container">
                        <h4>Front Range Harness</h4>
                        <p>Customizable fit with four points of adjustment allows for full range of motion.</p>
                    </div>
                    <div className="product-price">
                        <p>$39.95</p>
                        <a className="mp-button" href="./dogharness.html">View Details</a>
                    </div>
                </section>
                <section>
                    <div className="img-container"><img src="//cdn.shopify.com/s/files/1/1577/4333/products/30102-WebMaster-TwilightGray_372x279.jpg?v=1499378007" alt="product1"/></div>
                    <div className="description-container">
                        <h4>Batman Harness</h4>
                        <p>Foam-padded straps for comfortable, extended wear</p>
                    </div>
                    <div className="product-price">
                        <p>$59.99</p>
                        <a className="mp-button" href="./dogharness.html">View Details</a>
                    </div>
                </section>
                <section>
                    <div className="img-container"><img src="//cdn.shopify.com/s/files/1/1577/4333/products/3070-WebMasterPro-RedCurrant-Right_372x279.jpg?v=1499378410" alt="product1"/></div>
                    <div className="description-container">
                        <h4>Superman Harness</h4>
                        <p>Customizable fit with five points of adjustment allow for full range of motion</p>
                    </div>
                    <div className="product-price">
                        <p>$99.99</p>
                        <a className="mp-button" href="./dogharness.html">View Details</a>
                    </div>
                </section>
                    </article>
                </main>
            </div>
)

export default ProductList
