import mongoose from 'mongoose'

//Test Schema. Free to break
const testSchema = new mongoose.Schema({
  test3:{type: String, required: true, unique:true}
})

const test = mongoose.model("test", testSchema)

export default test