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

