const pizzas = require("../data/pizzas/pizzas.json")

class OrderService {
    constructor() {
        this.pizzas = pizzas;
    }

    getPizzas() {
        return this.pizzas;
    }

    createPizza(pizza) {
        this.pizzas.push(pizza);
        return pizza;
    }

    deletePizza(pizzaName) {
        const deletedPizzas = this.pizzas.filter(pizza => pizza.name === pizzaName);
        this.pizzas = this.pizzas.filter(pizza => pizza.name !== pizzaName);
        return deletedPizzas;
    }

    updatePizza(orderId, updatedOrderData) {
        const index = this.orders.findIndex(order => order.id === orderId);
        this.orders[index] = {
            ...this.orders[index],
            ...updatedOrderData
        };
        return this.orders[index];

    }
}

module.exports = OrderService;
