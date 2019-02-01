'use strict'
const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = () => {
    return Product
        .find({ active: true }, 'title price slug')
}

exports.getBySlug = (slug) => {
    return Product
        .findOne({
            slug: slug,
            active: true
        }, 'title description price slug tags')
}

exports.getByTag = (tag) => {
    return Product
        .findOne({
            tags: tag,
            active: true
        })
}

exports.getById = (id) => {
    return Product
        .findById(req.params.id)
}

exports.create = (data) => {

    var product = new Product(data);
    return product
        .save() // assíncrono
};

exports.update = (id, data) => {
    return Product
        .findByIdAndUpdate(id, {
            $set: {
                title: data.title,
                description: data.description,
                price: data.price,
                slug: data.slug
            }
        })
}

exports.delete = (id) => {
    return Product
        .findByIdAndRemove(id)
}