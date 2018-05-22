//Similar to our app.js
var express = require('express');
var app = express();

//set up socket.io on the backend
var http = require('http').Server(app);
var io = require('socket.io')(http);

var mongoose = require('mongoose');
var config = require('./config');
var setupController = require('./controllers/setupController');
var messageController = require('./controllers/messageController');

mongoose.connect(config.getDbConnectionString());
app.use(express.static(__dirname + '/public'));

setupController(app);
messageController(app);

io.on('connection', function(socket){
  console.log('user connected');
});//closes io.on

//we use a lambda expression verus just writing "function(e){ ... }"
var server = http.listen(3000, () => {
  console.log('Server is listening on port', server.address().port);
});


// var port = process.env.PORT || 3000;
// app.listen(port);
