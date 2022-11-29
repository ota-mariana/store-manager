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
  const resultNewProduct = await productsModel.getProductsById(newProduct);
  return resultNewProduct;
};

const updateProducts = async (product) => {
  const resultProduct = await productsModel.updateProducts(product);
  console.log(resultProduct);
  return resultProduct;
};

module.exports = { getAllProducts, getProductsById, createNewProduct, updateProducts };