var app = angular.module('babyMon', ['ngRoute', 'userInput'])

  .config(function ($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/userInput/userInput.html',
        controller: 'UserInputController',
      })
      // .when('/signup', {
      //   templateUrl: 'app/auth/signup.html',
      //   controller: 'AuthController',
      // })    
      .otherwise({
        templateUrl: 'app/',
        controller: 'LinksController',
      }); 
  });