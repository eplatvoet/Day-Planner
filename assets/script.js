//WILL LOAD JS ONCE HTML IS ALL LOADED
$(function () {
    console.log("ready!");

    //DATE AND TIME DISPLAYED
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

    //FUNCTION FOR UPDATING TIME WITHOUT REFRESHING THE PAGE
    function updateClock() {
        $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    }

    setInterval(updateClock, 1000)
    console.log("the current time is " + moment())

    //ONCE CLICKED, SAVE BUTTON WILL STORE THE USER'S INPUT TO LOCAL STORAGE SO THEY CAN VIEW ON THEIR CALENDAR IF PAGE GETS REFRESHED
    $(".saveBtn").on("click", function () {
        var value = $(this).siblings(".reservation").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, value);
    });

    //CODE TO RETRIEVE ITEMS FROM LOCAL STORAGE IF REFRESH HIT
    $("#hr-9 .reservation").val(localStorage.getItem("hr-9"));
    $("#hr-10 .reservation").val(localStorage.getItem("hr-10"));
    $("#hr-11 .reservation").val(localStorage.getItem("hr-11"));
    $("#hr-12 .reservation").val(localStorage.getItem("hr-12"));
    $("#hr-13 .reservation").val(localStorage.getItem("hr-13"));
    $("#hr-14 .reservation").val(localStorage.getItem("hr-14"));
    $("#hr-15 .reservation").val(localStorage.getItem("hr-15"));
    $("#hr-16 .reservation").val(localStorage.getItem("hr-16"));
    $("#hr-17 .reservation").val(localStorage.getItem("hr-17"));

    //VARIABLES SET UP TO DECLARE TIME TO BE USED IN FUNCTION BELOW
    var today = new Date();
    var currentTime = today.getHours();
    
    //FUNCTION CREATED TO SHOW A DIFFERENT COLOR BACKGROUND DEPENDING ON THE CURRENT TIME OF DAY
    function updateColor() {
        var currentTime = today.getHours();
        $(".timeslot").each(function () {
            var blockTime = parseInt($(this).attr("id").split("-")[1]);
            if (blockTime < currentTime) {
                $(this).addClass("past");
            } else if (blockTime === currentTime) {
                $(this).removeClass("past").addClass("present");
            } else {
                $(this).removeClass("past", "present").addClass("future");
            }
        })
    };

    //FUNCTION CALL TO GET THE COLORS TO UPDATE:
    updateColor();

});
