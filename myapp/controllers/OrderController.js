class OrderController {
    constructor(OrderService) {
        this.OrderService = OrderService;
    }

    getOrders(req, res) {
        const orders = this.OrderService.getOrders();
        
        if (req.query.status) {
            const filteredOrders = this.OrderService.filteredOrders(req.query.status);
            res.status(200).json(filteredOrders);
        } else {
            res.status(200).json(orders);
        }
    }
}

module.exports = OrderController;