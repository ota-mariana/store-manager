const salesModel = require('../models/salesModel');

// const registerSales = async (products) => {
//   const id = await salesModel.registerSales();
//   const arrayPromises = products.map((product) => salesModel.registerSalesProducts(id, product));
  
//   await Promise.all(arrayPromises);
//   return { id, itemsSold: products };
// };
// console.log(registerSales);

const getAllSales = async () => {
  const getSales = await salesModel.getAllSales();
  return getSales;
};

const getSalesById = async (id) => {
  const resultSalesById = await salesModel.getSalesById(id);
  return resultSalesById;
};

module.exports = { getAllSales, getSalesById };