const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/relationshipDemo")
  .then(() => {
    console.log("Mongo Connection Open");
  })
  .catch((err) => {
    console.log("Mongo Connection Error");
    console.log(err);
  });

const userSchema = new mongoose.Schema({
  first: String,
  last: String,
  addresses: [
    {
      _id: { id: false },
      street: String,
      city: String,
      state: String,
      country: String,
    },
  ],
});

const User = mongoose.model("User", userSchema);

const makeUser = async () => {
  const u = new User({
    first: "Harry",
    last: "Potter",
  });
  u.addresses.push({
    street: "123 Sesame St.",
    city: "New York",
    state: "New York",
    country: "USA",
  });
  const res = await u.save();
  console.log(res);
};

const addAddress = async (id) => {
  const user = await User.findById(id);
  user.addresses.push({
    street: "128 Manhatt St.",
    city: "New York",
    state: "New York",
    country: "USA",
  });
  const res = await user.save();
  console.log(res);
};

// makeUser();
addAddress("61d875ef99581fa185e8fcb3");
