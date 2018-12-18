
let obj = {questions: []},
    correctAnswers = 0,
    animationTime = 150,
    questionsContainer = $("#questions"),
    fileLoadContainer = $("#fileLoadContainer"),
    resultContainer = $("#resultContainer"),
    resultLabel = $("#result"),
    questionCountLabel = $("#questionsCountLabel"),
    correctAnswersPercentageLabel = $("#correctPercentage"),
    assesssmentLabel = $("#assessmentLabel"),
    loadingContainerId = "loadAnimation",
    correctVariantClassName = "correct-answer",
    wrongVariantClassName = "wrong-answer",
    wrongAnswersBtnText = "Показати неправильні відповіді";


$(document).ready(function () {

    function onChange(event) {
        fadeOutContainer(fileLoadContainer);
        setTimeout(function () {
            addLoadingContainer();
        }, animationTime);
        let reader = new FileReader(),
            fileName = event.target.files[0].name,
            lastIndex = fileName.lastIndexOf('.'),
            type = fileName.substr(lastIndex);
        if (type === ".json") {
            reader.onload = parseJSON;
        }
        if (type === ".txt") {
            reader.onload = parseTxtToObject;
        } else {
            swal({
                title: "Формат файлу не підтримується!",
                text: "Будь ласка оберіть файл у форматі TXT або JSON",
                icon: "warning",
                button: "ОК",
            });
            removeLoadingContainer();
            $("#file").val();
            fadeInContainer(fileLoadContainer);
        }
        reader.readAsText(event.target.files[0]);
    }

    function parseJSON(event){
        obj = JSON.parse(event.target.result);
        removeLoadingContainer();
        setTimeout(function () {
            addQuestionsWithVariants(obj);
        }, animationTime)
    }



    document.getElementById('file').addEventListener('change', onChange);
});




$(document).on("click", '#calculateResult' , function () {
    let inputs = $('input[type=radio]:checked');
    let questionsLength = obj.questions.length;
    if (inputs.length === questionsLength) {
        let wrongAnswersCount = 0;
        $(inputs).each(function (index, element) {
            let answerId  = $(element).attr("id"),
                inputQuestionId = answerId.substr(answerId.lastIndexOf('q') + 1, answerId.lastIndexOf('v')-1),
                inputVariantId = answerId.substr(answerId.lastIndexOf('v') + 1),
                correctAnswerId = 0;
            $(obj.questions).each(function (index, question) {
                if (+question.id === +inputQuestionId)  {
                    correctAnswerId = question.answerId;
                    if (+inputVariantId === +correctAnswerId) {
                        correctAnswers++;
                    } else {
                        wrongAnswersCount++;
                        logQuestion(question, inputVariantId, correctAnswerId);
                    }
                    return false;
                }
            });
        });
        let correctAnswersPercent = (100 / questionsLength) * correctAnswers;
        fadeOutContainer(questionsContainer);
        $(resultLabel).append(correctAnswers);
        $(questionCountLabel).append(obj.questions.length);
        $(correctAnswersPercentageLabel).append(correctAnswersPercent.toFixed(1) + "%");
        $(assesssmentLabel).append(calculateAssessment(correctAnswersPercent.toFixed(1)));
        if (wrongAnswersCount !== 0) {
            $("#logContainer").prepend("<div class='col-12 btn-orange-secondary-borderLess p-2' id='wrongAnswersBtn'>"+ wrongAnswersBtnText +
                " (" + wrongAnswersCount + ")</div>")
        }
        setTimeout(function () {
            fadeInContainer(resultContainer);
        }, animationTime);
    }  else {
        swal({
            text: "Будь ласка дайте відповідь на всі питання щоб завершити тестування",
            icon: "warning",
            button: "Продовжити",
        });
    }

    correctAnswers = 0;
});

$(document).on("click", "#retry",  function () {
    $('#questions').empty();
    addQuestionsWithVariants(obj);
    fadeOutContainer(resultContainer);
    setTimeout(function () {
        clearData();
        fadeInContainer(questionsContainer);
    }, animationTime);
});

$(document).on("click", "#choseFile", function () {
    $("#questions").empty();
    fadeOutContainer(resultContainer);
    setTimeout(function () {
        clearData();
        fadeInContainer(fileLoadContainer);
    }, animationTime);
    $("#file").val("");
    obj = { questions: []
    };
});

function clearData() {
    $(resultLabel).empty();
    $(questionCountLabel).empty();
    $(assesssmentLabel).empty();
    $(correctAnswersPercentageLabel).empty();
    $("#wrongAnswersContainer").empty();
    $("#wrongAnswersBtn").remove();
}

function calculateAssessment(percents) {
    if (percents < 50) return "2";
    else if (percents >= 50 && percents < 56) return "3 (достатньо)";
    else if (percents >= 56 && percents < 63) return "3";
    else if (percents >= 63 && percents < 80) return "4 (добре)";
    else if (percents >= 80 && percents < 88) return "4 (дуже добре)";
    else if (percents >= 88) return "5 відмінно";
}

$(document).on("click", ".params-label", function () {
    $("#testParams").slideToggle(animationTime);
});

$(document).on("click", "#wrongAnswersBtn", function () {
    $("#wrongAnswersContainer").slideToggle(animationTime);
});

$(document).on("click", "input[type=radio]", function () {
    let name = $(this).attr("name");
    $("input[name=" + name + "]").each(function (index, element) {
        $(element.parentNode).removeClass("selected-variant");
    });
    $(this.parentNode).addClass("selected-variant")
});

$("#info-btn").click(function () {
    $("#info-container").slideToggle(animationTime);
});

function parseQuestionToObject(questionId , question) {
    let tempVariants = question.split('\n'),
        questionText = tempVariants[0],
        correctVariantId = 0,
        variants = [];

    tempVariants.shift();
    for (let i = 0; i < tempVariants.length; i++) {
        let text = tempVariants[i].trim();
        if (text !== "") {
            if (text.substr(0, 1) === '+') {
                correctVariantId = i;
                text = text.substr(1);
            }
            variants.push({
                id:i,
                text: text
            })
        }
    }
    addQuestionToObject(questionId, questionText, correctVariantId, variants);
}

function addQuestionToObject(id, questionText, answerId , variants) {
    obj.questions.push({
        id: id,
        question:questionText,
        answerId:answerId,
        variants:variants
    });
}

function shuffledArray(array) {
    return array.sort(function(){
        return Math.random() - 0.5;
    });
}



function parseTxtToObject(event) {
    let array = event.target.result.split(/\n\s*\n|\r\n\s*\r\n/);
    for (let i = 0; i < array.length; i++) {
        if (array[i].trim() !== "") {
            parseQuestionToObject(i, array[i])
        }
    }
    removeLoadingContainer();
    setTimeout(function () {
        addQuestionsWithVariants(obj);
    }, animationTime)
}

function addQuestionsWithVariants(data){
    if ($("#shuffleQuestions").is(":checked"))  {
        data.questions = shuffledArray(data.questions);
    }
    if ($("#expressTest").is(":checked") && data.questions.length > 30) {
        data.questions.length = 30;
    }
    $.each(data.questions, function (index, element) {
        let questionId = "question" + element.id,
            questionCount = +index+1 + ") ";

        $("#questions").append("" +
            "<div class='row mt-5 pt-4' id='"+ questionId +"'>\n" +
            "            <div class='col-12 question-text'>"+ questionCount + element.question +"</div>\n" +
            "</div>");

        if ($("#shuffleVariants").is(":checked"))  {
            element.variants = shuffledArray(element.variants);
        }
        $.each(element.variants, function (index, variant) {
            let variantId = "q" + element.id + "v" + variant.id;
            $("#" + questionId).append("" +
                "<div class='col-12'>" +
                "   <div class='row custom-control custom-radio ml-sm-4 pl-5 pt-2 pb-2 variant-2'>\n" +
                "       <input type='radio' class='col-auto custom-control-input' name='q"+ element.id +"' id='" + variantId  + "'>\n" +
                "       <label class='col-12 custom-control-label variant' for='"+ variantId + "'>"+ variant.text +"</label>\n" +
                "   </div>" +
                "</div>");
        })
    });
    $("#questions").append("" +
        "<div class=\"row justify-content-center mt-3 mb-3\">\n" +
        "   <div class=\"col-auto btn-orange-primary p-2 mt-3\" id='calculateResult'>Завершити</div>\n" +
        "</div>");
    fadeInContainer(questionsContainer);
}


function fadeOutContainer(container) {
    $(container).fadeOut(animationTime);
}

function fadeInContainer(container) {
    $('html, body').animate({scrollTop: 0}, 800);
    $(container).fadeIn(animationTime);
}

function addLoadingContainer() {
    let loadingContainer = "<div class=\"row justify-content-center text-center\" id='"+ loadingContainerId +"'>\n" +
        "        <div class=\"col-auto lds-hourglass\"></div>\n" +
        "        <div class=\"col-12 text-center loading-text\">Завантаження</div>\n" +
        "    </div>";
    $("main").append(loadingContainer);
    $("#" + loadingContainerId).fadeIn(animationTime).css("display","flex");
}

function removeLoadingContainer() {
    $("#" + loadingContainerId).fadeOut(animationTime);
    setTimeout(function () {
        $("#" + loadingContainerId).remove();
    }, animationTime)
}

function logQuestion(elem, selectedVariantId, correctVariantId) {
    let logAnswerId = "la" + elem.id;
    $("#wrongAnswersContainer").append("<div class=\"row mt-1 pt-4\" id='"+ logAnswerId +"'>\n" +
        "<div class=\"col-12 question-text\">"+ elem.question +"</div>\n" +
        "</div>");
    let className = "";
    $(elem.variants).each(function (index, element) {
        if (+element.id === +correctVariantId) {
            className = correctVariantClassName;
        } else if (+element.id === +selectedVariantId) {
            className = wrongVariantClassName;
        } else {
            className = "";
        }
        $("#" + logAnswerId).append("" +
            "<div class='col-12'>\n" +
            "   <div class='row ml-sm-4 pl-5 pt-2 pb-2 variant-2 " + className + "'>\n" +
            "       <label class='col-12 variant'>"+ element.text +"</label>\n" +
            "   </div>\n" +
            "</div>")
    });
}

$("#menuBtn").click(function () {
    $("#menuContent").slideToggle(animationTime);
});

//
// enabled bootstrap tooltips

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})