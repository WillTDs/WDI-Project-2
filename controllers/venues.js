const Venue = require('../models/venue');
const Team = require('../models/team');

function venuesIndex(req, res) {
  Venue
    .find()
    .exec()
    .then((venues) =>{
      res.render('venues/index', { venues });
    })
    .catch((err) =>{
      res.status(500).render('error', { err });
    });
}

function venuesShow(req, res) {
  Venue
    .findById(req.params.id)
    .populate('venue')
    .exec()
    .then(venue => {
      return Team
        .find({ venue: venue })
        .exec()
        .then((teams) => {
          res.render('venues/show', { venue, teams });
        });
    })
    .catch(err => res.render('error', { err }));
}

function venuesNew(req, res) {
  res.render('venues/new');
}

function venuesCreate(req, res) {
  Venue
    .create(req.body)
    .then(() => res.redirect('/venues'))
    .catch(err => res.render('error', { err }));
}

function venuesEdit(req, res) {
  Venue
    .findById(req.params.id)
    .exec()
    .then(venue => res.render('venues/edit', { venue }))
    .catch(err => res.render('error', { err }));
}

function venuesUpdate(req, res) {
  Venue
    .findById(req.params.id)
    .exec()
    .then(venue => {
      venue = Object.assign(venue, req.body);
      return venue.save();
    })
    .then(venue => res.redirect(`/venues/${venue.id}`))
    .catch(err => res.render('error', { err }));
}

function venuesDelete(req, res) {
  Venue
    .findById(req.params.id)
    .exec()
    .then(venue => {
      return venue.remove();
    })
    .then(() => res.redirect('/venues'))
    .catch(err => res.render('error', { err }));
}

module.exports = {
  index: venuesIndex,
  show: venuesShow,
  new: venuesNew,
  create: venuesCreate,
  edit: venuesEdit,
  update: venuesUpdate,
  delete: venuesDelete
};
