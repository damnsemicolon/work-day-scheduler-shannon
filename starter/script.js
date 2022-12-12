
$(document).ready(function() {

//      Set up moment.js code to show date & time
$("#currentDay").text("Date: " + moment().format('dddd, Do MMMM yyyy'));
$("#currentTime").text("Time: " + moment().format('hh:mm:ss A'));
//      Set up current time for referencing
var currentTime = moment().format("HH");

//      Clear local storage and show default in scheduler
$("#clearFieldsBtn").click(function (event) {
    event.preventDefault;
    $("textarea").val("");
    localStorage.clear();
  });





});