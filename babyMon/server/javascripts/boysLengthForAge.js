var Promise = require('bluebird');
// var fs = Promise.promisifyAll(require('fs'));
var fs = require('fs');
var _ = require('underscore');
var mongoose = require('mongoose');


var resultsArray = [];
var boysLengthForAge;
    
fs.readFile(__dirname + '/../GrowthTables/boysLengthForAge.txt', 'utf8', function(err, data) { 
  if (err) {
    console.log(err, 'an error occured');
  } else {
    data = data.split('\n');
    resultsArray = _.map(data, function(row) {
      var rows = row.split(' ');
      // console.log(rows);
      return rows;
    });
    mongoose.connect('mongodb://localhost/MVP');
    var db = mongoose.connection;

    var schema = {};
    _.each(resultsArray[0], function(value) {
      schema[value] = 'Number';
    });

    var boysLengthForAgeSchema = new mongoose.Schema(schema);
    boysLengthForAge = mongoose.model('boysLengthForAge', boysLengthForAgeSchema);
  }
});


var findPercentile = function(data, columnName, height) {
  console.log('in findPercentile');
  var index = 0;
  for (var i = 0; i < data.length; i++) {
    if (height > data[i]) {
      index++;
    } else {
      var result = 'Between ' + columnName[index] + ' and ' + columnName[index + 1] + ' percentile';
      console.log(result);
      return result;
    }
  }
};
  
var querydb = function(query, height) {
  var result;
  return boysLengthForAge.findOne(query).exec()
  .then(function(data) {
    console.log('in querydb');
    var columnName = ['Month', '2nd', '5th', '10th', '25th', '50th', '75th', '90th', '95th', '98th'];
    var valArray = [];
    for (var i = 1; i < columnName.length; i++) {
      valArray.push(data[columnName[i]]);
    }
    console.log(valArray);
    result = findPercentile(valArray, columnName, height);
    return result;
  });

};



exports.querydb = querydb;

