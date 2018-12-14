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
    let height = $(document).height();
    $('body').flurry({
        character: "❄",
        height: height,
        color: "white",
        frequency: 100,
        speed: height / 1000,
        small: 8,
        large: 80,
        wind: 80,
        windVariance: 30,
        rotation: 90,
        rotationVariance: 180,
        startOpacity: 1,
        endOpacity: 0,
        opacityEasing: "cubic-bezier(1,.3,.6,.74)",
        blur: true,
        overflow: "hidden",
        zIndex: 9999,
    });
}


function stopSnow() {
    $('body').flurry('destroy');
}
