console.log("test")


$(document).ready(function() {
    $('#currentDay').text(moment().format("MMM Do YYY, h:mm:ss a"));

$(".saveBtn").on("click", function() {
    
    console.log(this);
    var text = $(this).siblings("description").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
})

$("#9inTheMorning .description").val(localStorage.getItem("9inTheMorning"));
$("#10inTheMorning .description").val(localStorage.getItem("10inTheMorning"));
$("#11inTheMorning .description").val(localStorage.getItem("11inTheMorning"));
$("#12inTheAfternoon .description").val(localStorage.getItem("12inTheAfternoon"));
$("#1inTheAfternoon .description").val(localStorage.getItem("1inTheAfternoon"));
$("#2inTheAfternoon .description").val(localStorage.getItem("2inTheAfternoon"));
$("#3inTheAfternoon .description").val(localStorage.getItem("3inTheAfternoon"));
$("#4inTheAfternoon .description").val(localStorage.getItem("4inTheAfternoon"));
$("#5inTheAfternoon .description").val(localStorage.getItem("5inTheAfternoon"));



function trackingHours(){

    var currentHour = moment().hour();


$(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("hour")[1]);
    console.log(blockHour, currentHour)

    if (blockHour < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
    }
})





}
})