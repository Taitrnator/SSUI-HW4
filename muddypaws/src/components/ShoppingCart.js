import React from 'react';

class ShoppingCart extends React.Component {
  constructor(props) {
      super(props);
      this.itemsInCart = props.itemsInCart;
      this.state = {
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
      console.log(this.itemsInCart);
      let itemsInCart = this.state.itemsInCart;
      let cartList = this.itemsInCart.map((e) =>  {
        return (
          <li key={e}>
            <section>
              <div className="left">Item</div>
              <div className="mid">qty</div>
              <div className="right">price</div>
            </section>
          </li>
        )
      })
    }

  }

export default ShoppingCart
