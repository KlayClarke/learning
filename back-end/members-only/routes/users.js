const { application } = require("express");
var express = require("express");
var router = express.Router();
var passport = require("passport");
const async = require("async");
const { body, validationResult } = require("express-validator");
const User = require("../models/user");
const bcrypt = require("bcryptjs");

/* GET users listing. */
router.get("/signup", function (req, res, next) {
  res.render("sign_up_form", {
    membership_status_list: ["Commoner", "Royalty"],
  });
});

router.post("/signup", [
  // validate and sanitize fields
  body("firstname")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("First name must be specified")
    .isAlphanumeric()
    .withMessage("First name has non-alphanumeric characters"),
  body("lastname")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Last name must be specified")
    .isAlphanumeric()
    .withMessage("Last name has non-alphanumeric characters"),
  body("username")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Username must be specified"),
  body("password")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Password must be specified"),
  body("membership_status")
    .trim()
    .isLength({ min: 1 })
    .escape()
    .withMessage("Membership status must be specified"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.render("sign_up_form", {
        title: "User Signup",
        errors: errors.array(),
      });
      return;
    } else {
      bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
        if (err) return next(err);
        const user = new User({
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          username: req.body.username,
          password: hashedPassword,
          membership_status: req.body.membership_status,
        }).save((err) => {
          if (err) return next(err);
          res.redirect("/");
        });
      });
    }
  },
]);

router.get("/login", function (req, res, next) {
  res.render("log_in_form");
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/",
  })
);

router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

module.exports = router;
