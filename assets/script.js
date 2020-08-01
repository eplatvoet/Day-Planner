//PREPARING PAGE TO MANIPULATE THE DOM WHEN LOADED
$(function() {
    console.log( "ready!" );
});

//GLOBAL VARIABLES CREATED
var saveBtn = $(".saveBtn")

//DATE AND TIME DISPLAYED
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

//FUNCTION FOR UPDATING TIME WITHOUT REFRESHING THE PAGE
function updateClock() {
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
}

setInterval(updateClock, 1000)


//FOR LOOP CREATED TO SET UP THE HOURLY ROWS
for (var hour = 9; hour < 18; hour++) {
    var hourlyRow = $("<div>");
    hourlyRow.addClass("row");
    hourlyRow.attr("value", [hour]);

    //CREATING THE FIRST COLUMN OF EACH ROW (TIME)
    var colOne = $("<div>");
    colOne.addClass("col-md-1 hour");
    colOne.attr("value", [hour]);

    //CONDITIONAL STATEMENTS THAT ADJUST TIME FROM MILITARY TIME
    if (hour === 12) {
        colOne.text([hour] + ":00 PM")
    } else if (hour >= 13) {
        colOne.text([hour] - 12 + ":00 PM")
    }
    else {
        colOne.text(hour + ":00 AM")
    }

    //CREATING THE SECOND COLUMN OF EACH ROW (WHERE THE USER WILL ENTER THEIR TASK(S))
    var colTwo = $("<textarea>");
    colTwo.addClass("col-md-8");
    colTwo.attr("value", [hour]);
    colTwo.addClass("text-area userTasks");
    colTwo.attr("placeholder", "Enter your task(s) here")
    colTwo.attr("id", "text-" + hour)
    
    // CREATING THE THIRD COLUMN (SAVE BUTTON)
    var colThree = $("<button>");
    colThree.addClass("col-md-1");
    colThree.addClass("btn btn-dark saveBtn");
    colThree.attr("value", [hour]);
    colThree.text("Click to Save")

    //ATTACHING ALL THREE COLUMNS TO THE ROW, THEN TO THE CONTAINER
    hourlyRow.append(colOne);
    hourlyRow.append(colTwo);
    hourlyRow.append(colThree);
    $(".container").append(hourlyRow);

}

//VARIABLES SET UP TO ACCESS COLUMNS
var userTasks = $("userTasks")

// SAVE BUTTON FUNCTION
    // SAVES TO LOCAL STORAGE
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
    savedTask.forEach(function(hour) {
        var textAreas = $(".text-area");
        textAreas.textContent = userTasks.hour, userTasks.task
        var lsTasks = $("userTasks");

        lsTasks.appendChild(textAreas);
    })
};

//CONDITIONAL STATEMENTS SO THAT THE BACKGROUND COLOR OF THE HOURS WILL CHANGE DEPDENDING ON IF THAT HOUR IS IN THE PAST/PRESENT/FUTURE
