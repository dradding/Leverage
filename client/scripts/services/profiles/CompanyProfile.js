exports.inject = function (app) {
  app.factory('CompanyProfile', exports.factory);
  return exports.factory;
};

exports.factory = function ($http) {

var _profile = {},

  _urls = {
    addProfile: '/api/add/company'
  },

  generateCompanyRecord = function generateCompanyRecord() {

    $http.post(_urls.addProfile, JSON.stringify(_profile)).

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


  };

  return {
    'init': function init(profile) {

      _profile = JSON.parse(JSON.stringify(profile));

      generateCompanyRecord();

    }
  }

};



//{
//
//  'general': {
//  'companyName': '',
//    'phoneNumber': [],
//    'faxNumber': [],
//    'website': '',
//    'emails': [],
//    'address': ''
//},
//  'media': {
//  'photos': [],
//    'videos': [],
//    'socialMedia': [],
//    'other': []
//},
//  'productMaterial': {
//  'ledCatalogs': [],
//    'lampCatalogs': [],
//    'productCheckBox': [],
//    'others': []
//},
//  'additional': {
//  'factorySize': 0,
//    'employeeNumber': 0,
//    'establishmentYear': 0,
//    'revenue': '',
//    'dbInformation': '',
//    'DUNS': ''
//},
//  'accounts': {
//  'adminIds': [],
//    'employeeIds': []
//},
//  _id:''
//}
