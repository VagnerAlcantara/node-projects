'use strict'

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//this is a external middleware
app.use(bodyParser.json());

//this is a middleware
app.use((req, res, next) => {
    console.log(`${req.method}: ${req.url} `);
    next();
})
//this is a middleware with validation api_key
app.use((req, res, next) => {
    if (req.query.api_key) {
        next();
    } else {
        res.status(401)
            .send({ msg: 'Not authorized' });
    }
})

app.get('/', (req, res, next) => {
    console.log('accounts inline middleware');
    next();
}, (req, res) => {
    res.send('Hello World!');
});

app.get('/accounts', (req, res) => {
    res.send('{ msg: accounts }');
});

app.get('/transactions', (req, res) => {
    res.send('{ msg: transactions }');
});

app.listen(3000);
