import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
  productID: { type: String, required: true, unique: true },
	productName: { type: String, required: true },
  productDescription: { type: String, required: true },
  productPrice: { type: Number, required: true },
	productQuantity: { type: Number, required: true },
})

const Product = mongoose.model("Product", productSchema)

export default Product