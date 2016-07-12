var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var _ = require('underscore');
var mongoose = require('mongoose');


var resultsArray = [];
var boysLengthForAge = fs.readFileAsync('./GrowthTables/boysLengthForAge.txt', 'utf8').then(function(data) {
  resultsArray = data.split('\n');
  resultsArray = _.map(resultsArray, function (row) {
    var rows = row.split(' ');
    return rows;
  });
});

