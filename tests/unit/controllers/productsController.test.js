const { expect } = require('chai');
const { describe } = require('mocha');
const sinon = require('sinon');

const productsController = require('../../../src/controllers/productsController');
const productService = require('../../../src/services/productService');

const { mockAllProducts, mockProductById, notFoundMessage } = require('../mocks/mockProductModel');

const HTTP_OK_STATUS = 200;
const HTTP_CREATED_STATUS = 201;
const HTTP_BAD_REQUEST_STATUS = 400;
const HTTP_NOT_FOUND_STATUS = 404;

describe('Testes da camada controller', function () {
  describe('Caso o status for "OK", os dados são retornados', function () {
    it('Retorna um array', async function () {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();

      sinon.stub(productService, 'getAllProducts').resolves(mockAllProducts);

      await productsController.getAllProducts(req, res);

      expect(res.status.calledWith(HTTP_OK_STATUS)).to.be.equal(true);
      expect(res.json.calledWith(mockAllProducts)).to.be.equal(true);
    });

    it('Retorna um objeto de acordo com o id', async function () {
      const res = {};
      const req = { params: { "id": 1, "name": "Martelo de Thor" } };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub();

      sinon.stub(productService, 'getProductsById').resolves(req.params);

      await productsController.getProductsById(req, res);

      expect(res.status.calledWith(HTTP_OK_STATUS)).to.be.equal(true);
      expect(res.json.calledWith(mockProductById)).to.be.equal(true);
    });
  });

  describe('Caso o status for "NOT FOUND", a mensagem de erro é retornada', function () {
    it('Retorna uma mensagem de erro', async function () {
      const res = {};
      const req = { params: { id: 100 } };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
     
      sinon.stub(productService, 'getProductsById').resolves(req.body);

      await productsController.getProductsById(req, res);

      expect(res.status.calledWith(HTTP_NOT_FOUND_STATUS)).to.be.equal(true);
      expect(res.json.calledWith(notFoundMessage)).to.be.equal(true);
    });
  });

  describe('Verifica se é cadastrado um novo produto através do endpoint products', function () {
    it('Retorna um novo produto cadastrado com sucesso', async function () {
      const res = {};
      const req = {
        body: { name: "Product Z" }
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();

      sinon.stub(productService, 'createNewProduct').resolves(req.body);

      await productsController.createNewProduct(req, res);

      expect(res.status.calledWith(HTTP_CREATED_STATUS)).to.be.equal(true);
      expect(res.json.calledWith(req.body)).to.be.equal(true);
    });
  });

  afterEach(sinon.restore);
});