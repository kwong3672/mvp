var express = require('express');
var app = express();
// var Promise = require('bluebird');
// var fs = Promise.promisifyAll(require('fs'));
var fs = require('fs');
var _ = require('underscore');
var mongoose = require('mongoose');
// var path = require('path');
var bodyParser = require('body-parser');

var boysLengthForAge = require('./javascripts/boysLengthForAge.js');
var boysWeightForAge = require('./javascripts/boysWeightForAge.js');


// var init = require('./javascripts/init.js');


var port = 3000;
app.use(express.static(__dirname + '/../client'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', function (req, res) {
  res.render('index');
});

app.post('/boysLengthForAge/', function(req, res) {
  var age = req.body.age;
  // values found only were in cm, need to convert to inches
  var height = req.body.height * 2.54;
  boysLengthForAge.querydb({Month: age}, height).then(function(data) {
    res.send(data);
  });
});

app.post('/boysWeightForAge/', function(req, res) {
  var age = req.body.age;
  // convert weight from kg to lbs
  var weight = req.body.weight * 0.453592;
  boysWeightForAge.querydb({Month: age}, weight).then(function(data) {
    res.send(data);
  });
});

// app.post('/boysWeightForLength/', function(req, res) {
//   var length = req.body.length * 2.54;
//   // convert weight from kg to lbs
//   var weight = req.body.weight * 0.453592;
//   boysWeightForAge.querydb({Length: }, weight).then(function(data) {
//     res.send(data);
//   });
// });

app.post('/meals/', function(req, res) {

});

app.get('/meals/', function(req, res) {

});

app.post('/sleep/', function(req, res) {

});

app.listen(port, function() {
  console.log('Server running on port: ', port);
});




