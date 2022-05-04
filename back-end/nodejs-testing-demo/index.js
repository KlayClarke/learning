const express = require("express");
const router = express.Router();

const array = [];

router.get("/", (req, res) => {
  res.json({ name: "Frodo" });
});

router.get("/test", (req, res) => {
  res.json({ array });
});

router.post("/post", (req, res) => {
  array.push(req.body.item);
  res.send("success");
});

module.exports = router;
