const express = require("express");

const app = express();

// app.use((req, res) => {
//   res.send(
//     "<h1>Hello, Earthling!</h1><h3>It is nice to finally meet you.</h3>"
//   );
// });

// to send get requests
app.get("/", (req, res) => {
  res.send("Welcome home");
});

// param strings

app.get("/greet/:name", (req, res) => {
  const { name } = req.params;
  res.send(`Greetings ${name}. I hope you enjoy your stay!!!`);
});

// query strings - for search engine perhaps

app.get("/search", (req, res) => {
  const { q } = req.query;
  if (!q) {
    res.send("Nothing searched, nothing found");
  }
  res.send(`Query request recieved for ${q}`);
});

// to make a 'default' response for get requests

app.get("*", (req, res) => {
  res.send("invalid address. please try again.");
});

// to send post requests

app.post("/greet", (req, res) => {
  res.send("Post request to /greet. This is different than a get request.");
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});
