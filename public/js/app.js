/*
this will attempt to make a connection to the socket.io server
at the same URL that this current page is hosted on
*/
var socket = io();

/*
the click events we place on the DOM elements must be initialized,
after the page has loaded
*/
$(document).ready(function(e){
  loadData();

  $("#send").click(function(e){

    e.preventDefault();
    var newMessage = {
      username:$("#name").val(), //could grab this out of a cookie, or something else?
      content:$("#content").val()
    }
    console.log(newMessage);
    createMessage(newMessage);

    $("#name").val(''); //clears inputs
    $("#content").val('');

  });//closes send click event

}); //closes $(document).ready()...

//an event listener so the FRONT END can listen to events from the SERVER (diff than usual!)
socket.on('message', addMessage); //the data sent from the server has a message on it

//retrieves data for all messages from the database
function loadData(){
  var messages = $.ajax({
    type:"GET",
    url:"https://calm-taiga-67187.herokuapp.com//api/messages",
    datatype:"json"
  });
  messages.done(refreshData); //the data from the $.ajax method (list of messages), is passed to refreshData
}//closes loadData

//Sets the data up nicely in the "messages" div
function refreshData(data, status){
  console.log("testing: " + data);
  $("#messages").empty();
  data.forEach(function(element){
    $("#messages").append(`<h4> ${element.username} </h4> <p> ${element.content} </p>`);
  });//closes forEach
}//closes callback

function createMessage(message){
  var postMessage = $.ajax({
    type:"POST",
    url:"/api/messages",
    datatype:"json",
    contentType:"application/json",
    data:JSON.stringify(message)
  });
  postMessage.done();
  //postMessage.done(loadData); //this may be going away soon
  // --> We can now remove this since the server will emit out to the clients the new message when it shows up
}


//function that allows us to add messages to our message history
function addMessage(message){
  $("#messages").append(`<h4> ${message.username} </h4> <p> ${message.content} </p>`);
}
