var today = dayjs();
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





// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  
  saveButtonEl.on("click", function () {

    // console.log("9am: ", hour9Events.children("textarea").val());
    // console.log("10am: ", hour10Events.children("textarea").val());
    // console.log("11am: ", hour11Events.children("textarea").val());

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
  
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  // for hour 9, if today = 9am, then remove past and future class, else if today is before 9am, then remove past and present class, else if today is after 9am, then remove present and future class


  if (today > 9) {
    hour9.removeClass("present")
    hour9.removeClass("future")
  } else if (today < 9) {
    hour9.removeClass("past")
    hour9.removeClass("present")
  } else {
    hour9.removeClass("past")
    hour9.removeClass("future")
  }

  
  


  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  

  //
  // TODO: Add code to display the current date in the header of the page.
  
  $("#currentDay").text(today.format("MMM D, YYYY"));

});


