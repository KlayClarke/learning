const { default: mongoose } = require("mongoose");

let Schema = mongoose.Schema;

let TestSchema = new Schema({
  a_string: String,
  a_date: Date,
});

let ValidationSchema = new Schema({
  eggs: {
    type: Number,
    min: [6, "Too few eggs"],
    max: [12, "Too many eggs"],
    required: [true, "Please enter eggs"],
  },
  drink: {
    type: String,
    enum: ["Coffee", "Tea", "Water"],
  },
});
