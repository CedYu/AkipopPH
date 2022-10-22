const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
	productName: {type: String, min:  4, required: true, unique: true},
  productDescription: {type: String, required: true, unique: true},
  productPrice: {type: Number, required: true, unique: true},
	productQuantity: {type: Number, required: true, unique: true},
})

module.exports = mongoose.model("product", productSchema);
