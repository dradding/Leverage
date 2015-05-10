exports.inject = function(app) {
  app.controller('SignupCtrl', exports.controller);
  return exports.controller;
};

exports.controller = function($scope, Auth, UserProfile) {

  $scope.companyOptions = [
    {'name': 'Company1', id:1},
    {'name': 'Company2', id:2},
    {'name': 'Company3', id:3},
    {'name': 'Company4', id:4},
    {'name': 'Company5', id:5}
  ];

  $scope.companySelected = $scope.companyOptions[0];

  $scope.name = '';
  $scope.password = '';
  $scope.email = '';

  $scope.changed = function() {
    console.log($scope.companySelected);
  };

  $scope.registerUser = function() {

    Auth.signup({
      email: $scope.email,
      password: $scope.password
    }).success(function(data) {
      console.log(data);
      if(data.error) {
        console.log('Error signing up');
        console.log(data.errors);
      } else {
        Auth.setLoggedIn(true);
        console.log('signed up');
        console.log(data);

        var profile = {
          'info': {
            'name': $scope.name,
            'email': data.user.local.email,
            'password': data.user.local.password,
            'company': $scope.companySelected.name
          },
          'type': 'Admin',
          '_id': data.user._id
        };


        UserProfile.init(profile);

        //UserProfile.createProfile(user);
        //
        //UserProfile.loadProfile(user._id);

        //window.location.href = '/dashboard';

      }
    });

  };

};

