const express = require('express');
const productsRoutes = require('./routes/productsRoutes');

const app = express();

app.use(express.json());

app.use('/products', productsRoutes);

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.get('/products', (req, res) => {
  res.send('testando 1');
});

// não remova essa exportação, é para o avaliador funcionar
// você pode registrar suas rotas normalmente, como o exemplo acima
// você deve usar o arquivo index.js para executar sua aplicação 
module.exports = app;