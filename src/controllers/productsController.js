const productService = require('../services/productService');

const HTTP_OK_STATUS = 200;
const HTTP_CREATED_STATUS = 201;
const HTTP_NOT_FOUND_STATUS = 404;

const getAllProducts = async (_req, res) => {
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

const createNewProduct = async (req, res) => {
  const { name } = req.body;
  const newObject = await productService.createNewProduct(name);
  return res.status(HTTP_CREATED_STATUS).json(newObject);
};

const updateProducts = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const product = { id, name };

  const result = await productService.getProductsById(Number(id));

  const resultProduct = await productService.updateProducts(product);

  if (result === undefined) {
    return res.status(HTTP_NOT_FOUND_STATUS).json({ message: 'Product not found' });
  }
  return res.status(HTTP_OK_STATUS).json(resultProduct);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productService.deleteProduct(id);

  if (message) return res.status(type).json({ message });
  
  return res.status(type).end();
};

module.exports = {
  getAllProducts,
  getProductsById,
  createNewProduct,
  updateProducts,
  deleteProduct,
};