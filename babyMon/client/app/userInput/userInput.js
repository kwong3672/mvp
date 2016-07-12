angular.module('userInput', [])
  .controller('UserInputController', function($scope) {
    // create array for possible ages
    $scope.ageRange = [];
    for (var i = 1; i < 25; i++) {
      $scope.ageRange.push(i);
    }

    $scope.genderSelection = function(gender) {
      console.log('gender has been selected: ', gender);
      $scope.displayGender = 'Gender: ' + gender;
    };

    $scope.ageSelection = function(age) {
      console.log('age has been selected: ', age);
      $scope.displayAge = 'Age: ' + age;
    }
  });