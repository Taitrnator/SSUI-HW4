import React, { Component } from 'react';
import '../css/App.css';
import FeaturedProducts from '../components/FeaturedProducts.js';
import SideBar from '../components/SideBar.js';

class Home extends Component {
  constructor(props) {
    super(props);
    this.navToPage = props.navToPage;
  }
  render() {
    return (
      <div>
          <SideBar />
          <article className="mp-hero">
              <section>
                  <h1>Go Arctic</h1>
                  <h4 className="fake-link">See the 2017 Winter Collection</h4>
              </section>
              <img className="mp-article-img" src="https://cdn.shopify.com/s/files/1/1577/4333/files/Product-Page-Header-Polar-Trex_882x589.jpg?10840159090644357822" alt="winterdoggie"/>
          </article>
          <FeaturedProducts navToPage={this.navToPage} />
      </div>
    )
  }
}

export default Home;
