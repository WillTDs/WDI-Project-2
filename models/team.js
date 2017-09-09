const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: String,
  rating: Number
});

const teamSchema = new mongoose.Schema({
  name: String,
  day: String,
  format: String,
  location: String,
  comments: [ commentSchema ]
});

module.exports = mongoose.model('Team', teamSchema);
