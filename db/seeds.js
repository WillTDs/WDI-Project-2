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
    console.log(`${venues.length} venues created`);
    return Team.create([{
      name: 'FC Twente Bensons',
      venue: venues[0, 2],
      comments: [{
        text: 'Need players asap',
        rating: 5
      }]
    },{
      name: 'Petr Cech Yourself',
      venue: venues[0, 2],
      comments: [{
        text: 'Need players asap',
        rating: 5
      }]
    },{
      name: 'Haven’t Got a Kalou',
      venue: venues[0, 2],
      comments: [{
        text: 'Need players asap',
        rating: 5
      }]
    },{
      name: 'We Arbeloa Lot of Teams',
      venue: venues[0, 2],
      comments: [{
        text: 'Need players asap',
        rating: 5
      }]
    },{
      name: 'Murder On Zidane’s Floor',
      venue: [venues[0], venues[2]],
      comments: [{
        text: 'Need players asap',
        rating: 5
      }]
    },{
      name: 'Don’tCallMeSchürrle',
      venue: [venues[0], venues[2]],
      comments: [{
        text: 'Need players asap',
        rating: 5
      }]
    },{
      name: 'Beat Around Debuchy',
      venue: [venues[1], venues[4]],
      comments: [{
        text: 'Need players asap',
        rating: 5
      }]
    },{
      name: 'Lallanas in Pyjamas',
      venue: [venues[1], venues[4]],
      comments: [{
        text: 'Need players asap',
        rating: 5
      }]
    },{
      name: '50 Shades O’Shea',
      venue: [venues[1], venues[4]],
      comments: [{
        text: 'Need players asap',
        rating: 5
      }]
    },{
      name: 'One Flew Over Lukaku’s Nest',
      venue: [venues[1], venues[4]],
      comments: [{
        text: 'Need players asap',
        rating: 5
      }]
    },{
      name: 'Bayer Neverlusen',
      venue: [venues[2], venues[3]],
      comments: [{
        text: 'Need players asap',
        rating: 5
      }]
    },{
      name: 'Chiellini Con Carne',
      venue: [venues[2], venues[3]],
      comments: [{
        text: 'Need players asap',
        rating: 5
      }]
    },{
      name: 'Ospina Colada',
      venue: [venues[2], venues[3]],
      comments: [{
        text: 'Need players asap',
        rating: 5
      }]
    },{
      name: 'Kroos Control',
      venue: [venues[3], venues[4]],
      comments: [{
        text: 'Need players asap',
        rating: 5
      }]
    },{
      name: 'Gylfi Pleasures',
      venue: [venues[3], venues[4]],
      comments: [{
        text: 'Need players asap',
        rating: 5
      }]
    },{
      name: 'Boom Xhakalaka',
      venue: [venues[3], venues[4]],
      comments: [{
        text: 'Need players asap',
        rating: 5
      }]
    },{
      name: 'Pleased to Michu',
      venue: [venues[3], venues[2]],
      comments: [{
        text: 'Need players asap',
        rating: 5
      }]
    },{
      name: 'Obi Wan – Kenobi Nil',
      venue: [venues[3], venues[4]],
      comments: [{
        text: 'Need players asap',
        rating: 5
      }]
    }]);
  })
  .then(teams => console.log(`${teams.length} teams created!`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
