const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const res = require("express/lib/response");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username cannot be blank"],
  },
  password: {
    type: String,
    required: [true, "Password cannot be blank"],
  },
});

userSchema.statics.findAndValidate = async function (username, password) {
  const user = await this.findOne({ username });
  if (!user) {
  }
  const isValid = await bcrypt.compare(password, user.password);
  return isValid ? user : false;
};

userSchema.pre("save", async function (next) {
  // middleware that runs before a user is saved - hashes password and adds it to db as user pw
  if (!this.isModified("password")) {
    // if user modifies something other than password, don't rehash password
    return next();
  }
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

module.exports = mongoose.model("User", userSchema);
