const express = require('express');
const OrderController = require('../controllers/OrderController');
const router = express.Router();
const OrderService = require('../services/OrderService');
const orderService = new OrderService();
const orderController = new OrderController(orderService);

router.get("/", (req, res) => {
     orderController.getOrders(req, res);
});

router.post("/", (req, res) => {
    orderController.createOrder(req, res)
});

router.delete("/:id", (req, res) => {
    orderController.deleteOrder(req, res)
});

router.put("/:id", (req, res) => {
    orderController.updateOrder(req, res)
});

module.exports = router;