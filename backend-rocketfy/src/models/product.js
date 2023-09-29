const mongoose = require("mongoose");

const priceStockChangeSchema = new mongoose.Schema({
  price: Number,
  stock: Number,
  timestamp: { type: Date, default: Date.now }
});

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  sku: String,
  image: String,
  tags: [String],
  price: Number,
  stock: Number,
  priceStockHistory: [priceStockChangeSchema]
});

module.exports = mongoose.model("Product", productSchema);
