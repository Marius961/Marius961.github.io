let letItSnowPhrase = "Нехай сніжить!",
    stopTheSnowPhrase = "Зупинити сніг!",
    snowIsStartingPhrase = "Сніг починається",
    snowIsStoppingPhrase = "Сніг зупиняється";

$(document).ready(function () {
    if (JSON.parse(localStorage.getItem('autoSnowFall'))) {
        $(".snow-label").append(stopTheSnowPhrase);
        startSnow();
    } else {
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


function startSnow() {
    startSnowFall();
}


function stopSnow() {
    stopSnowFall();
}
