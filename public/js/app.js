

$(document).ready(function(e){
  loadData();

  $("#send").click(function(e){
    addMessages({name:"Christopher", message:"Hello World!"});
  });//closes send click event


}); //closes $(document).ready()...


function loadData(){



}

//function that allows us to add messages to our message history
function addMessages(message){
  $("#messages").append(`<h4> ${message.name} </h4> <p> ${message.message} </p>`);
}
