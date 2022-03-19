const mongoose = require("mongoose");
const { DateTime } = require("luxon");

const Schema = mongoose.Schema;

let MessageSchema = new Schema({
  title: { type: String, required: true, minlength: 1 },
  text: { type: String, required: true, minlength: 1 },
  timestamp: { type: Date, default: Date.now() },
});

// virtual for formatted timestamp

MessageSchema.virtual("timestamp_formatted").get(function () {
  return `${DateTime.fromJSDate(this.timestamp).toLocaleString(
    DateTime.TIME_WITH_SECONDS
  )} on ${DateTime.fromJSDate(this.timestamp).toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)}`;
});

// export message model

module.exports = mongoose.model("Message", MessageSchema);
