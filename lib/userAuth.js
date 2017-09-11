const User = require('../models/user');

function userAuth(req, res, next) {
  if(!req.session.userId) return next(); // if we dont find user id - move on
  User                                   // if we do find user - do this stuff
    .findById(req.session.userId)
    .then(user => {
      res.locals.isAuthenticated = true;
      res.locals.currentUser = user;
      req.currentUser = user;

      next();
    });
}

module.exports = userAuth;
