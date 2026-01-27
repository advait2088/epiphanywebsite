//Hook up the tweet display

$(document).ready(function() {

    $(".countdown").countdown({
        date: "30 March 2026 10:00:00",
        format: "on"
    }, function() {
        // callback after countdown ends
    });

});