const Team = require('../models/team');

function teamsStatusesCreate(req, res) {
  Team
    .findById(req.params.id)
    .exec()
    .then(team => {
      team.statuses.push(req.body);
      return team.save();
    })
    .then(team => res.redirect(`/teams/${team.id}`))
    .catch(err => res.render('error', { err }));
}

function teamsStatusesDelete(req, res) {
  Team
    .findById(req.params.id)
    .exec()
    .then(team => {
      const status = team.statuses.id(req.params.statusId);
      status.remove();
      return team.save();
    })
    .then(team => res.redirect(`/teams/${team.id}`))
    .catch(err => res.render('error', { err }));
}

module.exports = {
  create: teamsStatusesCreate,
  delete: teamsStatusesDelete
};
