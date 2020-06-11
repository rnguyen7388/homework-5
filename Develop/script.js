var saveBtn = $(".saveBtn");






$(document).ready(function() {
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
console.log(moment().format("dddd, MMMM Do"));
   
colorTime();





function localStorage(key) {
    var inputValue = localStorage.getItem(key);
   
    }
}

);





function colorTime() {
    var nowTime = moment().hours;
    $(".text").each(function() {
        var hourTime = parseInt($(this).attr("id"));

        if (nowTime > hourTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (nowTime < hourTime) {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        } else {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
    });
};

saveBtn.on("click", function localStorage() {
    alert("Saved!");
});



