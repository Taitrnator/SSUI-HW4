import React, { Component } from 'react';

class SideBar extends Component {
  constructor(props) {
    super(props)
    this.navToPage = props.navToPage;
  }
  render() {
    return(
      <ul className="mp-sidebar">
          <li onClick={() => this.navToPage(1, "DogHarnesses")}><h4>Dog Harnesses</h4></li>
          <li><h4>Cat Harnesses</h4></li>
          <li onClick={() => this.navToPage(1, "DogHarnesses")}><h4>Travel Gear</h4></li>
          <li><h4>GPS Collars</h4></li>
      </ul>
    )
  }
}

export default SideBar
