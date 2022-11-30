const { expect } = require('chai');
const { describe } = require('mocha');
const sinon = require('sinon');
const connect = require('../../../src/models/connection');

const productsModel = require('../../../src/models/productsModel');

const { mockAllProducts, mockProductById } = require('../mocks/mockProductModel');

describe('Testes da camada model', function () {
  describe('Caso o status for "OK", os dados são retornados', function () {
    it('Retorna um array', async function () {
      sinon.stub(connect, 'execute').resolves([mockAllProducts]);
      const allTheProducts = await productsModel.getAllProducts();

      expect(allTheProducts).to.be.an('array');
      expect(allTheProducts).to.be.deep.equal(mockAllProducts);
    });

    it('Retorna um objeto de acordo com o id', async function () {
      sinon.stub(connect, 'execute').resolves([[mockProductById]]);
      const productsById = await productsModel.getProductsById();

      expect(productsById).to.be.an('object');
      expect(productsById).to.be.deep.equal(mockProductById);
    });
  });

  describe('Verifica o endpoint products para cadastrar produtos', function () {
    it('Cadastra um novo produto', async function () {
      sinon.stub(connect, 'execute').resolves([{ insertId: 4 }]);
      const newProduct = await productsModel.createNewProduct();

      expect(newProduct).to.be.deep.equal(4);
    });
  });

  // describe('Verifica se o produto é atualizado', function () {
  //   it('Atualiza dados de um produto específico', async function () {
  //     sinon.stub(connect, 'execute').resolves([{ insertId: 4 }]);
  //     const updatedProduct = await productsModel.createNewProduct();

  //     expect(updatedProduct).to.be.deep.equal(4);
  //   });
  // });

  afterEach(sinon.restore);
});