var express = require("express");
var router = express.Router();
var { users } = require("../data/data");

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.send(Object.values(users));
});

router.post("/", (req, res) => {
  return res.send("POST HTTP method on user resource");
});

router.get("/:userid", (req, res) => {
  return res.send(users[req.params.userid]);
});

router.put("/:userid", (req, res) => {
  return res.send(`PUT HTTP method on user/${req.params.userid} resource`);
});

router.delete("/:userid", (req, res) => {
  return res.send(`DELETE HTTP method on user/${req.params.userid} resource`);
});

module.exports = router;
