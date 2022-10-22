const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	username: {type: String, min:  4, required: true, unique: true},
  firstname: {type: String, required: true, unique: true},
  lastname: {type: String, required: true, unique: true},
	email: {type: String, required: true, unique: true},
	password: {type: String, min: 8, required: true},
  password2: {type: String, min: 8, required: true}
})

module.exports = mongoose.model("User", userSchema);
