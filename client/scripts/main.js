'use strict';

require('angular');

var uiRoute = require('angular-ui-router');
var app = angular.module('MyApp', [uiRoute]);

require('./services/Auth').inject(app);
require('./services/profiles/UserProfile').inject(app);
require('./services/profiles/Profile').inject(app);
require('./directives/ExampleDirective').inject(app);

app.config(function ($locationProvider, $stateProvider) {

  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'views/home.html',
      controller: require('./controllers/ExampleCtrl').inject(app)
    })
    .state('second', {
      url: '/second-page',
      controller: require('./controllers/ExampleCtrl').inject(app),
      templateUrl: 'views/secondary.html'
    })
    .state('signup', {
      url: '/register',
      controller: require('./controllers/SignupCtrl').inject(app),
      templateUrl: 'views/signup.html'
    })
    .state('Dashboard',{
      url:'/dashboard',
      controller: require('./controllers/DashboardCtrl').inject(app),
      templateUrl: 'views/dashboard.html'
    });

});

app.run();
