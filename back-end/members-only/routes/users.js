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
  body("passwordconfirmation").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Password confirmation does not match password");
    }
    return true; // indicate success of custom validator
  }),
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
    failureRedirect: "/users/login",
  })
);

router.get("/account", function (req, res) {
  res.render("user_detail");
});

router.get("/:id/join", function (req, res) {
  res.render("join_form");
});

router.post("/:id/join", [
  body("passcode", "Passcode field cannot be empty").trim().escape(),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.render("join_form", { errors: errors.array() });
      return;
    } else {
      async.parallel(
        {
          user: function (callback) {
            User.findById(req.params.id).exec(callback);
          },
        },
        function (err, results) {
          if (err) return next(err);
          let user = new User({
            firstname: results.user.firstname,
            lastname: results.user.lastname,
            username: results.user.username,
            password: results.user.password,
            membership_status: "Royalty",
            _id: req.params.id,
          });
          // update the user membership status
          User.findByIdAndUpdate(
            req.params.id,
            user,
            {},
            function (err, theuser) {
              if (err) return next(err);
              res.redirect("/users/account");
            }
          );
        }
      );
    }
  },
]);

router.get("/:id/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});

module.exports = router;
