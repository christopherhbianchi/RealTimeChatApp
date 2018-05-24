var Messages = require('../models/messageModel.js');
var bodyParser = require('body-parser');

module.exports = function(app, io){

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended:true
  }));//closes second use

  app.get('https://calm-taiga-67187.herokuapp.com/api/messages', function(request, response){
    Messages.find(function(err, results){
      if(err) throw err;
      response.send(results);
    });//closes find
  });//closes get, to return all of the messages

  app.post('/api/messages', function(request, response){
    var newMessage = Messages({
      username:request.body.username,
      content:request.body.content
    });//closes newMessage
    newMessage.save(newMessage, function(err){
      if(err) throw err;

      //emitting the message to all clients
      io.emit('message', newMessage);
      response.send('Success');
    });//closes save
  });//closes post














}//closes exports
