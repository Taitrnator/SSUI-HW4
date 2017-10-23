import React, { Component } from 'react';
import manageCart from '../services/manageCart';

class ShoppingCart extends Component {
  render() {
    let itemsInCart;
    if(this.props.cartItems !== null) {
      itemsInCart = this.props.cartItems.map((e, index) => {
        return (
            <li key={index}>
              <section className="mp-cart-item">
                <div className="left"><img className="mp-thumbnail" src={e.thumbnail} /></div>
                <div className="mid"><h4>{e.name}</h4><a className="mp-removelink" onClick={() => this.props.removeFromCart(e)}>Remove</a></div>
                <div className="right"><h4 className="mp-product-price">{e.price}</h4></div>
              </section>
            </li>
        )
      })
    }
    return (
        <ul id="shoppingCart" className={"mp-shopping-cart " + this.props.toggleClass }>
          <header><h3>Your Cart</h3></header>
          <ul className="mp-cart-items">
            {itemsInCart}
          </ul>
          <section className="mp-total">
            <h4 className="left">Subtotal</h4>
            <h4 className="right">${manageCart.calculateTotal()}</h4>
          </section>
          <button className="mp-button expand">Checkout</button>
        </ul>
    )
  }
}

export default ShoppingCart
