const productService = require('../services/productService');

const create = async (req, res, next) => {
  const { } = req.body;
  const newProduct = await productService.create({});
  res.status().json(newProduct);
};

module.exports = { create };