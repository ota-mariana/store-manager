const express = require('express');
const salesController = require('../controllers/salesController');
const { validateSaleById } = require('../middlewares/validateSalesProducts');

const routeSales = express.Router();

routeSales.post('/', salesController.registerSales);
routeSales.get('/', salesController.getAllSales);
routeSales.get('/:id', validateSaleById, salesController.getSalesById);

module.exports = { routeSales };