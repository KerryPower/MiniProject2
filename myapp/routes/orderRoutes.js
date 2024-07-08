const express = require('express');
const OrderController = require('../controllers/OrderController');
const router = express.Router();
const OrderService = require('../services/OrderService');
const orderService = new OrderService();
const orderController = new OrderController(orderService);

router.get("/", (req, res) => {
    orderController.getOrders(req, res);
});

module.exports = router;