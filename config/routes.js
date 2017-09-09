const express = require('express');
const router = express.Router();

const teams = require('../controllers/teams');

router.get('/', (req, res) => res.render('home'));

router.route('/teams')
  .get(teams.index);

module.exports = router;
