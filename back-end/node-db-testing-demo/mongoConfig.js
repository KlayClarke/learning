const mongoose = require("mongoose");

const mongoDB = "mongourl";

mongoose.connect(mongoDB, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));


