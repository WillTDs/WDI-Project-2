const express = require('express');
const router = express.Router();

const teams = require('../controllers/teams');
const venues = require('../controllers/venues');
const registrations = require('../controllers/registrations');
const sessions = require('../controllers/sessions');
const statuses = require('../controllers/statuses');
const users = require('../controllers/users');
const secureRoute = require('../lib/secureRoute');

router.get('/', (req, res) => res.render('home'));

router.route('/venues')
  .get(venues.index);

router.route('/venues/:id')
  .get(venues.show);

router.route('/teams')
  .get(teams.index)
  .post(teams.create);

router.get('/teams/new', teams.new);

router.route('/teams/:id')
  .get(teams.show)
  .put(teams.update)
  .delete(teams.delete);

router.get('/teams/:id/edit', teams.edit);

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.route('/users/:id')
  .get(users.show)
  .put(secureRoute, users.update)
  .delete(secureRoute, users.delete);

router.route('/users/:id/edit')
  .get(secureRoute, users.edit);

router.route('/teams/:id/comments')
  .post(teams.commentsCreate);

router.route('/teams/:id/comments/:commentId')
  .delete(teams.commentsDelete);

router.route('/teams/:id/statuses')
  .post(statuses.create);

router.route('/teams/:id/statuses/:statusId')
  .delete(statuses.delete);

router.get('/logout', sessions.delete);

module.exports = router;
