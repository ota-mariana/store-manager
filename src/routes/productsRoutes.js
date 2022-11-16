const express = require('express');
const productsController = require('../controllers/productsController');

const routeProducts = express.Router();

// const HTTP_OK_STATUS = 200;

routeProducts.get('/', productsController.getAllProducts);

routeProducts.get('/:id', productsController.getProductsById);

// router.get('/products', async (req, res) => {
//   const products = req.body;
//   const [result] = await productsController.insert(products);
//   res.status(HTTP_OK_STATUS).json(result);
// });

module.exports = { routeProducts };