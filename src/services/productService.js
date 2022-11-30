// const Joi = require('joi');
const productsModel = require('../models/productsModel');

const getAllProducts = async () => {
  const getProducts = await productsModel.getAllProducts();
  return getProducts;
};

const getProductsById = async (id) => {
  const resultProductsById = await productsModel.getProductsById(id);
  return resultProductsById;
};

const createNewProduct = async (name) => {
  const newProduct = await productsModel.createNewProduct(name);
  console.log(newProduct);
  const resultNewProduct = await productsModel.getProductsById(newProduct);
  return resultNewProduct;
};

const updateProducts = async (product) => {
  const resultProduct = await productsModel.updateProducts(product);
  console.log(resultProduct);
  return resultProduct;
};

const deleteProduct = async (id) => {
  const productId = await productsModel.getProductsById(id);

  if (productId) {
    await productsModel.deleteProduct(id);
    return { type: 204 };
  }
  return { type: 404, message: 'Product not found' };
};

module.exports = {
  getAllProducts,
  getProductsById,
  createNewProduct,
  updateProducts,
  deleteProduct,
};