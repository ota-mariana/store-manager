const express = require('express');
const productsController = require('../controllers/productsController');
const validateNameProduct = require('../middlewares/validateName');

const routeProducts = express.Router();

routeProducts.get('/', productsController.getAllProducts);

routeProducts.get('/:id', productsController.getProductsById);

routeProducts.post('/', validateNameProduct, productsController.createNewProduct);

module.exports = { routeProducts };