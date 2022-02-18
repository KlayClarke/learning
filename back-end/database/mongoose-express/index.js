const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const Product = require("./models/products");

mongoose
  .connect("mongodb://localhost:27017/farmStand")
  .then(() => {
    console.log("Mongo Connection Open");
  })
  .catch((err) => {
    console.log("Mongo Error", err);
  });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Request Granted");
});

app.get("/products", async (req, res) => {
  const products = await Product.find({});
  console.log(products);
  res.render("products/index", { products });
});

app.get("/products/:id", async (req, res) => {
  const { id } = req.params;
  const foundProduct = await Product.findById(id);
  res.send("details page");
});

app.listen(3000, () => {
  console.log("APP LISTENING");
});
