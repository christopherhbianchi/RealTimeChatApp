var Messages = require('../models/messageModel.js');

module.exports = function(app){

  app.get('/api/setupMessages', function(request, response){

    var starterMessages = [
      {
        username:'cbianchi',
        content:'Hello chat app!'
      },
      {
        username:'ljames',
        content:'Hello CB!'
      },
      {
        username:'kirving',
        content:'What up champs!'
      }
    ];//closes starterMessages

    Messages.create(starterMessages, function(err, results){
      if(err) throw err;
      response.send(results);
    });//closes create

  });//closes get




}//closes exports
