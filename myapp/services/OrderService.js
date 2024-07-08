const orders = require('../data/orders/orders.json');

class OrderService {
    constructor() {
        this.orders = orders;
    }

    getOrders() {
        return this.orders;
    }

    filteredOrders(status) {
        return this.orders.filter(order => order.status == status);
    }
}

module.exports = OrderService;