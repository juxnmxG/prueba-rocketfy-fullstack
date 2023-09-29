const express = require("express");
const app = express();
const connectDB = require("./config/bd");
const cors = require("cors");

connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/product", require("./src/routes/productRoutes"));

app.listen(4000, () => {
  console.log("corriendo el puerto 4000");
});
