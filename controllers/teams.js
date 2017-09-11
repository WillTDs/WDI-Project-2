const Team = require('../models/team');
const Venue = require('../models/venue');

function teamsIndex(req, res) {
  Team
    .find()
    .populate('venue')
    .exec()
    .then((teams) =>{
      res.render('teams/index', { teams });
    })
    .catch((err) =>{
      res.status(500).render('error', { err });
    });
}

function teamsShow(req, res) {
  Team
    .findById(req.params.id)
    .populate('venue')
    .exec()
    .then(team => {
      res.render('teams/show', { team });
    })
    .catch(err => res.render('error', { err }));
}

function teamsNew(req, res) {
  Venue
    .find()
    .exec()
    .then((venues) =>{
      res.render('teams/new', { venues });
    })
    .catch((err) =>{
      res.status(500).render('error', { err });
    });
}

function teamsCreate(req, res) {
  Team
    .create(req.body)
    .then(() => res.redirect('/teams'))
    .catch(err => res.render('error', { err }));
}

function teamsEdit(req, res) {
  Team
    .findById(req.params.id)
    .populate('venue')
    .exec()
    .then((team) => {
      if(!team) return res.status(404).send('Not found');
      return Venue
        .find()
        .exec()
        .then((venues) => {
          res.render('teams/edit', { team, venues });
        });
    })
    .catch((err) => {
      res.status(500).render('error', { err });
    });
}

function teamsUpdate(req, res) {
  Team
    .findById(req.params.id)
    .exec()
    .then(team => {
      team = Object.assign(team, req.body);
      return team.save();
    })
    .then(team => res.redirect(`/teams/${team.id}`))
    .catch(err => res.render('error', { err }));
}

function teamsDelete(req, res) {
  Team
    .findById(req.params.id)
    .exec()
    .then(team => {
      return team.remove();
    })
    .then(() => res.redirect('/teams'))
    .catch(err => res.render('error', { err }));
}

function teamsCommentsCreate(req, res) {
  Team
    .findById(req.params.id)
    .exec()
    .then(team => {
      team.comments.push(req.body);
      return team.save();
    })
    .then(team => res.redirect(`/teams/${team.id}`))
    .catch(err => res.render('error', { err }));
}

function teamsCommentsDelete(req, res) {
  Team
    .findById(req.params.id)
    .exec()
    .then(team => {
      const comment = team.comments.id(req.params.commentId);
      comment.remove();
      return team.save();
    })
    .then(team => res.redirect(`/teams/${team.id}`))
    .catch(err => res.render('error', { err }));
}

module.exports = {
  index: teamsIndex,
  show: teamsShow,
  new: teamsNew,
  create: teamsCreate,
  edit: teamsEdit,
  update: teamsUpdate,
  delete: teamsDelete,
  commentsCreate: teamsCommentsCreate,
  commentsDelete: teamsCommentsDelete
};
