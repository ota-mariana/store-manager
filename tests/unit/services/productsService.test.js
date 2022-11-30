const { expect } = require('chai');
const { describe } = require('mocha');
const sinon = require('sinon');
const connect = require('../../../src/models/connection');

const productService = require('../../../src/services/productService');

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

  // describe('Verifica o endpoint products para cadastrar produtos', function () {
  //   it('Retorna um novo produto', async function () {
  //     sinon.stub(connect, 'execute').resolves(newProduct);
  //     const product = await productService.createNewProduct(newProduct.name);
  //     const resultNewProduct = await productsModel.getProductsById(product.id);

  //     expect(resultNewProduct).to.be.an('object');
  //     // expect(product).to.be.deep.equal(newProduct);
  //   });
  // });

  afterEach(sinon.restore);
});