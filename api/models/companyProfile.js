var mongoose = require('mongoose');

var CompanyProfileSchema = mongoose.Schema({
  name: String,
  users: {
    admin: [String],
    normal: [String]
  }
});

module.exports = mongoose.model('CompanyProfile', CompanyProfileSchema);
