const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  firstname: { type: String, required: true, minlength: 1, maxlength: 100 },
  lastname: { type: String, required: true, minlength: 1, maxlength: 100 },
  username: { type: String, required: true },
  password: { type: String, required: true },
  membership_status: {
    type: String,
    required: true,
    enum: ["Commoner", "Royalty"],
    default: "Commoner",
  },
});

// virtual for full name

UserSchema.virtual("fullname").get(function () {
  return `${this.firstname} ${this.lastname}`;
});

// export user model

module.exports = mongoose.model("User", UserSchema);
