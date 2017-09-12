const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: String,
  rating: Number
});

const statusSchema = new mongoose.Schema({
  text: String
}, {
  timestamps: true
});

const teamSchema = new mongoose.Schema({
  name: String,
  venue: [{ type: mongoose.Schema.ObjectId, ref: 'Venue' }],
  statuses: [ statusSchema ],
  comments: [ commentSchema ]
});

module.exports = mongoose.model('Team', teamSchema);
