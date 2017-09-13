const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const Team = require('../models/team');
const User = require('../models/user');
const Venue = require('../models/venue');

const { dbURI } = require('../config/environment');
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
      pitch: 'Grass Pitch',
      format: '5-A-SIDE',
      day: 'Thursday',
      address: 'Rokerby School, Barking Road, E16 4DD',
      image: '/assets/images/canaryWharf.png',
      location: {
        lat: 51.5186123,
        lng: 0.0134932
      }
    }, {
      name: 'Stratford',
      pitch: 'Grass Pitch',
      format: '7-A-SIDE',
      day: 'Thursday',
      address: 'Chobham Academy, 40 Cheering Lane, E20 1BD',
      image: '/assets/images/stratford.png',
      location: {
        lat: 51.5493111,
        lng: 0.0094444
      }
    }, {
      name: 'Liverpool St',
      pitch: 'Grass Pitch',
      format: '5-A-SIDE',
      day: 'Sunday',
      address: 'Bow School, Rooftop pitch, E3 3QW',
      image: '/assets/images/liverpoolStreet.png',
      location: {
        lat: 51.5234183,
        lng: -0.0117561
      }
    }, {
      name: 'Caledonian Rd',
      pitch: 'Astroturf Pitch',
      format: '7-A-SIDE',
      day: 'Thursday',
      address: 'Holloway School, Caledonian Road, N7 0EQ',
      image: '/assets/images/caledonianRoad.png',
      location: {
        lat: 51.5574908,
        lng: -0.1411286
      }
    }, {
      name: 'Vauxhall',
      pitch: 'Grass Pitch',
      format: '5-A-SIDE',
      day: 'Sunday',
      address: 'Vauxhall rhino turf, Lollard Street, SE11 6PX',
      image: '/assets/images/vauxhall.png',
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
      color: '#3696ff',
      venues: [venues[0]],
      statuses: [{
        text: 'Need 1 more player'
      }]
    },{
      name: 'Petr Cech Yourself',
      color: '#F1C40F',
      venues: [venues[0]],
      statuses: [{
        text: 'Full roster'
      }]
    },{
      name: 'Haven’t Got a Kalou',
      color: '#A93226',
      venues: [venues[0], venues[2]],
      statuses: [{
        text: 'Looking for 1 player'
      }]
    },{
      name: 'We Arbeloa Lot of Teams',
      color: '#212F3C',
      venues: [venues[0], venues[2]],
      statuses: [{
        text: 'We\'re folding. Dont bother'
      }]
    },{
      name: 'Murder On Zidane’s Floor',
      color: '#FF0000',
      venues: [venues[0], venues[2]],
      statuses: [{
        text: 'Need 2 players'
      }]
    },{
      name: 'Don’t Call Me Schürrle',
      color: '#ffffff',
      venues: [venues[0], venues[2]],
      statuses: [{
        text: 'Need players asap'
      }]
    },{
      name: 'Beat Around Debuchy',
      color: '#F1C40F',
      venues: [venues[1], venues[4]],
      statuses: [{
        text: 'Looking for a player'
      }]
    },{
      name: 'Lallanas in Pyjamas',
      color: '#3696ff',
      venues: [venues[1], venues[4]],
      statuses: [{
        text: 'Need players asap'
      }]
    },{
      name: '50 Shades O’Shea',
      color: '#212F3C',
      venues: [venues[1], venues[4]],
      statuses: [{
        text: 'We\'re full'
      }]
    },{
      name: 'One Flew Over Lukaku’s Nest',
      color: '#FF0000',
      venues: [venues[1], venues[4]],
      statuses: [{
        text: 'full now'
      }]
    },{
      name: 'Bayer Neverlusen',
      color: '#ffffff',
      venues: [venues[2], venues[3]],
      statuses: [{
        text: 'Need 2 players'
      }]
    },{
      name: 'Chiellini Con Carne',
      color: '#3696ff',
      venues: [venues[2], venues[3]],
      statuses: [{
        text: 'Need players asap'
      }]
    },{
      name: 'Ospina Colada',
      color: '#F1C40F',
      venues: [venues[2], venues[3]],
      statuses: [{
        text: 'Its only me. Dunno why i bother'
      }]
    },{
      name: 'Kroos Control',
      color: '#FF0000',
      venues: [venues[3], venues[4]],
      statuses: [{
        text: 'Need more players'
      }]
    },{
      name: 'Gylfi Pleasures',
      color: '#3696ff',
      venues: [venues[3], venues[4]],
      statuses: [{
        text: 'Need 1 or 2 more'
      }]
    },{
      name: 'Boom Xhakalaka',
      color: '#A93226',
      venues: [venues[3], venues[4]],
      statuses: [{
        text: 'Need players'
      }]
    },{
      name: 'Pleased to Michu',
      color: '#F1C40F',
      venues: [venues[3], venues[2]],
      statuses: [{
        text: 'Want another player'
      }]
    },{
      name: 'Obi Wan – Kenobi Nil',
      color: '#3696ff',
      venues: [venues[3], venues[4]],
      statuses: [{
        text: 'We gonna quit'
      }]
    }]);
  })
  .then(teams => console.log(`${teams.length} teams created!`))
  .catch((err) => console.log(err))
  .finally(() => mongoose.connection.close());
