import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, min: 4, required: true, unique: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  address:{ type:String },
  email: { type: String, required: true, unique: true },
  password: { type: String, min: 8 , required: true},
  role: {
    type: String,
    enum: ["customer", "staff", "admin"],
    default: "customer",
  },
  cart: { type: mongoose.Schema.Types.ObjectId, ref: "Cart" },
});

const User = mongoose.model("User", userSchema);

export default User;
