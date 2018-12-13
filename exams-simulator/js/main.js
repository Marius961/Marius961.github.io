
let obj = {questions: []},
    correctAnswers = 0,
    animationTime = 150,
    questionsContainer = $("#questions"),
    fileLoadContainer = $("#fileLoadContainer"),
    resultContainer = $("#resultContainer"),
    resultLabel = $("#result"),
    questionCountLabel = $("#questionsCountLabel"),
    correctAnswersPercentageLabel = $("#correctPercentage"),
    loadingContainerId = "loadAnimation";


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
    let inputsCount = 0;
    $('input:checked').each(function (index, element) {
        let answerId  = $(element).attr("id"),
            inputQuestionId = answerId.substr(answerId.lastIndexOf('q') + 1, answerId.lastIndexOf('v')-1),
            inputVariantId = answerId.substr(answerId.lastIndexOf('v') + 1),
            correctAnswerId = 0;

        $(obj.questions).each(function (index, question) {
            if (+question.id === +inputQuestionId)  {
                correctAnswerId = question.answerId;
                return false;
            }
        });

        if (+inputVariantId === +correctAnswerId) {
            correctAnswers++;
        }
        inputsCount++;
    });
    let questionsLength = obj.questions.length;
    if (inputsCount === questionsLength) {
        let correctAnswersPercent = (100 / questionsLength) * correctAnswers;
        fadeOutContainer(questionsContainer);
        $(resultLabel).append(correctAnswers);
        $(questionCountLabel).append(obj.questions.length);
        $(correctAnswersPercentageLabel).append(correctAnswersPercent.toFixed(1) + "%");
        setTimeout(function () {
            fadeInContainer(resultContainer);
        }, animationTime);
    } else {
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
        fadeInContainer(questionsContainer);
        $(resultLabel).empty();
        $(questionCountLabel).empty();
        $(correctAnswersPercentageLabel).empty();
    }, animationTime);
});

$(document).on("click", "#choseFile", function () {
    $("#questions").empty();
    fadeOutContainer(resultContainer);
    setTimeout(function () {
        fadeInContainer(fileLoadContainer);
    }, animationTime);
    $("#file").val("");
    obj = { questions: []
    };
});

$(document).on("click", "input:checked", function () {
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
    data.questions = shuffledArray(data.questions);
    $.each(data.questions, function (index, element) {
        let questionId = "question" + element.id,
            questionCount = +index+1 + ") ";

        $("#questions").append("" +
            "<div class='row mt-5 pt-4' id='"+ questionId +"'>\n" +
            "            <div class='col-12 question-text'>"+ questionCount + element.question +"</div>\n" +
            "</div>");

        element.variants = shuffledArray(element.variants);
        $.each(element.variants, function (index, variant) {
            let variantId = "q" + element.id + "v" + variant.id;
            $("#" + questionId).append("" +
                "<div class='col-12'>" +
                "   <div class='row custom-control custom-radio ml-sm-4 pl-5 pt-2 pb-2 variant-2'>\n" +
                "       <input type='radio' class='col-auto custom-control-input ' name='q"+ element.id +"' id='" + variantId  + "'>\n" +
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
    $(container).fadeIn(animationTime);
}

function addLoadingContainer() {
    let loadingContainer = "<div class=\"row justify-content-center text-center\" id='"+ loadingContainerId +"'>\n" +
        "        <div class=\"col-auto lds-hourglass\"></div>\n" +
        "        <div class=\"col-12 text-center loading-text\">Завантаження</div>\n" +
        "    </div>";
    $(".container").append(loadingContainer);
    $("#" + loadingContainerId).fadeIn(animationTime).css("display","flex");
}

function removeLoadingContainer() {
    $("#" + loadingContainerId).fadeOut(animationTime);
    setTimeout(function () {
        $("#" + loadingContainerId).remove();
    }, animationTime)
}

$("#menuBtn").click(function () {
    $("#menuContent").slideToggle(animationTime);
});