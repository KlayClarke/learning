const express = require("express");
const app = express();
const path = require("path");
const redditData = require("./data.json");

// specify location of stylesheet

app.use(express.static(path.join(__dirname, "public")));

// to specify ejs to our express connection

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home"); // rendering template
});

app.get("/cats", (req, res) => {
  const cats = ["Nani", "Melvo", "Swerv", "Cooki", "Lani", "Sessi"];
  res.render("cats", { cats });
});

app.get("/rand", (req, res) => {
  const num = Math.floor(Math.random() * 100 + 1);
  res.render("random", { num });
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  if (data) {
    res.render("sub", { ...data });
  } else {
    res.render("notfound", { subreddit });
  }
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
