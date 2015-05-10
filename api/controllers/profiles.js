'use strict';

var mongoose = require('mongoose'),
  Profile = mongoose.model('Profile');

exports.all = function (req, res) {
  Profile.find({}, function (err, profiles) {
    if (err) {
      res.send(400);
    }
    res.send(profiles);
  });
};

exports.add = function (req, res) {

  console.log('Request body', req.body);
  var prof = new Profile({
    info: {
      name: req.body.info.name,
      email: req.body.info.email,
      password: req.body.info.password,
      company: req.body.info.company
    },
    _id: req.body._id,
    type: req.body.type
  });

  console.log('Object to be stored ', prof);

  prof.save(function (err) {
    if (err) {
      console.log('Error saving prof');
      res.send(400);
    }
    console.log('Successfully added a prof');
    res.send(200);
  });

};

exports.get = function (req, res) {

  Profile.findOne({_id: req.body._id}, function (err, profile) {
    if (err) {
      res.send(400);
    }

    console.log('profile found', profile);
    res.send(profile);
  });
};
