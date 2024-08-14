class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
} 

class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    getTotalPrice() {
        return this.product.price * this.quantity;
    }
}

console.log('hello world'); 

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(product, quantity) {
        // Check if product already exists in the cart
        const existingItem = this.items.find(item => item.product.id === product.id);
        if (existingItem) {
            // If product exists, increase its quantity
            existingItem.quantity += quantity;
        } else {
            // Otherwise, add a new ShoppingCartItem
            const cartItem = new ShoppingCartItem(product, quantity);
            this.items.push(cartItem);
        }
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    getTotalItems() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }

    getTotalPrice() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }

    displayCart() {
        if (this.items.length === 0) {
            console.log("The cart is empty.");
        } else {
            console.log("Shopping Cart:");
            this.items.forEach(item => {
                console.log(`${item.product.name} (x${item.quantity}): $${item.getTotalPrice().toFixed(2)}`);
            });
            console.log(`Total Items: ${this.getTotalItems()}`);
            console.log(`Total Price: $${this.getTotalPrice().toFixed(2)}`);
        }
    }
}

// Create products
const product1 = new Product(1, 'Laptop', 999.99);
const product2 = new Product(2, 'Smartphone', 599.99);
const product3 = new Product(3, 'Tablet', 299.99);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1, 1);
cart.addItem(product2, 2);
cart.addItem(product3, 3);

// Display the cart
cart.displayCart();

// Remove an item from the cart
cart.removeItem(2); // Remove the smartphone (id = 2)

// Display the cart again
cart.displayCart();