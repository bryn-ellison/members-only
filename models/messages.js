const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  message_title: { type: String, required: true, maxLength: 100 },
  message_body: { type: String, required: true, maxLength: 1000 },
  message_date: { type: Date, required: true },
  author: { type: Schema.Types.ObjectId, ref: "User" },
});

// Export model
module.exports = mongoose.model("Message", MessageSchema);
