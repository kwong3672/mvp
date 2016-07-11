var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var _ = require('underscore');
var mongoose = require('mongoose');

exports.initialize = function() {
  console.log('===============running initial function =======================');
  // initialize the database with information or any other code needed
};
