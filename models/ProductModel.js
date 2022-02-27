const mongoose = require("mongoose");

// Create the schema
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

// Create the model
const ProductModel = mongoose.model('products', ProductSchema);

// Export the model
module.exports = ProductModel;