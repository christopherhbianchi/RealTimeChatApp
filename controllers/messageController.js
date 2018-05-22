var Messages = require('../models/messageModel.js');
var bodyParser = require('body-parser');

module.exports = function(app){

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended:true
  }));//closes second use

  app.get('/api/messages', function(request, response){
    Messages.find(function(err, results){
      if(err) throw err;
      response.send(results);
    });//closes find
  });//closes get, to return all of the messages














}//closes exports
