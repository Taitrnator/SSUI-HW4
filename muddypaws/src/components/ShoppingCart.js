import React from 'react';
function cartItem(props) {
    return (
        <section>
            <div className="left"></div>
            <div className="mid"></div>
            <div className="right"></div>
        </section>
    );
}

class ShoppingCart extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          itemsInCart: Array(0).fill(null),
          toggleClass: "hidden"
      }
  }

    addtoCart(item) {
        this.setState({
            itemsInCart: {
                name: item.name,
                price: item.price
            }
        });
        this.item = item;
    }
    calculateTotal() {

    }
    render() {
      let itemsInCart = this.state.itemsInCart;
      let cartList = itemsInCart.map((e) =>  {
        return (
          <li key={e}>
            <section>
              <div className="left"></div>
              <div className="mid"></div>
              <div className="right"></div>
            </section>
          </li>
        )
      })
      console.log(itemsInCart);
      return (
        <ul className="rightnav">
            <li id="cartButton" className="mp-cart" onClick={() => this.toggleCart() }><img src="https://taitrnator.github.io/SSUI-Homework-3/resources/images/shoppingcart.png" alt="shoppingcart"/></li>
            <li id="shoppingCart" className={"mp-shopping-cart " + this.state.toggleClass }>
              <header><h3>Your Cart</h3></header>
              <ul>
                {cartList}
              </ul>
              <section className="mp-total">
                <h4 className="left">Subtotal</h4>
                <h4 className="right">$0.00</h4>
              </section>
              <button className="mp-button expand">Checkout</button>
            </li>
        </ul>
      )
    }
    toggleCart() {
        var css = (this.state.toggleClass === "hidden") ? "" : "hidden";
        this.setState({"toggleClass" : css});
    }
  }

export default ShoppingCart
