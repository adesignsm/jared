window.onload = function() {
    $("body, html").animate({scrollTop: "0px"}, 10);
}

$(document).ready(function() {

    var scroll_p = setInterval(function() {
        $("#scroll-down-container p").fadeOut(1000).fadeIn(1000);
    }, 1000);
});

$.smartscroll({
    mode: "vp",
    autoHash: true,
    sectionScroll: true,
    initialScroll: false,
    sectionWrapperSelector: ".section-wrapper",
    sectionClass: "section",
    animationSpeed: 1000,
    headerHash: "header"
});

setTimeout(function() {

    $(window).scroll(function() {

        if (window.location.hash.indexOf("#section1") > -1 ) {
            $("#nav-bar-fill").stop().animate({height: "25%"}, 200);
            $("#section1-details-text h1").delay(600).animate({marginLeft: "0", opacity: "1"}, 1000);
            $("#view-button").stop().animate({right: "10%", opacity: "1"}, 700);

        } else if (window.location.hash.indexOf("#section2") > -1) { 
            $("#nav-bar-fill").stop().animate({height: "50%"}, 200);
            $("#section2-details-text h1").delay(600).animate({marginLeft: "0", opacity: "1"}, 1000);

        } else if (window.location.hash.indexOf("#section3") > -1) {
            $("#nav-bar-fill").stop().animate({height: "75%"}, 200);
            $("#section3-details-text h1").delay(600).animate({marginLeft: "0", opacity: "1"}, 1000);

        } else if (window.location.hash.indexOf("#section4") > -1) {
            $("#nav-bar-fill").stop().animate({height: "100%"}, 200);
            $("#section4-details-text h1").delay(600).animate({marginLeft: "0", opacity: "1"}, 1000);

        } else if (window.location.hash.indexOf("#header") > -1) {
            $("#nav-bar-fill").stop().animate({height: "0%"}, 200); 
            $("#view-button").stop().animate({right: "0%", opacity: "0"}, 100);      
        }
    });

}, 200);



