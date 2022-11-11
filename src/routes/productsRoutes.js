const express = require('express');
const productDB = require('../db/productsDB');

const router = express.Router();

const HTTP_OK_STATUS = 200;

router.get('/products', async (req, res) => {
  const products = req.body;
  const [result] = await productDB.insert(products);
  res.status(HTTP_OK_STATUS).json(result);
});

module.exports = router;