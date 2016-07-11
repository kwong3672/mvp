var express = require('express');
var requestHandler = require('./requestHandler.js');
var app = express();

var port = 3000;

app.get('/', function(req, res){
  res.send('basic web server');
});

app.listen(port, function() {
  console.log('Server running on port: ', port);
});