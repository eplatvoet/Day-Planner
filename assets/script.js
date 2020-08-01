//preparing the page to read jQuery
$(document).ready(function () {
});
console.log("I'm ready!");


//for loop created to set up hourly rows
for (var hour = 9; hour < 18; hour++) {
    var hourlyRow = $("<div>");
    hourlyRow.attr("value", [hour]);
    hourlyRow.addClass("row");

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
    colTwo.addClass("text-area");
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


// // lock button & function for each hour
// saveBtn.on("click", function saveTask() {
//     var task = userTasks.value.trim();
//     if (userTasks !== "") {
//         var savedTask = JSON.parse(localStorage.getItem("savedTask")) || []
//         var taskObject = {
//             task: task,
//             entered: entered
//         }
//         console.log(scoreObject);
//         savedTask.push(scoreObject);
//         console.log(savedTask);
//         localStorage.setItem("savedTask", JSON.stringify(savedTask));
//     }
// });
// submitInitials.addEventListener("click", function () {
//     event.preventDefault();
//     userTasks.value = "";
//     saveTask();
//     showTasks();
// });

// function showTasks() {
//     var savedTask = JSON.parse(localStorage.getItem("savedTask")) || []
//     savedTask.forEach(function(score) {
//         var textAreas = $("textarea");
//         textAreas.textContent = userTasks
//         var lsTasks = document.getElementById("user-initials");

//         lsTasks.appendChild(textAreas);
//     })
// };

//if/else statements regarding time to change the color on screen (style already in css)



// saving tasks to local storage



// function saveScore() {
//     var initials = initialsElement.value.trim();
//     if (initials !== "") {
//         var highScore = JSON.parse(localStorage.getItem("highScore")) || []
//         var scoreObject = {
//             score: score,
//             initials: initials
//         }
//         console.log(scoreObject);
//         highScore.push(scoreObject);
//         console.log(highScore);
//         localStorage.setItem("highScore", JSON.stringify(highScore));
//     }
// }


// submitInitials.addEventListener("click", function () {
//     event.preventDefault();
//     initialsElement.value = "";
//     saveScore();
//     showScore();
// });

// function showScore() {
//     var highScore = JSON.parse(localStorage.getItem("highScore")) || []
//     highScore.forEach(function(score) {
//         var liTags = document.createElement("li");
//         liTags.textContent = score.initials + " - " + score.score;
//         var scoreElement = document.getElementById("user-initials");

//         scoreElement.appendChild(liTags);
//     })