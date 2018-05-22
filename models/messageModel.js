var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var messageSchema = ({
  username:{
    type:"String",
    unique:true,
    require:true,
    trim:true
  },
  content:{
    type:"String",
    unique:false,
    require:true,
    trim:true
  }
});//closes messageSchema

var Messages = mongoose.model('Message', messageSchema);
module.exports = Messages;
