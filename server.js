//Similar to our app.js
var express = require('express');
var app = express();

var mongoose = require('mongoose');
var config = require('./config');

mongoose.connect(config.getDbConnectionString());

app.use(express.static(__dirname + '/public'));

var server = app.listen(3000, () => {
  console.log('Server is listening on port', server.address().port);
});

// var port = process.env.PORT || 3000;
// app.listen(port);
