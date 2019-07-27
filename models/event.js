const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reactionSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
      enum: ["L", "D"]
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  },
  { timestamps: true }
);

const eventSchema = new Schema(
  {
    name: {
      required: true,
      unique: true,
      type: String
    },
    description: {
      required: true,
      type: String
    },
    reactions: [reactionSchema]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", eventSchema);
