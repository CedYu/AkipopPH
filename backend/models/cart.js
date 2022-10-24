import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  products: [{ type: mongoose.Schema.types.ObjectId, ref: "Product" }],
  totalPrice: { type: Number, required: true, default: 0 },
});

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
