'use strict';

const repository = require('../repositories/order-repository');
const guid = require('guide');
const authService = require('../services/auth-services');

exports.get = async(req, res, next) => {
    try {
        var data = await repository.get();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.post = async(req, res, next) => {
    //Recupera o token
    var token = req.body.token || 
                req.query.token ||
                req.headers['x-access-token'];

    //Decodifica token
    var data = await authService.decodeToken(token);

    try {
          await repository.create({
            customer: data.id,
            number: guid.raw().substring(0, 6),
            items: req.body.items
        });
        res.status(201).send({
            message: 'Pedido cadastrado com sucesso!'
        });
    } catch (e) {
        console.log(e);
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
};