var express = require('express');

var requestHandler = function(req, res) {
  send.res('Handling requests');
};

exports.requestHandler = requestHandler;