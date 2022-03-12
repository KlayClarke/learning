var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("Hello user");
});

router.get("/cool", function (req, res, next) {
  res.send("You're so cool!");
});

// router.get("/");

module.exports = router;
