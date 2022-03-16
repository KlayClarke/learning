const mongoose = require("mongoose");
const { DateTime } = require("luxon");

const Schema = mongoose.Schema;

let BookInstanceSchema = new Schema({
  book: { type: Schema.Types.ObjectId, ref: "Book", required: true },
  imprint: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ["Available", "Maintenance", "Loaned", "Reserved"],
    default: "Maintenance",
  },
  due_back: { type: Date, default: Date.now() },
});

// virtual for bookinstances url

BookInstanceSchema.virtual("url").get(function () {
  return `/catalog/bookinstance/${this._id}`;
});

// virtual for formatted due back date - eg March 13 2022

BookInstanceSchema.virtual("due_back_formatted").get(function () {
  return DateTime.fromJSDate(this.due_back).toLocaleString(DateTime.DATE_MED);
});

// virtual for formatted due back date - eg 2022-03-13

BookInstanceSchema.virtual("due_back_formatted_yyyy_mm_dd").get(function () {
  return this.due_back.toISOString().split("T")[0];
});

// export bookinstance model

module.exports = mongoose.model("BookInstance", BookInstanceSchema);
