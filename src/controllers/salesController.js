const salesService = require('../services/salesService');

const HTTP_OK_STATUS = 200;
// const HTTP_CREATED_STATUS = 201;
// const HTTP_NOT_FOUND_STATUS = 404;

// const registerSales = async (req, res) => {
//   const { id, itemSold } = req.body;
//   const newSale = await salesService.registerSales({ id, itemSold });
//   return res.status(HTTP_CREATED_STATUS).json(newSale);
// };

const getAllSales = async (_req, res) => {
  const result = await salesService.getAllSales();
  res.status(HTTP_OK_STATUS).json(result);
};

const getSalesById = async (req, res) => {
  const { id } = req.params;
  const result = await salesService.getSalesById(Number(id));

  return res.status(HTTP_OK_STATUS).json(result);
};

module.exports = { getAllSales, getSalesById };