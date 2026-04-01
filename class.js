class Product {
    constructor(names, price) {
        this.names = names;
        this.price = price;
    }

    displayProduct() {
        console.log(`product: ${this.names}`)
        console.log(`product: ${this.price}`)

    };

    calculateTotal(salesTax) {
        return this.price + (this.price * salesTax);
    }
};

const salesTax = 0.05;

const product1 = new Product('book', 1000);
const product2 = new Product('pants', 2987);

const total = product1.calculateTotal(salesTax);
console.log(`Total price (with tax): ${total.toFixed(2)}`)

product1.displayProduct();