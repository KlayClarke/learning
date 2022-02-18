const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose
  .connect("mongodb://localhost:27017/relationshipDemo")
  .then(() => {
    console.log("Mongo Connection Open");
  })
  .catch((err) => {
    console.log("Mongo Connection Error");
    console.log(err);
  });

const userSchema = new Schema({
  username: String,
  age: Number,
});

const tweetSchema = new Schema({
  text: String,
  likes: Number,
  user: { type: Schema.Types.ObjectId, ref: "User" }, // put user id as value for user param
});

const User = mongoose.model("User", userSchema);
const Tweet = mongoose.model("Tweet", tweetSchema);

const makeTweets = async () => {
  const user = new User({ username: "chickenfan99", age: 17 });
  const tweetOne = new Tweet({ text: "omgggg", likes: 0 });
  tweetOne.user = user; // to associate the tweet with specific user
  user.save();
  tweetOne.save();
};

makeTweets();
