//preparing the page to read jQuery
$(document).ready(function () {
});
console.log("I'm ready!");

//global variables set up
var saveBtn = $(".saveBtn")

//date & time displayed
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

//function to update & display date and time
function updateClock() {
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
}

setInterval(updateClock, 1000)


//for loop created to set up hourly rows
for (var hour = 9; hour < 18; hour++) {
    var hourlyRow = $("<div>");
    hourlyRow.addClass("row");
    hourlyRow.attr("value", [hour]);

    //creating the first column of each row
    var colOne = $("<div>");
    colOne.addClass("col-md-1 hour");
    colOne.attr("value", [hour]);

    //conditional statements to post time (and convert from military time)
    if (hour === 12) {
        colOne.text([hour] + ":00 PM")
    } else if (hour >= 13) {
        colOne.text([hour] - 12 + ":00 PM")
    }
    else {
        colOne.text(hour + ":00 AM")
    }

    //creating the second column of each row (the text area where user will enter task(s))
    var colTwo = $("<textarea>");
    colTwo.addClass("col-md-8");
    colTwo.attr("value", [hour]);
    colTwo.addClass("text-area userTasks");
    colTwo.attr("placeholder", "Enter your task(s) here")
    
    // creates button for save and third col
    var colThree = $("<button>");
    colThree.addClass("col-md-1");
    colThree.addClass("btn btn-dark saveBtn");
    colThree.attr("value", [hour]);
    colThree.text("Click to Save")

    //appends all 3 columns to the row, then appends the row to the container
    hourlyRow.append(colOne);
    hourlyRow.append(colTwo);
    hourlyRow.append(colThree);
    $(".container").append(hourlyRow);

}

//variables set up to access columns
var userTasks = $("userTasks")

// lock button & function for each hour
// saving tasks to local storage
function saveTask() {
    var task = userTasks.value.trim();
    if (userTasks !== "") {
        var savedTask = JSON.parse(localStorage.getItem("savedTask")) || [];
        var taskObject = {
            hour: hour,
            task: task
        };
        console.log(taskObject);
        savedTask.push(taskObject);
        console.log(savedTask);
        localStorage.setItem("savedTask", JSON.stringify(savedTask));
    }
};
saveBtn.addEventListener("click", function () {
    event.preventDefault();
    userTasks.value = "";
    saveTask();
    showTasks();
});

function showTasks() {
    var savedTask = JSON.parse(localStorage.getItem("savedTask")) || []
    savedTask.forEach(function(score) {
        var textAreas = $(".text-area");
        textAreas.textContent = userTasks.hour, userTasks.task
        var lsTasks = document.getElementById("user-initials");

        lsTasks.appendChild(textAreas);
    })
};

//if/else statements regarding time to change the color on screen (style already in css)
// if ()