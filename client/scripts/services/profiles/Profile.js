exports.inject = function(app) {
  app.factory('Profile', exports.factory);
  return exports.factory;
};

exports.factory = function() {

  var profile = {};


  return {

    createProfile: function createProfile(data) {

    }

  };

};
