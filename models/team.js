const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: String,
  rating: Number
});

const teamSchema = new mongoose.Schema({
  name: String,
  league: String,
  format: String,
  day: String,
  venue: { type: mongoose.Schema.ObjectId, ref: 'Venue' },
  comments: [ commentSchema ]
});

module.exports = mongoose.model('Team', teamSchema);
