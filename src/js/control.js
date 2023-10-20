
$(document).ready(function () {
    Selectuser();
    
    
    //elements interactions
    $("#main-show-image").mouseleave(function () {
        $(".content").hide();        
    });
    $("#main-show-image").mouseenter(function () {
        $(".content").show();
    });
    $(".content").mouseenter(function () {
        $(".content").show();
    });

    
    //arrows to move the show right and left
    $(".buttonl1").click(function () {
        MoveNewShowRight();
    });
    $(".buttonr1").click(function () { 
        MoveNewShowLeft();
    });

    $(".buttonl2").click(function () {
        MoveTrendRight();     
    });
    $(".buttonr2").click(function () {
        MoveTrendLeft();  
    });


    //
    $("#profile1").click(function () {
        UserNumber1();
    });

    $("#profile2").click(function () {
        UserNumber2();
    });

    $("#profile3").click(function () {
        UserNumber3();
    });

    //controls for the header

    $("#netflixicon").click(function () {
        reload();
    });
    $("#reload").click(function () {
        reload();
    });
    $("#back").click(function () {
        SelectnewUser();
        reload();
    });

});