window.onload = function() {
    $("body, html").animate({scrollTop: "0px"}, 10);
}

$(document).ready(function() {

    var scroll_p = setInterval(function() {
        $("#scroll-down-container p").fadeOut(1000).fadeIn(1000);
    }, 1000);

    $("#landing-page-assets").delay(1000).queue(function() {

        $(this).css({
            'filter': "blur(0px)",
            'webkitFilter':"blur(0px)",
            'mozFilter':"blur(0px)",
            'oFilter':"blur(0px)",
            'msFilter':"blur(0px)",
            'transition':'all 0.5s ease-out',
            '-webkit-transition':'all 1s ease-out',
            '-moz-transition':'all 1s ease-out',
            '-o-transition':'all 1s ease-out'    
        });
    });

    $("header").delay(3500).animate({opacity: "1"}, 1000);
    $("#flower").delay(2000).fadeIn(1000);
    $("#text").delay(3000).animate({top: "20%", opacity: "1"}, 1000);

    $("#flower").on("click", function() {
        console.log("ayy");
        $("body, html").animate({scrollTop: "2000"}, 1000);
    });
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
            $("#nav-bar").animate({opacity: "1"}, 200);
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
            $("#nav-bar").stop().animate({opacity: "0"}, 200);
            $("#nav-bar-fill").stop().animate({height: "0%"}, 200); 
            $("#view-button").stop().animate({right: "0%", opacity: "0"}, 100);      
        }
    });

}, 200);



