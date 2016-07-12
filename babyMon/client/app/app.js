var app = angular.module('babyMon', ['ngRoute', 'userInput'])

  .config(function ($routeProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/userInput/userInput.html',
        controller: 'UserInputController'
      })
      .when('/meals/', {
        templateUrl: 'app/meals/meals.html',
        controller: 'MealsController'
      })
      .when('/sleep/', {
        templateUrl: 'app/sleep/sleep.html',
        controller: 'SleepController'
      })
      .when('/other/', {
        templateUrl: 'app/userInput/userInput.html',
        controller: 'UserInputController'
      });
      // .otherwise({
      //   templateUrl: 'app/userInput/userInput.html',
      //   controller: 'UserInputController'
      // }); 
  });