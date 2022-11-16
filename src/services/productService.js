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

module.exports = { getAllProducts, getProductsById };