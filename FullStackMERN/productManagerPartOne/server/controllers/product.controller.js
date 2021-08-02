const { response } = require("express");
const Product = require("../models/product.model");

module.exports.createProduct = (req, res) => {
    Product.create(req.body)
    .then(result => console.log(result))
    .catch(err => console.log(err));
}

module.exports.findProduct = (req, res) => {
    Product.findOne({_id : req.params.id})
    .then(result => res.json(result))
    .catch(err => res.json({message : "Error finding the product", error : err}))
}
