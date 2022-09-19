$(document).ready(function() {
    $('#currentDay').text(moment().format("MMM Do YYY, h:mm:ss a"));

$(".saveBtn").on("click", function() {
    
    console.log(this);
    var text = $(this).siblings("description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
})






})