const express = require('express');
const productsController = require('../controllers/productsController');

const routeProducts = express.Router();

routeProducts.get('/', productsController.getAllProducts);

routeProducts.get('/:id', productsController.getProductsById);

routeProducts.post('/', productsController.createNewProduct);

module.exports = { routeProducts };