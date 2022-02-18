const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/socialMedia")
  .then(() => {
    console.log("Connecting");
  })
  .catch((err) => {
    console.log("Error", err);
  });

const personSchema = new mongoose.Schema({
  first: String,
  last: String,
});

// mongoose virtuals
// will behave as if an actual property
personSchema.virtual("fullName").get(function () {
  return `${this.first} ${this.last}`;
});

const Person = mongoose.model("Person", personSchema);

const tammy = new Person({ first: "Tammy", last: "Chow" });
