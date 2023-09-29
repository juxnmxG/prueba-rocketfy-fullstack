const mongoose = require("mongoose");
require("dotenv").config({ path: ".env" });
const connectDB = async () => {
  try {
    await mongoose
      .connect(process.env.DB_MONGO, {
        useNewUrlParser: false,
        useUnifiedTopology: true,
      })
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDB;
