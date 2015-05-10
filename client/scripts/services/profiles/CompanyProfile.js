exports.inject = function (app) {

  app.factory('CompanyProfile', exports.factory);
  return exports.factory;
};

exports.factory = function ($http) {

  var profile = {},
    _urls = {
      'loadl': '',
      'save': ''
    };

  return {

    'loadProfile': function loadProfile() {

    },
    'saveProfile': function saveProfile(prof) {

      var newProfile = {

        'general': {
          'companyName': '',
          'phoneNumber': [],
          'faxNumber': [],
          'website': '',
          'emails': [],
          'address': ''
        },
        'media': {
          'photos': [],
          'videos': [],
          'socialMedia': [],
          'other': []
        },
        'productMaterial': {
          'ledCatalogs': [],
          'lampCatalogs': [],
          'productCheckBox': [],
          'others': []
        },
        'additional': {
          'factorySize': 0,
          'employeeNumber': 0,
          'establishmentYear': 0,
          'revenue': '',
          'dbInformation': '',
          'DUNS': ''
        },
        'accounts': {
          'adminIds': [],
          'employeeIds': []
        },
        _id:''
      };

      //Make call to save profile

    },
    'getProfile': function getProfile() {

      return profile;

    }

  };


};
