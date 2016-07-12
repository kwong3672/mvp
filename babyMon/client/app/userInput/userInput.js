angular.module('userInput', [])
  .controller('UserInputController', function($scope) {
    // create array for possible ages
    var measurements = {};
    $scope.ageRange = [];
    for (var i = 1; i < 25; i++) {
      $scope.ageRange.push(i);
    }

    $scope.weightRange = [];
    for (var i = 4; i < 36; i++) {
      $scope.weightRange.push(i);
    }

    $scope.heightRange = [];
    for (var i = 4; i < 50; i++) {
      $scope.heightRange.push(i);

    }

    $scope.genderSelect = function(gender) {
      console.log('gender has been selected: ', gender);
      $scope.displayGender = 'Gender: ' + gender;
      measurements.gender = gender;
    };

    $scope.ageSelect = function(age) {
      console.log('age has been selected: ', age);
      $scope.displayAge = 'Age (months): ' + age;
      measurements.age = age;
    };

    $scope.weightSelect = function(weight) {
      console.log('weight has been selected: ', weight);
      $scope.displayWeight = 'Weight (lbs): ' + weight;
      measurements.weight = weight;
    };

    $scope.heightSelect = function(height) {
      console.log('length has been selected: ', height);
      $scope.displayHeight = 'Height (inches): ' + height;
      measurements.height = height;
    };

    var getHeightByAgeResult = '';
    $scope.getDataHeightByAge = function(heightByAge) {

      var stringified = JSON.stringify(measurements);

      $.ajax({
        url: 'http://127.0.0.1:3000/boysLengthForAge/',
        method: 'POST',
        contentType: 'application/json',
        data: stringified,
        success: function(res) {
          getHeightByAgeResult = res;
        },
        error: function(error) {
          console.log('error line 62', error);
          console.log('this is the error object', error.responseText);
        }

      });
      $scope.heightByAge = getHeightByAgeResult;
    };
  });