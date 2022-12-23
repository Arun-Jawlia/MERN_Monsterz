// DONE.
const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  message: { type: String, required: true },
  userName: { type: String, required: true },
});

const messageModel = mongoose.model("chatmessage", messageSchema);

module.exports = { messageModel };
