exports.inject = function(app) {

  app.controller('OptionalInfoCtrl', exports.controller);
  return exports.controller;
};

exports.controller = function($rootScope, $scope, UserProfile) {



};
