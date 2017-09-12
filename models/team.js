const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: String,
  rating: Number,
  user: { type: mongoose.Schema.ObjectId, ref: 'User' }
});

const statusSchema = new mongoose.Schema({
  text: String
}, {
  timestamps: true
});

const teamSchema = new mongoose.Schema({
  name: String,
  image: String,
  color: String,
  venues: [{ type: mongoose.Schema.ObjectId, ref: 'Venue' }],
  statuses: [ statusSchema ],
  comments: [ commentSchema ],
  user: { type: mongoose.Schema.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Team', teamSchema);
