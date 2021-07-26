$(document).ready(function(){
$("#search-icon").click(function(){
    $("input[type='search']").css("opacity", "1");
    $("input[type='search']").css("transform", "all, 1s");
    $("input[type='search']").css("transition", "1s");
  });

  var renew1 = setInterval(function() {
    $("#video").fadeToggle(2000);



}, 2000);
var renew2 = setInterval(function() {
    $("#data").fadeToggle(3000);


}, 3000);
var renew3 = setInterval(function() {
    $("#teleport").fadeToggle(3000);


}, 4000);
var renew4 = setInterval(function() {
    $("#azeconnexus").fadeToggle(3000);


}, 5000);
});
