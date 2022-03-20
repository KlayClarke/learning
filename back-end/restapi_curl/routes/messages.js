var express = require("express");
var router = express.Router();
var { messages, users } = require("../data/data");
var { v4: uuidv4 } = require("uuid");

// middleware //

router.use((req, res, next) => {
  req.me = users[2];
  next();
});

/* GET users listing. */
router.get("/", (req, res) => {
  return res.send(Object.values(messages));
});

router.get("/session", (req, res) => {
  return res.send(users[req.me.id]);
});

router.post("/", (req, res) => {
  const id = uuidv4();
  const message = {
    id,
    text: req.body.text,
    userid: req.me.id,
  };
  messages[id] = message;
  return res.send(message);
});

router.get("/:messageid", (req, res) => {
  return res.send(messages[req.params.messageid]);
});

router.delete("/messageid", (req, res) => {
  const { [req.params.messageid]: message, ...otherMessages } = messages;
  messages = otherMessages;
  return res.send(messages);
});

module.exports = router;
