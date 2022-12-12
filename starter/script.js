
$(document).ready(function() {

//      Set up moment.js code to show date & time
$("#currentDay").text("Date: " + moment().format('dddd, Do MMMM yyyy'));
$("#currentTime").text("Time: " + moment().format('hh:mm:ss A'));
//      Set up current time for referencing
var currentTime = moment().format("HH");



//      Use button to save content in adjecent textarea
$(".saveBtn").click(function (event) {
    event.preventDefault();
    var eventArea = $(this).siblings(".eventArea").val();
    var saveHour = $(this).parent().attr("id");
    localStorage.setItem(saveHour, eventArea);
  });
  
//      Show local storage content in textarea
$("#hour-08 .eventArea").val(localStorage.getItem("hour-08"));
$("#hour-09 .eventArea").val(localStorage.getItem("hour-09"));
$("#hour-10 .eventArea").val(localStorage.getItem("hour-10"));  
$("#hour-11 .eventArea").val(localStorage.getItem("hour-11"));
$("#hour-12 .eventArea").val(localStorage.getItem("hour-12"));
$("#hour-13 .eventArea").val(localStorage.getItem("hour-13"));
$("#hour-14 .eventArea").val(localStorage.getItem("hour-14"));
$("#hour-15 .eventArea").val(localStorage.getItem("hour-15"));
$("#hour-16 .eventArea").val(localStorage.getItem("hour-16"));
$("#hour-17 .eventArea").val(localStorage.getItem("hour-17"));
$("#hour-18 .eventArea").val(localStorage.getItem("hour-18"));
$("#hour-19 .eventArea").val(localStorage.getItem("hour-19"));


//      Clear local storage and show default in scheduler
$("#clearFieldsBtn").click(function (event) {
    event.preventDefault;
    $("textarea").val("");
    localStorage.clear();
    console.log("Cleared!")
  });
});