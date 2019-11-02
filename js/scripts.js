$(document).ready(function() { //JQ prepares DOM, then JS function begins
  //alert($("#css-item").text()); //target HTML id #css-item, then JQ method text, then create alert
  //alert($("#title-id").text());
  $("#goal-button").click(function() {
    $("#goal-list").append("<li class='list-item'>" + $("#new-goal").val() + "</li>");
    $("#new-goal").val("");
  //})















});
