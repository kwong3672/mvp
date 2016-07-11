var express = require('express');
var app = express();
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));
var _ = require('underscore');
var mongoose = require('mongoose');


var init = require('./javascripts/init.js');


var port = 3000;
app.use(express.static(__dirname + '/public'));
// app.use('/static', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.send('basic web server');
});

app.listen(port, function() {
  console.log('Server running on port: ', port);
});

init.initialize();
