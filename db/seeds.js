const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Team = require('../models/team');
const User = require('../models/user');
const Venue = require('../models/venue');

const dbURI = 'mongodb://localhost/wdi-project-2';
mongoose.connect(dbURI, { useMongoClient: true });

Team.collection.drop();
User.collection.drop();
Venue.collection.drop();

User.create([{
  username: 'Will',
  email: 'w@w.com',
  password: 'password',
  passwordConfirmation: 'password'
}])
  .then(users => {
    console.log(`${users.length} users created`);
    return Venue.create([{
      name: 'Highbury',
      pitch: 'grass',
      address: '1arsenal'
    }, {
      name: 'Cambridge',
      pitch: 'Astro',
      address: '1arsenal'
    }, {
      name: 'Bethnal Green',
      pitch: 'Grass',
      address: '1arsenal'
    }, {
      name: 'Mile End',
      pitch: 'Grass',
      address: '1arsenal'
    }]);
  })
  .then(venues => {

    return Team.create([{
      name: 'FC Twente Bensons',
      day: 'Thursday',
      format: '5-a-side',
      venue: venues[0],
      comments: [{
        text: 'Need players asap',
        rating: 5
      }]
    },{
      name: 'Petr Cech Yourself',
      day: 'Sunday',
      format: '5-a-side',
      venue: venues[0],
      comments: [{
        text: 'Need players asap',
        rating: 5
      }]
    },{
      name: 'Haven’t Got a Kalou',
      day: 'Thursday',
      format: '7-a-side',
      venue: venues[0],
      comments: [{
        text: 'Need players asap',
        rating: 5
      }]
    },{
      name: 'We Arbeloa Lot of Teams',
      day: 'Sunday',
      format: '5-a-side',
      venue: venues[0],
      comments: [{
        text: 'Need players asap',
        rating: 5
      }]
    },{
      name: 'Murder On Zidane’s Floor',
      day: 'Sunday',
      format: '5-a-side',
      venue: venues[0],
      comments: [{
        text: 'Need players asap',
        rating: 5
      }]
    },{
      name: 'Le Saux Solid Crew',
      day: 'Wednesday',
      format: '7-a-side',
      venue: venues[0],
      comments: [{
        text: 'Need players asap',
        rating: 5
      }]
    }]);
  })
  .then(teams => console.log(`${teams.length} teams created!`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
