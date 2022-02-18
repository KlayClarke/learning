const express = require("express");
const app = express();
const path = require("path");
const { v4: uuidv4 } = require("uuid"); // generate unique ids for comments
const methodOverride = require("method-override"); // allow for patch and delete http requests

app.use(express.urlencoded({ extended: true })); // parse post request body
app.use(express.json()); // to parse for json data in post request body
app.use(methodOverride("_method"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// mock database
let comments = [
  {
    id: uuidv4(),
    username: "Todd",
    comment: "haha i received the email",
  },
  {
    id: uuidv4(),
    username: "Jamie",
    comment: "lol, did it make you laugh?",
  },
  {
    id: uuidv4(),
    username: "bossman22",
    comment: "made me laugh",
  },
  {
    id: uuidv4(),
    username: "lillytuto",
    comment: "Todd, call me hon - i wanna hear your voice",
  },
  {
    id: uuidv4(),
    username: "mariabeau",
    comment: "love you toddy!",
  },
];

// show all comments (get)
app.get("/comments", (req, res) => {
  res.render("comments/index", { comments });
});

// create new comment (get form)
app.get("/comments/new", (req, res) => {
  res.render("comments/new");
});

// create new comment (post form content)
app.post("/comments", (req, res) => {
  const { username, comment } = req.body;
  comments.push({ id: uuidv4(), username, comment });
  res.redirect("/comments");
});

// show comment (using id)
app.get("/comments/:id", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/show", { comment });
});

// edit comment (get form)
app.get("/comments/:id/edit", (req, res) => {
  const { id } = req.params;
  const comment = comments.find((c) => c.id === id);
  res.render("comments/edit", { comment });
});

// edit comment (patch / update using form content)
app.patch("/comments/:id", (req, res) => {
  const { id } = req.params;
  const newCommentText = req.body.comment;
  const foundComment = comments.find((c) => c.id === id);
  foundComment.comment = newCommentText;
  res.redirect("/comments");
});

// delete comment (using id)
app.delete("/comments/:id", (req, res) => {
  const { id } = req.params;
  comments = comments.filter((c) => c.id !== id);
  res.redirect("/comments");
});

// set default host for server
app.listen(3000, () => {
  console.log("On Port 3000");
});
