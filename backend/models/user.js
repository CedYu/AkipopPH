import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, min: 4, required: true, unique: true },
  firstname: { type: String, required: true, unique: true },
  lastname: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, min: 8, required: true },
});

const User = mongoose.model("User", userSchema);

export default User;
