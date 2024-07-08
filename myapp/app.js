const express = require('express')
const app = express()
const port = 3000
const orderRoutes = require('./routes/orderRoutes');

app.use(express.json());
app.use('/orders', orderRoutes);
app.use('/', express.static('public'))

module.exports = app;