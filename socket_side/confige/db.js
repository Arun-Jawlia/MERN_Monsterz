const mongoose = require("mongoose");
require("dotenv").config();
let mongo_url = process.env.mongo_url;

mongoose.set("strictQuery", true);
const connection = mongoose.connect(mongo_url);

module.exports = { connection };
