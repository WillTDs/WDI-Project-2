const Team = require('../models/team');

function teamsIndex(req, res) {
  Team
    .find()
    .exec()
    .then((teams) =>{
      res.render('teams/index', {teams});
    })
    .catch((err) =>{
      res.status(500).render('error', { err });
    });
}

module.exports = {
  index: teamsIndex
};
