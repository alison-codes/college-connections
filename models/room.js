const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema(
  {
    content: String
  },
  { timestamps: true }
);

const roomSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    users: [
      {
        type: Schema.Types.ObjectId,
        ref: "User"
      }
    ],
    messages: [messageSchema]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Room", roomSchema);
