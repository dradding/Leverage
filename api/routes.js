'use strict';

module.exports = function(app, passport) {

  var users = require('./controllers/users'),
    profiles = require('./controllers/profiles'),
    company = require('./controllers/companyProfile');

  // Example API call with isLoggedIn middleware
  app.get('/api/users', isLoggedIn, users.all);

  app.post('/api/saveprofile', profiles.add);
  app.post('/api/get/profile', profiles.get);

  app.get('/api/profiles', profiles.all);

  // Sign up route
  app.post('/api/signup', passport.authenticate('local-signup', {
    successRedirect : '/api/signup/success',
    failureRedirect : '/api/signup/error',
    failureFlash : true
  }));
  app.get('/api/signup/error', function(req, res) {
    res.send(401, {error: req.flash('signupMessage')});
  });
  app.get('/api/signup/success', function(req, res) {
    res.send(200, {user: req.user});
  });

  //company profiles
  app.get('/api/get/all/companies', company.all);
  app.post('/api/add/company', company.addCompany);
  app.get('/api/add/company/user', company.addUser);


  // Log in route
  app.post('/api/login', passport.authenticate('local-login', {
    successRedirect : '/api/login/success',
    failureRedirect : '/api/login/error',
    failureFlash : true
  }));
  app.get('/api/login/error', function(req, res) {
    res.send(401, {error: req.flash('loginMessage')});
  });
  app.get('/api/login/success', function(req, res) {
    res.send(200, {user: req.user});
  });

};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
  // if user is authenticated in the session, carry on
  if (req.isAuthenticated())
    return next();

  // if they aren't redirect them to the home page
  res.redirect('/');
}
