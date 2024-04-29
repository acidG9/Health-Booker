const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
require("dotenv").config();

const db_url = "mongodb+srv://akshansh:asdfghjkl@cluster0.von6fcf.mongodb.net/healthBooker"

const client = mongoose
  .connect(db_url, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => {
    console.log("Error: ", error);

    return error;
  });

module.exports = client;
