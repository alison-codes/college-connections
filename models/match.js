const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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

module.exports = mongoose.model("Match", matchSchema);