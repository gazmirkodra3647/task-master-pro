```
// filename: sophisticated_code.js
// Description: This code demonstrates a sophisticated and complex JavaScript program that implements a basic e-commerce shopping cart system.

// Class representing a product
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  // Calculate the total price of this product (price * quantity)
  getTotalPrice() {
    return this.price * this.quantity;
  }
}

// Class representing a shopping cart
class ShoppingCart {
  constructor() {
    this.products = [];
  }

  // Add a product to the cart
  addProduct(product) {
    this.products.push(product);
  }

  // Calculate the total price of all products in the cart
  getTotalPrice() {
    let totalPrice = 0;
    for (let product of this.products) {
      totalPrice += product.getTotalPrice();
    }
    return totalPrice;
  }
}

// Sample usage
const cart = new ShoppingCart();

const product1 = new Product("Laptop", 1000, 2);
const product2 = new Product("Headphones", 100, 3);
const product3 = new Product("Mouse", 30, 5);

cart.addProduct(product1);
cart.addProduct(product2);
cart.addProduct(product3);

console.log(`Total Price: $${cart.getTotalPrice()}`);
```

Note: This is just a simple example to demonstrate a sophisticated and complex program. In practice, a real e-commerce system would have much more functionality, such as handling different payment methods, managing user authentication, interacting with a database, etc.