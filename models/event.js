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
    unique: true,
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
    }],
    matches: [matchSchema]
  },
  { timestamps: true }
);

eventSchema.pre("save", function(next) {
  //search through reactions array
  //compare interest arrays of 
});

module.exports = mongoose.model("Event", eventSchema);
