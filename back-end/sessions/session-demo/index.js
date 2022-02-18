const express = require("express");
const app = express();
const session = require("express-session");

const sessionOptions = {
  secret: "not a very good secret",
  resave: false,
  saveUninitialized: false,
};
app.use(session(sessionOptions));

app.get("/viewcount", (req, res) => {
  if (req.session.count) {
    req.session.count += 1;
    res.send(`You have viewed this page ${req.session.count} times`);
  } else {
    req.session.count = 1;
    res.send(`You have viewed this page ${req.session.count} time`);
  }
});

app.get("/register", (req, res) => {
  const { username = "anon" } = req.query;
  req.session.username = username;
  console.log(req.session.username);
  res.redirect("/greet");
});

app.get("/greet", (req, res) => {
  const { username } = req.session;
  console.log(req.session.username);
  res.send(`Hello, ${username}`);
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
