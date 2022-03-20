var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/", (req, res) => {
  return res.send("Recieved a GET HTTP method");
});

router.post("/", (req, res) => {
  return res.send("Recieved a POST HTTP method");
});

router.put("/", (req, res) => {
  return res.send("Recieved a PUT HTTP method");
});

router.delete("/", (req, res) => {
  return res.send("Recieved a DELETE HTTP method");
});

module.exports = router;
