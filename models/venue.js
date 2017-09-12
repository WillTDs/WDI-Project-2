const mongoose = require('mongoose');

const venueSchema = new mongoose.Schema({
  name: String,
  pitch: String,
  format: String,
  day: String,
  image: String,
  address: String,
  location: {
    lat: Number,
    lng: Number
  }
});

module.exports = mongoose.model('Venue', venueSchema);
