const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/shopApp")
  .then(() => {
    console.log("Connecting");
  })
  .catch((err) => {
    console.log("Error", err);
  });

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // require this parameter during creation of product
    maxlength: 20,
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price must be a positive number!"], // custom validator messages
  },
  onSale: {
    type: Boolean,
    default: false,
  },
  categories: [String],
  qty: {
    online: {
      type: Number,
      default: 0,
    },
    inStore: {
      type: Number,
      default: 0,
    },
    size: {
      type: String,
      enum: ["S", "M", "L"], // if passed size is not in array, throw validation error
    },
  },
});

const Product = mongoose.model("Product", productSchema);

// to create own instance methods
productSchema.methods.newMethod = function () {
  console.log(` - from ${this.name}`);
};

productSchema.methods.toggleOnSale = function () {
  this.onSale = !this.onSale;
  return this.save();
};

productSchema.methods.addCategory = function (newCat) {
  this.categories.push(newCat);
  return this.save();
};

const findProduct = async () => {
  const foundProduct = await Product.findOne({ name: "Mountain Bike" });
  console.log(foundProduct);
  await foundProduct.toggleOnSale();
  console.log(foundProduct);
  await foundProduct.addCategory("Outdoors");
  console.log(foundProduct);
};

// create own static methods - update all products as on sale with price of 0
// nothing to do with one particular product, but ALL products in general
productSchema.statics.fireSale = function () {
  this.updateMany({}, { onSale: true, price: 0 });
};

productSchema.statics.findByName = function (productName) {
  return this.findOne({ name: productName });
};

// const bike = new Product({
//   name: "Bike Lock",
//   price: 599,
//   categories: ["Protection", "Safety", "Biking"],
// });
// bike
//   .save()
//   .then((data) => {
//     console.log("It worked");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("It failed");
//     console.log(err);
//   });

// // to update existing product information - change price to 185 / have validator for min of 0
// Product.findOneAndUpdate(
//   { name: "Bike Lock" },
//   { price: 185 },
//   { new: true, runValidators: true }
// );
