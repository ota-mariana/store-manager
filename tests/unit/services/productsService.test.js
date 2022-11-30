const { expect } = require('chai');
const { describe } = require('mocha');
const sinon = require('sinon');
const connect = require('../../../src/models/connection');

const productService = require('../../../src/services/productService');

const productsModel = require('../../../src/models/productsModel');

const { mockAllProducts, mockProductById, newProduct } = require('../mocks/mockProductModel');

describe('Testes da camada service', function () {
  describe('Caso o status for "OK", os dados são retornados', function () {
    it('Retorna um array', async function () {
      sinon.stub(connect, 'execute').resolves([mockAllProducts]);
      const allTheProducts = await productService.getAllProducts();

      expect(allTheProducts).to.be.an('array');
      expect(allTheProducts).to.be.deep.equal(mockAllProducts);
    });

    it('Retorna um objeto de acordo com o id', async function () {
      sinon.stub(connect, 'execute').resolves([[mockProductById]]);
      const productsById = await productService.getProductsById();

      expect(productsById).to.be.an('object');
      expect(productsById).to.be.deep.equal(mockProductById);
    });
  });

  describe('Verifica o endpoint products para cadastrar produtos', function () {
    it('Retorna um novo produto', async function () {

      const newProduct = {
        id: 4,
        name: "Product Y"
      };

      sinon.stub(productsModel, 'createNewProduct').resolves(4);
      sinon.stub(productsModel, 'getProductsById').resolves(newProduct);
      const resultNewProduct = await productService.createNewProduct({ name: "Product Y" });
      
      expect(resultNewProduct).to.be.equal(newProduct);
    });
  });

  describe('Verifica se o produto é atualizado', function () {
    it('Retorna um produto atualizado', async function () {

      const updatedProduct = {
        id: 1,
        name: "Product Z"
      };
      sinon.stub(connect, 'execute').resolves(updatedProduct);
      const product = await productService.updateProducts(updatedProduct);

      expect(product).to.be.deep.equal(updatedProduct);
    });
  });

  afterEach(sinon.restore);
});