exports.inject = function (app) {
  app.factory('UserProfile', exports.factory);
  return exports.factory;
};

exports.factory = function ($http) {

  var _profile = {},

    _urls = {
      saveProfile: '/api/saveprofile',
      getProfile: '/api/get/profile'
    },

  //Will check whether all the components necessary to create
  //The profile are present.
    _validateProfile = function validateProfile(profile) {

      return profile && profile.info && profile.info.name &&
        profile.info.email && profile.info.password &&
        profile.info.company && profile._id && profile.type;

    },

  //Populate object with profile info
    _populateProfile = function populateProfile(profile) {

      console.log('profile', profile);

      _profile = JSON.parse(JSON.stringify(profile));

    },

  //Save profile to database
    _saveProfile = function saveProfile() {

      $http.post(_urls.saveProfile, JSON.stringify(_profile)).

        success(function (data, status, headers, config) {

          if (data.error || data === null) {
            console.log("Error occured or data is null");
            console.log('Error', data.error);
          }

          console.log('Profile stored to database successfully');
          console.log('data', data);
          console.log('status', status);
        }).
        error(function (data, status, headers, config) {

          console.log('Error occured while storing profile to database');
          console.log('data', data);
          console.log('status', status);

        });

    },

    //Load profile from database based on _id
    _loadProfile = function loadProfile(_id) {

      $http.post(_urls.getProfile, {_id: id}).
        success(function (data) {

          if (data.error || data === null) {
            console.log("Error occured or data is null");
            console.log('Error', data.error);
          }

          storeData(data);

        }).
        error(function (data, status) {

          console.log('Error occured while storing profile to database');
          console.log('data', data);
          console.log('status', status);

        });


    };

  return {

    //generates a new profile
    'init': function init(profile) {
      if (!_validateProfile(profile)) {
        console.log(profile);
        console.log(new Error('profile information missing'));
        return;
      }
      _populateProfile(profile);
      _saveProfile();
    },
    //returns the profile.
    'getProfile': function getProfile() {
      return JSON.parse(JSON.stringify(_profile));
    }
  };

};
