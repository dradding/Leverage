'use strict';

var mongoose = require('mongoose'),
  Company = mongoose.model('CompanyProfile');

exports.all = function (req, res) {
  Company.find({}, function (err, profiles) {
    if (err) {
      res.send(400);
    }

    console.log('Search worked');

    res.send(profiles);
  });
};


exports.addCompany = function (req, res) {

  //name: String,
  //  users: {
  //  admin: [String],
  //    normal: [String]
  //}

  console.log('YOU MADE IT TO ADD COMPANY');

  Company.find({name: req.body.name}, function (err, profile) {
    if (err) {
      console.log('Err');
      res.send(400);
    }

    console.log('profile', profile);

    console.log('Profile length', profile.length);

    if (profile.length === 0) {

      var company = new Company({
        name: req.body.name
      });

      console.log('Company to be stored.', company);

      company.save(function (err) {

        if (err) {
          console.log('Error saving..');
          res.send(400);
        }
      });
    } else {
      console.log('Company already exists');
    }

    res.send(200).end();
  });

};

exports.addUser = function (req, res) {

  //{
  //  id: String
  //  type: String
  //  company: String
  //}

  //ex:
  //  var updateData = {
  //    name: req.body.name
  //  };
  //User.update({_id: user._id},updateData, function(err,affected) {
  //  console.log('affected rows %d', affected);
  //});

  var user = {
    company: 'Company1',
    type: 'Admin',
    id: 'asdasd'
  };

  console.log('Call was made');

  if (user.type === 'Admin') {

    Company.findOneAndUpdate({name: user.company},
      {$push: {'users.admin': user.id}},
      {safe: true, upsert: true},
      function (err, model) {
        console.log(err);
        console.log(model);
      });

  }

};

exports.add = function (req, res) {

  //name: String,
  //  users: {
  //  admin: [String],
  //    normal: [String]
  //}

  var prof = new Profile({
    name: req.body.name,
    users: {
      admin: req.body.admin
    }
  });

  prof.save(function (err) {
    if (err) {
      console.log('Error saving prof');
      res.send(400);
    }
    console.log('Successfully added a prof');
    res.send(200);
  });

};


