var express = require("express");
var router = express.Router();
const async = require("async");
const { body, validationResult } = require("express-validator");
const Message = require("../models/message");

/* GET home page. */
router.get("/", function (req, res, next) {
  // render all messages and send to index page
  Message.find({})
    .populate("author")
    .exec(function (err, list_messages) {
      if (err) return next(err);
      let message_list_sort_recent = [];
      for (let i = list_messages.length - 1; i > 0; i--) {
        message_list_sort_recent.push(list_messages[i]);
      }
      res.render("index", {
        title: "Members Only",
        secret: process.env.EXPRESS_SESSION_SECRET,
        message_list: message_list_sort_recent,
      });
    });
});

router.post("/", [
  // validate and sanitize fields
  body("title", "Title must be specified").trim().isLength({ min: 1 }).escape(),
  body("message", "Message field cannot be empty")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.render("index", { errors: errors.array() });
      return;
    } else {
      let message = new Message({
        title: req.body.title,
        message: req.body.message,
        author: res.locals.currentUser._id,
      });
      message.save(function (err) {
        if (err) return next(err);
        res.redirect("/");
      });
    }
  },
]);

module.exports = router;
