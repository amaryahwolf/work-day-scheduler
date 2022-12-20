var today = dayjs();
var currentHour = dayjs().hour()
var saveButtonEl = $(".saveBtn");
var hour9 = $("#hour-9");
var hour10 = $("#hour-10");
var hour11 = $("#hour-11");
var hour12 = $("#hour-12");
var hour13 = $("#hour-13");
var hour14 = $("#hour-14");
var hour15 = $("#hour-15");
var hour16 = $("#hour-16");
var hour17 = $("#hour-17");

console.log(today)

$(function () {

  saveButtonEl.on("click", function () {

    localStorage.setItem("9am: ", hour9.children("textarea").val());
    localStorage.setItem("10am: ", hour10.children("textarea").val());
    localStorage.setItem("11am: ", hour11.children("textarea").val());
    localStorage.setItem("12pm: ", hour12.children("textarea").val());
    localStorage.setItem("1pm: ", hour13.children("textarea").val());
    localStorage.setItem("2pm: ", hour14.children("textarea").val());
    localStorage.setItem("3pm: ", hour15.children("textarea").val());
    localStorage.setItem("4pm: ", hour16.children("textarea").val());
    localStorage.setItem("5pm: ", hour17.children("textarea").val());
  })
  
  if (currentHour === 9) {
    hour9.removeClass("past")
    hour9.removeClass("future") 
  } else if (currentHour < 9) {
    hour9.removeClass("future")
    hour9.removeClass("present")
  } else {
    hour9.removeClass("present")
    hour9.removeClass("past")
  }

  if (currentHour === 10) {
    hour10.removeClass("past")
    hour10.removeClass("future") 
  } else if (currentHour < 10) {
    hour10.removeClass("future")
    hour10.removeClass("present")
  } else {
    hour10.removeClass("present")
    hour10.removeClass("past")
  }

  if (currentHour === 11) {
    hour11.removeClass("past")
    hour11.removeClass("future") 
  } else if (currentHour < 11) {
    hour11.removeClass("future")
    hour11.removeClass("present")
  } else {
    hour11.removeClass("present")
    hour11.removeClass("past")
  }

  if (currentHour === 12) {
    hour12.removeClass("past")
    hour12.removeClass("future") 
  } else if (currentHour < 12) {
    hour12.removeClass("future")
    hour12.removeClass("present")
  } else {
    hour12.removeClass("present")
    hour12.removeClass("past")
  }

  if (currentHour === 13) {
    hour13.removeClass("past")
    hour13.removeClass("future") 
  } else if (currentHour < 13) {
    hour13.removeClass("future")
    hour13.removeClass("present")
  } else {
    hour13.removeClass("present")
    hour13.removeClass("past")
  }

  if (currentHour === 14) {
    hour14.removeClass("past")
    hour14.removeClass("future") 
  } else if (currentHour < 14) {
    hour14.removeClass("future")
    hour14.removeClass("present")
  } else {
    hour14.removeClass("present")
    hour14.removeClass("past")
  }

  if (currentHour === 15) {
    hour15.removeClass("past")
    hour15.removeClass("future") 
  } else if (currentHour < 15) {
    hour15.removeClass("future")
    hour15.removeClass("present")
  } else {
    hour15.removeClass("present")
    hour15.removeClass("past")
  }

  if (currentHour === 16) {
    hour16.removeClass("past")
    hour16.removeClass("future") 
  } else if (currentHour < 16) {
    hour16.removeClass("future")
    hour16.removeClass("present")
  } else {
    hour16.removeClass("present")
    hour16.removeClass("past")
  }

  if (currentHour === 17) {
    hour17.removeClass("past")
    hour17.removeClass("future") 
  } else if (currentHour < 17) {
    hour17.removeClass("future")
    hour17.removeClass("present")
  } else {
    hour17.removeClass("present")
    hour17.removeClass("past")
  }

  var hour9Storage = localStorage.getItem("9am: ");
  hour9.children("textarea").append(hour9Storage);

  var hour10Storage = localStorage.getItem("10am: ");
  hour10.children("textarea").append(hour10Storage);

  var hour11Storage = localStorage.getItem("11am: ");
  hour11.children("textarea").append(hour11Storage);

  var hour12Storage = localStorage.getItem("12pm: ");
  hour12.children("textarea").append(hour12Storage);

  var hour13Storage = localStorage.getItem("1pm: ");
  hour13.children("textarea").append(hour13Storage);

  var hour14Storage = localStorage.getItem("2pm: ");
  hour14.children("textarea").append(hour14Storage);

  var hour15Storage = localStorage.getItem("3pm: ");
  hour15.children("textarea").append(hour15Storage);

  var hour16Storage = localStorage.getItem("4pm: ");
  hour16.children("textarea").append(hour16Storage);

  var hour17Storage = localStorage.getItem("5pm: ");
  hour17.children("textarea").append(hour17Storage);

  $("#currentDay").text(today.format("MMM D, YYYY"));

});


