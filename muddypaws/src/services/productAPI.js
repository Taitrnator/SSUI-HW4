import products from '../JSON/products.json';

const ProductAPI = {
  all: function() { return products},
  get: function(id) {
    for(var item in products) {
          if (products.list[item].id === id) {
              return products.list[item];
          }
          else {
            return null;
          }
        }
    }
}
export default ProductAPI
