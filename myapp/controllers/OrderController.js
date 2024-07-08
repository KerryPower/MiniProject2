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

    createOrder(req, res) {
        const order = req.body;
        const response = this.OrderService.createOrder(order);
        res.status(200).json({
            actionStatus: "New order created successfully",
            order: response
        });
    }

    deleteOrder(req, res) {
        const orderId = parseInt(req.params.id);
        const deletedOrder = this.OrderService.deleteOrder(orderId);
        res.status(200).json({
            actionStatus: "Deleted order successfully",
            order: deletedOrder
        });

    }

    updateOrder(req, res) {
        const orderId = parseInt(req.params.id);
        const updatedOrderData = req.body;
        const updatedOrder = this.OrderService.updateOrder(orderId, updatedOrderData)
        res.status(200).json({
            actionStatus: "Updated order successfully",
            order: updatedOrder
        });


    }

}



module.exports = OrderController;