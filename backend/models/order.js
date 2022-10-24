import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  orderID: { type: String, required: true, unique: true },
  customerID: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  orderItems: { type: mongoose.Schema.Types.ObjectId, ref: "Cart" },
  status: {
    type: String,
    enum: [
      "Processing",
      "Confirmed",
      "Pending Payment",
      "To Ship",
      "Cancellation",
      "Shipping",
      "Received",
      "Return/Refund",
      "Completed",
    ],
    default: "Processing",
    required: true,
  },
});

const Order = mongoose.model("Order", orderSchema);

export default Order;
