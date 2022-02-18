const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("./models/user");
const session = require("express-session");

const app = express();

mongoose
  .connect("mongodb://localhost:27017/authDemo")
  .then(() => {
    console.log("MONGO CONNECTED");
  })
  .catch((err) => {
    console.log("MONGO ERROR");
    console.log(err);
  });

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded({ extended: true })); // parse req.body - needed to use data from form
app.use(
  session({ secret: "badsecret", resave: false, saveUninitialized: false })
);

const requireLogin = (req, res, next) => {
  // middleware that checks if user logged in, if not, redirect to login route
  if (!req.session.user_id) {
    return res.redirect("/login"); // always return inside func when not doing else
  }
  next();
};

app.get("/", (req, res) => {
  res.send("This is our homepage");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res, next) => {
  const { username, password } = req.body;
  const user = new User({ username, password });
  await user.save();
  req.session.user_id = user._id;
  res.redirect("/login"); // always redirect from post routes
});

app.get("/login", (req, res) => {
  if (req.session.user_id) {
    res.redirect("/secret");
  } else {
    res.render("login.ejs");
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const validUser = await User.findAndValidate(username, password);
  if (!validUser) {
    res.redirect("/login");
  } else {
    req.session.user_id = validUser._id; // store userid in session to callback for adding comments, reviews, etc
    res.redirect("/secret");
  }
});

app.post("/logout", (req, res) => {
  //   req.session.user_id = null; // to rid of one particular value on session
  req.session.destroy(); // to destroy all session stored info on user
  res.redirect("/login");
});

app.get("/secret", requireLogin, (req, res) => {
  res.render("secret.ejs");
});

app.listen(3000, () => {
  console.log("Serving app at 3000");
});
