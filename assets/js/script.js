// ENTIRE FUNCTION FOR THE PAGE.
$(document).ready(function () {

    // Instantly display the user's current local date and time.
    setInterval(function () {
        $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a")) 
    }, 0, 1000);

    // When the save button is clicked, save the text content and the time content to localStorage.
    $(".saveBtn").on("click", function() {
        var text = $(this).siblings(".text-content").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
    })

    // Get the value of each localStorage item to display on screen.
    $("#hour9 .text-content").val(localStorage.getItem("hour9"));
    $("#hour10 .text-content").val(localStorage.getItem("hour10"));
    $("#hour11 .text-content").val(localStorage.getItem("hour11"));
    $("#hour12 .text-content").val(localStorage.getItem("hour12"));
    $("#hour13 .text-content").val(localStorage.getItem("hour13"));
    $("#hour14 .text-content").val(localStorage.getItem("hour14"));
    $("#hour15 .text-content").val(localStorage.getItem("hour15"));
    $("#hour16 .text-content").val(localStorage.getItem("hour16"));
    $("#hour17 .text-content").val(localStorage.getItem("hour17"));

// Identify which color the row should be, based off the time of the day.
function whichHour () {
    // Identify the current hour of the day.
    var currentHour = moment().hour();

    // Based on the time of the day, change the color of the patricular hours row.
    $(".hours").each(function () {
        var rowHour = parseInt($(this).attr("id").split("hour")[1]);
        console.log(rowHour, currentHour);

        // If the row's hour is less than the current hour, make the box grey.
        if (rowHour < currentHour) {
            $(this).children(".text-content").addClass("past");
            $(this).children(".text-content").removeClass("present");
            $(this).children(".text-content").removeClass("future");
        }
        // If the row's hour is the same as the current hour, make the box red.
        else if (rowHour === currentHour) {
            $(this).children(".text-content").removeClass("past");
            $(this).children(".text-content").addClass("present");
            $(this).children(".text-content").removeClass("future");
        }
        // If the row's hour is greater than the current hour, make the box green.
        else {
            $(this).children(".text-content").removeClass("past");
            $(this).children(".text-content").removeClass("present");
            $(this).children(".text-content").addClass("future");
        }
     });
  }
  // Run the function again.
  whichHour();
});
