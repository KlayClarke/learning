var express = require("express");
var router = express.Router();
var passport = require("passport");
const async = require("async");
const { body, validationResult } = require("express-validator");
const Message = require("../models/message");
const bcrypt = require("bcryptjs");

router.get("/:messageid/delete", function (req, res, next) {
  // find message in db and delete
  async.parallel(
    {
      message: function (callback) {
        Message.findById(req.params.messageid).exec(callback);
      },
    },
    function (err, results) {
      if (err) return next(err);
      Message.findByIdAndDelete(
        results.message._id,
        function (err, themessage) {
          if (err) return next(err);
          res.redirect("/");
        }
      );
    }
  );
});

module.exports = router;
