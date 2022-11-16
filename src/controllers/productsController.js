const productService = require('../services/productService');

const HTTP_OK_STATUS = 200;
const HTTP_NOT_FOUND_STATUS = 404;

const getAllProducts = async (req, res) => {
  const result = await productService.getAllProducts();
  res.status(HTTP_OK_STATUS).json(result);
};

const getProductsById = async (req, res) => {
  const { id } = req.params;
  const result = await productService.getProductsById(Number(id));

  if (!result) {
    return res.status(HTTP_NOT_FOUND_STATUS).json({ message: 'Product not found' });
  }
    return res.status(HTTP_OK_STATUS).json(result);
};

module.exports = { getAllProducts, getProductsById };