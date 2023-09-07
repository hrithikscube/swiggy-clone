const mongoose = require('mongoose');

// Define a schema for the restaurant
const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  rating: {
    type: Number,
    required: false,
  },
  phone: {
    type: String,
    required: false,
  },
  image: {
    type: String,
    required: false,
  },
});

// Create a Mongoose model based on the schema
const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
