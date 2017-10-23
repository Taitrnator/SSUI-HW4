import products from '../JSON/products.json';

const cachedItems = JSON.parse(localStorage.getItem('cartSession'));
const ManageCart = {
 cartItems: cachedItems ? cachedItems : [],
  addItem: function(id) {
      var itemToAdd = {};
      for (var item in products.list) {
        if (products.list[item].id === id) {
            itemToAdd.id = products.list[item].id;
            itemToAdd.name = products.list[item].name;
            itemToAdd.price = products.list[item].price;
            itemToAdd.thumbnail = products.list[item].images[0];
        }
      }
    this.cartItems.push(itemToAdd);
    localStorage.setItem('cartSession', JSON.stringify(this.cartItems));
  },
  getInventory: function() {
    return this.cartItems;
  },
  removeItem: function(item) {
    var i = this.cartItems.indexOf(item);
    this.cartItems.splice(i, 1);
    localStorage.setItem('cartSession', JSON.stringify(this.cartItems));
  },
  calculateTotal: function() {
    var totalPrice = 0.0;
    for(let i = 0; i < this.cartItems.length; i++) {
      let tempPrice = parseFloat(this.cartItems[i].price);
      totalPrice += tempPrice;
    }
    return totalPrice.toFixed(2);
  }
}

export default ManageCart
