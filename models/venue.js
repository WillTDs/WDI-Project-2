const mongoose = require('mongoose');

const venueSchema = new mongoose.Schema({
  name: String,
  pitch: String,
  image: String,
  address: String
});

module.exports = mongoose.model('Venue', venueSchema);
