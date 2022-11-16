const connect = require('./connection');

// const createNewProduct = async ({ name }) => {
//   await connect.execute('ÌNSERT INTO StoreManager.products (name) VALUES (?, ?)', [name]);
// };

const getAllProducts = async () => {
  const [result] = await connect.execute('SELECT * FROM StoreManager.products ORDER BY id');
  return result;
};

const getProductsById = async (id) => {
  const [[result]] = await connect.execute(
    'SELECT * FROM StoreManager.products WHERE id = ? ORDER BY id', [id],
  );
  return result;
};

module.exports = { getAllProducts, getProductsById };