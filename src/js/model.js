
    var selectedProfile = "";
    var profileindex = [];





    var contentData = [
        "src/img/new/img1.png",
        "src/img/new/img2.png",
        "src/img/new/img3.png",
        "src/img/new/img4.png",
        "src/img/new/img5.png",
        "src/img/new/img6.png",
        "src/img/new/img7.png",
        "src/img/new/img8.png",
        "src/img/new/img9.png",
        "src/img/new/img10.png",
        "src/img/new/img11.png",
        "src/img/new/img12.png",
        "src/img/new/img13.png",
        "src/img/new/img14.png",
        "src/img/new/img15.png",
        "src/img/banner/op.png",
    ];
    var newshow = {
        newshow1: contentData[8],
        newshow2: contentData[11],
        newshow3: contentData[0],
        newshow4: contentData[1],
        newshow5: contentData[3],
        newshow6: contentData[4],
        newshow7: contentData[5],
    };

    var trendshow = {
        trendshow1: contentData[8],
        trendshow2: contentData[11],
        trendshow3: contentData[1],
        trendshow4: contentData[2],
        trendshow5: contentData[4],
        trendshow6: contentData[5],
        trendshow7: contentData[9],
        trendshow8: contentData[14],
        trendshow9: contentData[13],
        trendshow10: contentData[0],

    };
var indexNewShow = 1;
var visibleNewShows = 3;

function updateNewShows() {
    for (var i = 1; i <= visibleNewShows; i++) {
        var newShowKey = "newshow" + (indexNewShow + i - 1);
        var imageSrc = newshow[newShowKey];
        $("#new" + i).attr("src", imageSrc);
    }
}

    var indextrend = 1; 
    var visibleTrends = 4; 

    
    function updateTrends() {
        for (var i = 1; i <= visibleTrends; i++) {
            var trendKey = "trendshow" + (indextrend + i - 1);
            var imageSrc = trendshow[trendKey];
            $("#trend" + i).attr("src", imageSrc);
        }
    }


    function buildprofile(selectedProfile) {
        if (selectedProfile === "profile1") {
            profileindex[0] = {
                show1: contentData[6],
                show2: contentData[10],
                show3: contentData[12],
            }

            var profile1 = profileindex[0];

            //keep watching
            $("#keep1").attr("src", profile1.show1);
            $("#keep2").attr("src", profile1.show2);
            $("#keep3").attr("src", profile1.show3);
        } else if (selectedProfile === "profile2") {
            profileindex[1] = {
                show1: contentData[14],
                show2: contentData[4],
                show3: contentData[8],
            }

            var profile2 = profileindex[1];

            //keep watching
            $("#keep1").attr("src", profile2.show1);
            $("#keep2").attr("src", profile2.show2);
            $("#keep3").attr("src", profile2.show3);
        } else if (selectedProfile === "profile3") {
            profileindex[2] = {
                show1: contentData[6],
                show2: contentData[7],
                show3: contentData[13],
            }

            var profile3 = profileindex[2];

            //keep watching
            $("#keep1").attr("src", profile3.show1);
            $("#keep2").attr("src", profile3.show2);
            $("#keep3").attr("src", profile3.show3);
        }
    };

function MoveNewShowLeft() {
    if (indexNewShow < Object.keys(newshow).length - visibleNewShows + 1) {
        indexNewShow++;
        updateNewShows();
    }
}

function MoveNewShowRight() {
    if (indexNewShow > 1) {
        indexNewShow--;
        updateNewShows();
    }
}

    function MoveTrendRight() {
        if (indextrend > 1) {
            indextrend--;
            updateTrends();
        }
    }

    function MoveTrendLeft() {
        if (indextrend  < Object.keys(trendshow).length - visibleTrends + 1) {
            indextrend++;
            updateTrends();
        }
    }

    function Selectuser() {
        $("#pos_select1").hide();
        $("#pos_select2").hide();


        updateNewShows();
        updateTrends();

        
}

function SelectnewUser() {
    Selectuser();
    $("#pre_select1").show();
    $("#pre_select2").show();
    

}

function UserNumber1() {
    selectedProfile = "profile1";
    $("#pre_select1").hide();
    $("#pos_select1").show();
    $("#pos_select2").show();
    $("#main-show-image").attr("src", contentData[15]);
    buildprofile(selectedProfile);
}

function UserNumber2() {
    selectedProfile = "profile2";
    $("#pre_select1").hide();
    $("#pos_select1").show();
    $("#pos_select2").show();
    $("#main-show-image").attr("src", contentData[15]);
    buildprofile(selectedProfile);
}

function UserNumber3() {
    selectedProfile = "profile3";
    $("#pre_select1").hide();
    $("#pos_select1").show();
    $("#pos_select2").show();
    $("#main-show-image").attr("src", contentData[15]);
    buildprofile(selectedProfile);
}

function HideNewbutton() {
    var time = 5000;
    setTimeout(function () {
        $(".buttonl1").hide();
        $(".buttonr1").hide();
    }, time);
}

function HideTrendbutton() {
    var time = 5000;
    setTimeout(function () {
        $(".buttonl2").hide();
        $(".buttonr2").hide();
    }, time);
}

function reload() {
    window.scrollTo({
        top: 0,
        behavior: 'auto' 
    });
}