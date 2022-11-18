const mockAllProducts = [
  {
    "id": 1,
    "name": "Martelo de Thor"
  },
  {
    "id": 2,
    "name": "Traje de encolhimento"
  },
  {
    "id": 3,
    "name": "Escudo do Capitão América"
  }
];

const mockProductById = {
  "id": 1,
  "name": "Martelo de Thor"
};

const notFoundMessage = { "message": "Product not found" };

module.exports = { mockAllProducts, mockProductById, notFoundMessage }