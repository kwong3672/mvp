var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var _ = require('underscore');
var mongoose = require('mongoose');

exports.initialize = function() {
  console.log('===============running initial function =======================');
// initialize the database with information or any other code needed
// only need to run one time
// creating mongoose tables from txt files
  var convertTables = function (chartName) {
    var resultsArray = [];
    fs.readFileAsync('./GrowthTables/' + chartName + '.txt', 'utf8').then(function(data) {
      resultsArray = data.split('\n');
      resultsArray = _.map(resultsArray, function (row) {
        var rows = row.split(' ');
        return rows;
      });

      mongoose.connect('mongodb://localhost/MVP');
      var db = mongoose.connection;

      db.on('error', console.error);
      db.once('open', function() {

        var schema = {};
        _.each(resultsArray[0], function(value) {
          schema[value] = 'Number';
        });

        var schemaName = chartName + 'Schema';
        schemaName = new mongoose.Schema(schema);

        for (var i = 1; i < resultsArray.length; i++) {
          var obj = {};
          for (var j = 0; j < resultsArray[i].length; j++) {
            obj[resultsArray[0][j]] = resultsArray[i][j];
          }

          var boysWeightForLength = mongoose.model('boysWeightForLength', schemaName);
          new boysWeightForLength(obj).save(function(err, doc) {
            if (err) { 
              console.log('error writing mongodb'); 
            } else {
              console.log('successfully wrote to mongodb');
            }
          });
        }
        
      });


    });
  };


  // created tables for each...  commenting out so do not keep trying to create dbs
  // convertTables('boysLengthForAge');
  // convertTables('boysWeightForAge');
  // convertTables('boysWeightForLength');


};
