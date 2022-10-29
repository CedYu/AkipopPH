import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema({
  username: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  sessionKey: { type: String, required: true, default: 0 },
});

const Session = mongoose.model("Session", sessionSchema);

export default Session;
