var socket = io();
//this will attempt to make a connection to the socket.io server
//at the same URL that this current page is hosted on

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

  });//closes send click event



}); //closes $(document).ready()...


function loadData(){
  var messages = $.ajax({
    type:"GET",
    url:"/api/messages",
    datatype:"json"
  });
  messages.done(refreshData); //the data from the $.ajax method (list of messages), is passed to refreshData
}//closes loadData


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
  postMessage.done(loadData); //this may be going away soon
}


//function that allows us to add messages to our message history
function addMessages(message){
  $("#messages").append(`<h4> ${message.name} </h4> <p> ${message.message} </p>`);
}
