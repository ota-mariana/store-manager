const salesModel = require('../models/salesModel');

const HTTP_BAD_REQUEST_STATUS = 400;
const HTTP_NOT_FOUND_STATUS = 404;
const HTTP_UNPROCESSABLE_STATUS = 422;

const validateSalesProducts = (req, res, next) => {
  const { productId, quantity } = req.body;

  if (productId === undefined) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({ message: '"productId" is required' });
  }

  if (quantity === undefined) {
    return res.status(HTTP_BAD_REQUEST_STATUS).json({ message: '"quantity" is required' });
  }

  if (quantity <= 0) {
    return res.status(HTTP_UNPROCESSABLE_STATUS)
      .json({ message: '"quantity" must be greater than or equal to 1' });
  }

  next();
};

// const validateSaleExist = (req, res) => {
//   const productsArray = salesModel.getAllSales();
//   // console.log(saleArray);
//   const products = req.body;
//   const idOfProducts = products.map(({ productId }) => productId);

//   const productsExist = idOfProducts.every((idProduct) => productsArray
//     .some(({ id }) => idProduct === id));
  
//   if (productsExist === undefined) {
//     return res.status(HTTP_NOT_FOUND_STATUS).json('');
//   }
// };

const validateSaleById = async (req, res, next) => {
  const { id } = req.params;
  const result = await salesModel.getSalesById(id);
  console.log(result);
  // const result = allSales.some((sale) => sale.saleId === id);

  if (result.length === 0) {
    return res.status(HTTP_NOT_FOUND_STATUS).json({ message: 'Sale not found' });
  }

  next();
};

module.exports = { validateSalesProducts, validateSaleById };