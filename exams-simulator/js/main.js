
let obj = {questions: []},                                      // list with questions
    correctAnswers = 0,                                         // id of correct answer
    animationTime = 150,                                        // time for all animations
    questionsContainer = $("#questions"),                       // HTML element which contains questions
    fileLoadContainer = $("#fileLoadContainer"),                // HTML element, main container which used to load file with questions
    resultContainer = $("#resultContainer"),                    // HTML element, container in which the result will be recorded
    resultLabel = $("#result"),                                 // label with number of correct answers
    questionCountLabel = $("#questionsCountLabel"),             // label which contains number of questions in test
    correctAnswersPercentageLabel = $("#correctPercentage"),    // label which display percentage of correct answers
    assessmentLabel = $("#assessmentLabel"),                    // label with final assessment
    loadingContainerId = "loadAnimation",                       // id of container with loading animation
    correctOptionClassName = "correct-answer",                  // class name for correct answer
    wrongOptionClassName = "wrong-answer",                      // class name for wrong option
    wrongAnswersBtnText = "Показати неправильні відповіді";     // text for button which show wrong answers


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

        // defining the type of file
        if (type === ".json") {
            reader.onload = parseJSON;
        }
        if (type === ".txt") {
            reader.onload = parseTxtToObject;
        } else {
            // shows a message when the file is incompatible
            swal({
                title: "Формат файлу не підтримується!",
                text: "Будь ласка оберіть файл у форматі TXT або JSON",
                icon: "warning",
                button: "ОК",
            });

            // remove loading animation, clear file selection and show fileLoadContainer
            removeLoadingContainer();
            $("#file").val();
            fadeInContainer(fileLoadContainer);
        }
        reader.readAsText(event.target.files[0]);
    }

    function parseJSON(event){
        // read obj from JSON file
        obj = JSON.parse(event.target.result);
        removeLoadingContainer();
        setTimeout(function () {
            addQuestionsWithOptions(obj);
        }, animationTime)
    }

    // do onChange function after "file" input changing
    document.getElementById('file').addEventListener('change', onChange);
});




$(document).on("click", '#calculateResult' , function () {
    // get all inputs with type radio
    let inputs = $('input[type=radio]:checked'),
        questionsLength = obj.questions.length;

    // if number of inputs same as number of questions (this means that the answers are given to all questions)
    if (inputs.length === questionsLength) {
        let wrongAnswersCount = 0;

        // iterate through inputs (with [type=radio]:checked)
        $(inputs).each(function (index, input) {
            let answerId  = $(input).attr("id");

            //getting question id from answer id, which contains q - number of question (id)
            let questionId = answerId.substr(answerId.lastIndexOf('q') + 1, answerId.lastIndexOf('v')-1);

            // "v" (variant) - id of option
            let optionId = answerId.substr(answerId.lastIndexOf('v') + 1);

            let correctAnswerId = 0;

            // iterate through questions in object, which was previously read from the file
            $(obj.questions).each(function (index, question) {
                if (+question.id === +questionId)  {
                    correctAnswerId = question.answerId;
                    if (+optionId === +correctAnswerId) {
                        correctAnswers++;
                    } else {
                        wrongAnswersCount++;
                        logQuestion(question, optionId, correctAnswerId);
                    }
                    return false;
                }
            });
        });

        // the percentage of correct answers
        let correctAnswersPercent = (100 / questionsLength) * correctAnswers;

        fadeOutContainer(questionsContainer);

        // add number of correct answers to resultLabel
        $(resultLabel).append(correctAnswers);

        // add number of questions to questionCountLabel
        $(questionCountLabel).append(obj.questions.length);

        // add percentage of correct answers to correctAnswersPercentageLabel
        $(correctAnswersPercentageLabel).append(correctAnswersPercent.toFixed(1) + "%");

        // calculate and add assessment to assessmentLabel
        $(assessmentLabel).append(calculateAssessment(correctAnswersPercent.toFixed(1)));

        // add button for showing wrong answers (if they exist)
        if (wrongAnswersCount !== 0) {
            $("#logContainer").prepend("<div class='col-12 btn-orange-secondary-borderLess p-2' id='wrongAnswersBtn'>"+ wrongAnswersBtnText +
                " (" + wrongAnswersCount + ")</div>")
        }

        setTimeout(function () {
            fadeInContainer(resultContainer);
        }, animationTime);
    }  else {
        // show message if not all answers have been marked
        swal({
            text: "Будь ласка дайте відповідь на всі питання щоб завершити тестування",
            icon: "warning",
            button: "Продовжити",
        });
    }
    correctAnswers = 0;
});

$(document).on("click", "#retry",  function () {
    // cleans the questionsContainer
    $(questionsContainer).empty();
    // re-add all questions to page
    addQuestionsWithOptions(obj);
    fadeOutContainer(resultContainer);
    setTimeout(function () {
        clearData();
        fadeInContainer(questionsContainer);
    }, animationTime);
});

// do the same as previous function, but after all shows fileLoadContainer
$(document).on("click", "#choseFile", function () {
    $(questionsContainer).empty();
    fadeOutContainer(resultContainer);
    setTimeout(function () {
        clearData();
        fadeInContainer(fileLoadContainer);
    }, animationTime);
    $("#file").val("");
    obj = { questions: []
    };
});

// clear all data before starting a new test
function clearData() {
    $(resultLabel).empty();
    $(questionCountLabel).empty();
    $(assessmentLabel).empty();
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

// toggling parameters of the test (checkboxes)
$(document).on("click", ".params-label", function () {
    $("#testParams").slideToggle(animationTime);
});

$(document).on("click", "#wrongAnswersBtn", function () {
    $("#wrongAnswersContainer").slideToggle(animationTime);
});

// after clicking on the option adds border to it (if click on another option in same question - remove borders from other options)
$(document).on("click", "input[type=radio]", function () {
    // gets the name attribute of the option
    let name = $(this).attr("name");
    $("input[name=" + name + "]").each(function (index, element) {
        $(element.parentNode).removeClass("selected-option");
    });
    $(this.parentNode).addClass("selected-option")
});

$("#info-btn").click(function () {
    $("#info-container").slideToggle(animationTime);
});

// function parse data to local object
function parseQuestionToObject(questionId , question) {
    let tempOptions = question.split('\n');
    // first line in question is always question (after splitting question is first in array)
    let questionText = tempOptions[0],
        correctOptionId = 0,
        options = [];

    // remove question from the array with options
    tempOptions.shift();

    for (let i = 0; i < tempOptions.length; i++) {
        let text = tempOptions[i].trim();
        if (text !== "") {
            // before text of the correct option must be "+"
            if (text.substr(0, 1) === '+') {
                correctOptionId = i;
                // after defining correctOptionId, "+" is removed from text of the option
                text = text.substr(1);
            }

            // after that option adds to array
            options.push({
                id:i,
                text: text
            })
        }
    }
    // adding already generated question to array
    addQuestionToObject(questionId, questionText, correctOptionId, options);
}

// function for adding question with options to global array of questions
function addQuestionToObject(id, questionText, answerId , options) {
    obj.questions.push({
        id: id,
        question:questionText,
        answerId:answerId,
        options:options
    });
}

// function is used for shuffling questions and options
function shuffledArray(array) {
    return array.sort(function(){
        return Math.random() - 0.5;
    });
}


// function parse data from text file to object
function parseTxtToObject(event) {
    // gets result from reading the file and split the text
    let array = event.target.result.split(/\n\s*\n|\r\n\s*\r\n/);
    // iterate through array of strings
    for (let i = 0; i < array.length; i++) {
        // if string is not empty - parse it to object
        if (array[i].trim() !== "") {
            parseQuestionToObject(i, array[i])
        }
    }
    addQuestionsWithOptions(obj);
}

function addQuestionsWithOptions(data){
    let isShuffleQuestions = $("#shuffleQuestions").is(":checked"),
        isShuffleOptions = $("#shuffleOptions").is(":checked"),
        isExpressTest = $("#expressTest").is(":checked") && data.questions.length > 30;

    if (isShuffleQuestions)  {
        // if true - shuffle all questions
        data.questions = shuffledArray(data.questions);
    }
    if (isExpressTest) {
        // if true - adds only 30 questions to test and removes other
        data.questions.length = 30;
    }
    $.each(data.questions, function (index, questionItem) {
        let questionId = "question" + questionItem.id,
            questionCount = +index+1 + ") ";

        // adding question to the page
        $("#questions").append(
            "<div class='row mt-5 pt-4' id='"+ questionId +"'>\n" +
            "   <div class='col-12 question-text'>"+ questionCount + questionItem.question +"</div>\n" +
            "</div>"
        );

        if (isShuffleOptions)  {
            // if true - shuffle all options
            questionItem.options = shuffledArray(questionItem.options);
        }
        $.each(questionItem.options, function (index, option) {
            // q - id of the question, v - id of the option
            let optionId = "q" + questionItem.id + "v" + option.id;
            $("#" + questionId).append(
                "<div class='col-12'>" +
                "   <div class='row custom-control custom-radio ml-sm-4 pl-5 pt-2 pb-2 option-2'>\n" +
                "       <input type='radio' class='col-auto custom-control-input' name='q"+ questionItem.id +"' id='" + optionId  + "'>\n" +
                "       <label class='col-12 custom-control-label option-1' for='"+ optionId + "'>"+ option.text +"</label>\n" +
                "   </div>" +
                "</div>"
            );
        })
    });

    // after appending all HTML elements (questions and options), append the "calculateResult" button
    $("#questions").append(
        "<div class=\"row justify-content-center mt-3 mb-3\">\n" +
        "   <div class=\"col-auto btn-orange-primary p-2 mt-3\" id='calculateResult'>Завершити</div>\n" +
        "</div>"
    );

    // shows container with questions
    removeLoadingContainer();
    setTimeout(function () {
        fadeInContainer(questionsContainer);
    }, animationTime)
}

// hide anu container
function fadeOutContainer(container) {
    $(container).fadeOut(animationTime);
}
// hide any container
function fadeInContainer(container) {
    $('html, body').animate({scrollTop: 0}, 800);
    $(container).fadeIn(animationTime);
}

// add loading animation
function addLoadingContainer() {
    let loadingContainer =
        "<div class='row justify-content-center text-center' id='"+ loadingContainerId +"'>\n" +
        "        <div class='col-auto lds-hourglass'></div>\n" +
        "        <div class='col-12 text-center loading-text'>Завантаження</div>\n" +
        "    </div>";
    $("main").append(loadingContainer);
    $("#" + loadingContainerId).fadeIn(animationTime).css("display","flex");
}

// remove loading animation
function removeLoadingContainer() {
    $("#" + loadingContainerId).fadeOut(animationTime);
    setTimeout(function () {
        $("#" + loadingContainerId).remove();
    }, animationTime)
}

// function write wrong answers log
function logQuestion(elem, selectedOptionId, correctOptionId) {
    let logAnswerId = "la" + elem.id;
    $("#wrongAnswersContainer").append(
        "<div class='row mt-1 pt-4' id='"+ logAnswerId +"'>\n" +
        "<div class='col-12 question-text'>"+ elem.question +"</div>\n" +
        "</div>"
    );
    // class name of the option
    let className = "";
    $(elem.options).each(function (index, element) {
        if (+element.id === +correctOptionId) {
            className = correctOptionClassName;
        } else if (+element.id === +selectedOptionId) {
            className = wrongOptionClassName;
        } else {
            className = "";
        }
        $("#" + logAnswerId).append(
            "<div class='col-12'>\n" +
            "   <div class='row ml-sm-4 pl-5 pt-2 pb-2 option-2 "+ className + "'>\n" +
            "       <label class='col-12 option-1'>"+ element.text +"</label>\n" +
            "   </div>\n" +
            "</div>"
        )
    });
}

// show and hide menu
$("#menuBtn").click(function () {
    $("#menuContent").slideToggle(animationTime);
});

// enabled bootstrap tooltips
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});
