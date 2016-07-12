angular.module('meals', [])
  .controller('MealsController', function($scope) {
    $scope.food = '';
    $scope.qty = '';

    $scope.submit = function() {
      $.ajax({
        url: 'http://127.0.0.1:3000/food/',
        method: 'POST',
        contentType: 'application/json',
        dataType: 'json',
        data: 'some stringified object',
        success: function(data) {
          console.log('success', data);
        },
        error: function(error) {
          console.log('error', error);
        }
      });
    };
  });