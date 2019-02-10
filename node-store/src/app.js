/*
'use strict': ajuda o javascrip ser mais criterioso, 
falhando já na compilação como na falta de um ; por exemplo
*/
'use strict'

/* npm install:
- http: servidor http que ficará monitorando a porta definida
- express: possui módulos como MVC, por exemplo
- debug: pacote para debugar a aplicação
obs. usar --save para que possa ser salvo como dependência do projeto,
assim quando estiver versionado no GIT haverá apenas um arquivo de dependência
e executando o npm install ele instalará todos os pacotes
*/

/*
    quando n for informado ./ ele ira buscar na sua aplicação, 
    caso contrário ele irá buscar no node_modules
*/
const express = require('express');
/*
body-parser: pacote utilizado para trabalhar com o body da requisição, sendo possível por exemplo, converter
em json
*/
const bodyParser = require('body-parser');
const app = express();
const mongoose = require('mongoose');

//Conecta com o banco
mongoose.connect("mongodb://vagneralcantara:vagneralcantara15@ds064748.mlab.com:64748/nodestoredb");


//Carregar modelos
const Product = require('./models/product')
const Customer = require('./models/customer')
const Order = require('./models/order')

//Carregar rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/products-route');
const customerRoute = require('./routes/customer-route');
const orderRoute = require('./routes/order-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', indexRoute);
app.use('/products', productRoute);
app.use('/customers', customerRoute);
app.use('/order', orderRoute);

module.exports = app;