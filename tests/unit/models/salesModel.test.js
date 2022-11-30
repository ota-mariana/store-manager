// const { expect } = require('chai');
// const { describe } = require('mocha');
// const sinon = require('sinon');
// const connect = require('../../../src/models/connection');

// describe('Testes da camada model de Sales', function () {
//   describe('Verifica se o endpoint sales e sales/id lista as vendas', function () {
//     it('Lista todas as vendas', async function () {
//       sinon.stub(connect, 'execute').resolves([{ insertId: 4 }]);
//       const newProduct = await productsModel.createNewProduct();

//       expect(newProduct).to.be.deep.equal(4);
//     });
//   });

//   afterEach(sinon.restore);
// });