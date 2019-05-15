// text for the label
let letItSnowPhrase = "Нехай сніжить!",
    stopTheSnowPhrase = "Зупинити сніг!",
    snowIsStartingPhrase = "Сніг починається",
    snowIsStoppingPhrase = "Сніг зупиняється";

$(document).ready(function () {
    // read property from local storage
    if (JSON.parse(localStorage.getItem('autoSnowFall'))) {
        $(".snow-label").append(stopTheSnowPhrase);
        startSnow();
    } else {
        // used by default
        $(".snow-label").append(letItSnowPhrase);
    }
});


$("#letItSnowBtn").click(function () {
    let snowLabel = $(this).find(".snow-label");
    if ($(snowLabel).text() === letItSnowPhrase) {
        $(snowLabel).empty();
        $(snowLabel).addClass("snow-label-disabled");
        $(snowLabel).append(snowIsStartingPhrase);
        startSnow();
        localStorage.setItem('autoSnowFall', "true");
        setTimeout(function () {
            $(snowLabel).empty();
            $(snowLabel).removeClass("snow-label-disabled");
            $(snowLabel).append(stopTheSnowPhrase);
        }, 300);
    } else if ($(snowLabel).text() === stopTheSnowPhrase) {
        $(snowLabel).empty();
        $(snowLabel).addClass("snow-label-disabled");
        $(snowLabel).append(snowIsStoppingPhrase);
        stopSnow();
        localStorage.setItem('autoSnowFall', "false");
        setTimeout(function () {
            $(snowLabel).empty();
            $(snowLabel).removeClass("snow-label-disabled");
            $(snowLabel).append(letItSnowPhrase);
        }, 300);
    }
});

// starts snowfall on the page
function startSnow() {
    startSnowFall();
}


function stopSnow() {
    stopSnowFall();
}
