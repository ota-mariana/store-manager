const connect = require('./connection');

const insert = (product) => connect.execute(
  'ÌNSERT INTO StoreManager.products (id, name) VALUES (?, ?)',
  [StoreManager.products.id, StoreManager.products.name],
);

const getAll = () => connect.execute('SELECT * FROM StoreManager.products');

module.exports = { insert };