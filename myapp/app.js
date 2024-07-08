const express = require('express')
const app = express()
const port = 3000
const pizzaRoutes = require('./routes/pizzaRoutes');

app.use('/pizza', pizzaRoutes);
app.use('/', express.static('public'))

module.exports = app;