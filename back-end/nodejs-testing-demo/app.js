const express = require("express");
const app = express();

const indexRouter = require("./index");

app.use(express.urlencoded({ extended: false }));
app.use("/", indexRouter);

app.listen("3000", () => {
  console.log("SERVER STARTED ON 3000");
});
