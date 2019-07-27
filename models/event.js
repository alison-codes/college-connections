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
    },
    startTime: {
      type: Date,
      default: function() {
        let d = new Date();
        d.setDate(d.getDate() + 7);
        return d;
      }
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
