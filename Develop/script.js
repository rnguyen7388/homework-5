
var moment = moment();
$("#currentDay").text(moment.format("dddd, MMMM Do"));

var text;
var time;





$(document).ready(function() {
    color();
    showText();
});

function color() {
    var time = moment().hours();
    
    $(".text").each(function() {
        var timeTest = parseInt($(this).attr("id"));
        
        if (time > timeTest) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).removeClass("past");
        } else if (time < timeTest) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        } else {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
    });
};