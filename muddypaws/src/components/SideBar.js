import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
  constructor(props) {
    super(props);
    this.buttonClick = props.buttonClick;
  }
  render() {
    return (
      <ul className="mp-sidebar">
          <li><Link to="/ProductList"><h4>Dog Harnesses</h4></Link></li>
          <li><h4>Cat Harnesses</h4></li>
          <li><Link to="/ProductList"><h4>Travel Gear</h4></Link></li>
          <li><h4>GPS Collars</h4></li>
      </ul>
    )
  }
}

export default SideBar
