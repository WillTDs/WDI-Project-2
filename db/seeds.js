const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Team = require('../models/team');

const dbURI = 'mongodb://localhost/wdi-project-2';
mongoose.connect(dbURI, { useMongoClient: true });

Team.collection.drop();

Team.create([{
  name: 'FC Twente Bensons',
  day: 'Thursday',
  format: '5-a-side',
  location: 'Cambridge',
  comments: [{
    text: 'Need players asap',
    rating: 5
  }]
}])
  .then(teams => console.log(`${teams.length} teams created!`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
