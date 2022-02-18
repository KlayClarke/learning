const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("tiny"));

const verifyPassword = (req, res, next) => {
  const { password } = req.query;
  if (password === "chickennugget") {
    next();
  }
  res.send("Wrong Password");
};

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/dogs", (req, res) => {
  res.send("Woof Woof");
});

app.get("/secret", verifyPassword, (req, res) => {
  res.send("I don't like talking to people");
});

// Send a 404 route - when user attempts to access undefined route
app.use((req, res, next) => {
  res.status(404).send("Not Found");
  return next();
});
app.listen(3000, () => {
  console.log("Running on Port 3000");
});
