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
    console.log(`${users.length} teams created`);
    return Venue.create([{
      name: 'Canary Wharf',
      pitch: 'Grass',
      format: '5-A-SIDE',
      day: 'Thursday',
      address: 'Rokerby School, Barking Road, E16 4DD',
      location: {
        lat: 51.5186123,
        lng: 0.0134932
      }
    }, {
      name: 'Stratford',
      pitch: 'Astro',
      format: '7-A-SIDE',
      day: 'Thursday',
      address: 'Chobham Academy, 40 Cheering Lane, E20 1BD',
      location: {
        lat: 51.5493111,
        lng: 0.0094444
      }
    }, {
      name: 'Liverpool Street',
      pitch: 'Astro',
      format: '5-A-SIDE',
      day: 'Sunday',
      address: 'Bow School, Rooftop pitch, E3 3QW',
      location: {
        lat: 51.5234183,
        lng: -0.0117561
      }
    }, {
      name: 'Caledonian Road',
      pitch: 'Grass',
      format: '7-A-SIDE',
      day: 'Thursday',
      address: 'Holloway School, Caledonian Road, N7 0EQ',
      location: {
        lat: 51.5574908,
        lng: -0.1411286
      }
    }, {
      name: 'Vauxhall',
      pitch: 'Grass',
      format: '5-A-SIDE',
      day: 'Sunday',
      address: 'Vauxhall rhino turf, Lollard Street, SE11 6PX',
      location: {
        lat: 51.4654221,
        lng: -0.2198861
      }
    }]);
  })
  .then(venues => {

    return Team.create([{
      name: 'FC Twente Bensons',
      venue: venues[0],
      comments: [{
        text: 'Need players asap',
        rating: 5
      }]
    },{
      name: 'Petr Cech Yourself',
      venue: venues[0],
      comments: [{
        text: 'Need players asap',
        rating: 5
      }]
    },{
      name: 'Haven’t Got a Kalou',
      venue: venues[2],
      comments: [{
        text: 'Need players asap',
        rating: 5
      }]
    },{
      name: 'We Arbeloa Lot of Teams',
      venue: venues[3],
      comments: [{
        text: 'Need players asap',
        rating: 5
      }]
    },{
      name: 'Murder On Zidane’s Floor',
      venue: venues[3],
      statuses: [{
        text: 'Need players asap'
      }]
    },{
      name: 'Le Saux Solid Crew',
      venue: venues[2],
      comments: [{
        text: 'Need players asap',
        rating: 5
      }]
    },{
      name: 'Le Saux Solid Crew',
      venue: venues[2],
      comments: [{
        text: 'Need players asap',
        rating: 5
      }]
    },{
      name: 'Le Saux Solid Crew',
      venue: venues[2],
      comments: [{
        text: 'Need players asap',
        rating: 5
      }]
    },{
      name: 'Le Saux Solid Crew',
      day: 'Wednesday',
      format: '7-a-side',
      venue: venues[2],
      comments: [{
        text: 'Need players asap',
        rating: 5
      }]
    },{
      name: 'Le Saux Solid Crew',
      day: 'Wednesday',
      format: '7-a-side',
      venue: venues[2],
      comments: [{
        text: 'Need players asap',
        rating: 5
      }]
    },{
      name: 'Le Saux Solid Crew',
      day: 'Wednesday',
      format: '7-a-side',
      venue: venues[2],
      comments: [{
        text: 'Need players asap',
        rating: 5
      }]
    }]);
  })
  .then(teams => console.log(`${teams.length} teams created!`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
