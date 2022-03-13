const { default: mongoose } = require("mongoose");

let Schema = mongoose.Schema;

let TestSchema = new Schema({
  a_string: String,
  a_date: Date,
});

// compile model from schema

let Test = mongoose.model("Test", TestSchema);
