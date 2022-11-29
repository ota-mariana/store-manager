const connect = require('./connection');

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

const createNewProduct = async (name) => {
  const [{ insertId }] = await connect.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)', [name],
  );
  return insertId;
};

const updateProducts = async (product) => {
  await connect.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id = ?',
    [product.name, product.id],
  );

  return product;
};

module.exports = {
  getAllProducts,
  getProductsById,
  createNewProduct,
  updateProducts,
};