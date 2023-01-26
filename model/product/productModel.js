const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  slug: String,
  feature: Boolean,
  description: String,
  short_description: String,
  price: Number,
  stock_quantity: Number,
  category: String,
  productImages: [String],
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
});

const ProductModel = mongoose.model("products", productSchema);
module.exports = ProductModel;
