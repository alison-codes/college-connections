const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reactionSchema = new Schema(
  {
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
    reactions: [reactionSchema],
    startTime: {
      type: Date,
      default: function() {
        let d = new Date();
        d.setDate(d.getDate() + 7);
        return d;
      }
    },
    image: String,
    perks: [{
      type: String,
      enum: ['F', 'G']
    }]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", eventSchema);
