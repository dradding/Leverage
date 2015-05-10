var mongoose = require('mongoose');

// define the schema for our user model
var ProfileSchema = mongoose.Schema({
  'info': {
    'name': String,
    'email': String,
    'password': String,
    'company': String
  },
  'type': String,
  '_id': String
});

// methods ======================

// ========
module.exports = mongoose.model('Profile', ProfileSchema);
