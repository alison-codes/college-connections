const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reactionSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    checkedIn: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

const matchSchema = new Schema({
  users: [{
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  }],
  color: {
    type: String,
    default: '#123ABC'
  }
}, { timestamps: true });


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
    reactions: [reactionSchema],

    startTime: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", eventSchema);
