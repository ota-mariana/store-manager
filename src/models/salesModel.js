const connect = require('./connection');

// const registerSales = async () => {
//   const [{ insertId }] = await connect.execute(
//     'INSERT INTO StoreManager.sales (date) VALUES (default)', [],
//   );
//   return insertId;
// };

// const registerSalesProducts = async (id, products) => {
//   const [resultSalesProducts] = await connect.execute(
//     'INSERT INTO StoreManager.sales_products (sales_id, product_id, quantity) VALUES (?, ?, ?)',
//     [id, products.productId, products.quantity],
//   );
//   return resultSalesProducts;
// };

const getAllSales = async () => {
  const [result] = await connect.execute(
    `SELECT sp.sale_id AS saleId, s.date, sp.product_id AS productId, sp.quantity
    FROM StoreManager.sales_products AS sp
    INNER JOIN StoreManager.sales AS s
    ON s.id = sp.sale_id
    ORDER BY s.id, productId`,
  );
  return result;
};

const getSalesById = async (saleId) => {
  const [result] = await connect.execute(
    `SELECT s.date, sp.product_id AS productId, sp.quantity
    FROM StoreManager.sales_products AS sp
    INNER JOIN StoreManager.sales AS s
    ON s.id = sp.sale_id
    WHERE s.id = ?
    ORDER BY s.id, productId`,
    [saleId],
  );
  return result;
};

module.exports = { getAllSales, getSalesById };