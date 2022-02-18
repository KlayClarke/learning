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

// const p = new Product({
//   name: "Ruby Grapefruit",
//   price: 1.99,
//   category: "fruit",
// });

p.save()
  .then((p) => {
    console.log(p);
  })
  .catch((e) => {
    console.log("ERROR CAUGHT");
    console.log(e);
  });
