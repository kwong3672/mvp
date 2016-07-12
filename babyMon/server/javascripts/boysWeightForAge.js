var Promise = require('bluebird');
// var fs = Promise.promisifyAll(require('fs'));
var fs = require('fs');
var _ = require('underscore');
var mongoose = require('mongoose');

var resultsArray = [];
var boysLengthForAge;
    
fs.readFile(__dirname + '/../GrowthTables/boysWeightForAge.txt', 'utf8', function(err, data) { 
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


    var boysWeightForAgeSchema = new mongoose.Schema(schema);
    boysWeightForAge = mongoose.model('boysWeightForAge', boysWeightForAgeSchema);
  }
});
  
var querydb = function(query, weight) {
  boysWeightForAge.findOne(query).exec()
  .then(function(data) {
    var result = data;
    console.log(result);
  });
};

var findPercentile = function(data, weight) {
  console.log(data);
};


exports.querydb = querydb;