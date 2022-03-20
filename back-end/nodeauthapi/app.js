const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.get("/api", (req, res) => {
  res.json({
    message: "Welcome to Klay's api",
  });
});

app.post("/api/posts", verifyToken, (req, res) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) return res.sendStatus(403);
    res.json({
      message: "Post created...",
      authData,
    });
  });
});

app.post("/api/login", (req, res, next) => {
  // mock user
  const user = {
    id: 1,
    username: "klayclarke",
    email: "clarkeklay@gmail.com",
  };

  // pass token as json
  jwt.sign({ user }, "secretkey", { expiresIn: "30s" }, (err, token) => {
    if (err) return next(err);
    res.json({ token });
  });
});

// middleware to verify token
function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  // check if bearer undefined
  if (typeof bearerHeader !== "undefined") {
    // split at token
    const bearer = bearerHeader.split(" ");
    // get token from array
    const bearerToken = bearer[1];
    // set the token
    req.token = bearerToken;
    // next middleware
    next();
  } else {
    res.sendStatus(403);
  }
}

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
