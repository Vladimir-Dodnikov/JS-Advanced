class Kitchen {
    constructor(budget) {
        this.budget = budget;
        this.menu = {};
        this.productsInStock = {};
        this.actionsHistory = [];
    }
    loadProducts(input) {
        for (let i = 0; i < input.length; i++) {
            const element = input[i];
            //"{productName} {productQuantity} {productPrice}"
            let products = element.split(" ");
            let productName = products[0];
            let productQuantity = Number(products[1]);
            let productPrice = Number(products[2]);
            
            if (this.budget - productPrice >= 0) {
                if (!this.productsInStock.hasOwnProperty(productName)) {
                    this.productsInStock[productName] = productQuantity;
                } else {
                    this.productsInStock[productName] += productQuantity;
                }
                this.budget -= productPrice;
                this.actionsHistory.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                this.actionsHistory.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        }
        return this.actionsHistory.join("\n");
    }
    addToMenu(meal, neededProducts, price) {

        if (!this.menu.hasOwnProperty(meal)) {
            this.menu[meal] = ({
                products: neededProducts,
                price: price
            })
            return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
        } else {
            return `The ${meal} is already in our menu, try something different.`;
        }
    }
    showTheMenu() {
        let returnMenu = [];
        if (Object.keys(this.menu).length === 0) {
            return `Our menu is not ready yet, please come later...`;
        }
        for (const product of Object.keys(this.menu)) {
            returnMenu.push(`${product} - $ ${this.menu[product].price}`);
        }
        return returnMenu.join('\n') + '\n';
    }
    makeTheOrder(meal) {
        if (!this.menu[meal]) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }
        let neededProducts = this.menu[meal].products;
        for (const product of neededProducts) {
            let [productName, productQuantity] = product.split(" ");
            productQuantity = Number(productQuantity);

            if (this.productsInStock[productName] < productQuantity || !this.productsInStock[productName]) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }

            this.productsInStock[productName] -= productQuantity;

        }
        this.budget += this.menu[meal].price;
        return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
    }
}
let kitchen = new Kitchen(1000);
console.log(kitchen.loadProducts(
    [
        'Banana 10 5',
        'Banana 20 10',
        'Strawberries 50 30',
        'Yogurt 10 10',
        'Yogurt 500 1500',
        'Honey 5 50'
    ]
));
console.log(kitchen.addToMenu(
    'frozenYogurt',
    [
        'Yogurt 1',
        'Honey 1',
        'Banana 1',
        'Strawberries 10'
    ],
    9.99
));
console.log(kitchen.addToMenu(
    'Pizza',
    [
        'Flour 0.5',
        'Oil 0.2',
        'Yeast 0.5',
        'Salt 0.1',
        'Sugar 0.1',
        'Tomato sauce 0.5',
        'Pepperoni 1',
        'Cheese 1.5'
    ],
    15.55));

console.log(kitchen.showTheMenu());
console.log(kitchen.makeTheOrder('Pizza'));