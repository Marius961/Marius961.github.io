let obj = { questions: []
};
let points = 0;
let animationTime = 150;

$(document).ready(function () {

    function onChange(event) {
        let reader = new FileReader();
        let fileName = event.target.files[0].name;
        let lastIndex = fileName.lastIndexOf('.');
        let type = fileName.substr(lastIndex);
        if (type === ".json") {
            reader.onload = onReaderLoad;
        }
        if (type === ".txt") {
            reader.onload = parseTextFile;
        }

        reader.readAsText(event.target.files[0]);
    }

    function parseTextFile(event) {
        let array = event.target.result.split(/\n\s*\n|\r\n\s*\r\n/);
        for (let i = 0; i < array.length; i++) {
            if (array[i].trim() !== "") {
                generateVariants(i, array[i])
            }
        }
        fadeOutContainer("fileLoadContainer");
        setTimeout(function () {
            addQuestionsWithVariants(obj);
        }, animationTime);
    }

    function onReaderLoad(event){
        obj = JSON.parse(event.target.result);
        fadeOutContainer("fileLoadContainer");
        setTimeout(function () {
            addQuestionsWithVariants(obj);
        }, animationTime)
    }

    function addQuestionsWithVariants(data){
        data.questions = shuffledArr(data.questions);
        $.each(data.questions, function (index, element) {
            let questionId = "question" + element.id;
            $("#questions").append("" +
                "<div class='row mt-5 pt-4' id='"+ questionId +"'>\n" +
                "            <div class='col-12 question-text'>"+ element.question +"</div>\n" +
                "</div>");
            element.variants = shuffledArr(element.variants);
            $.each(element.variants, function (index, variant) {
                $("#" + questionId).append("" +
                    "<div class='col-12 ml-5'>\n" +
                    "  <div class='row align-items-start'>" +
                    "                <input class='col-auto form-check-input' type='radio' name='q"+ element.id +"' id='q"+ element.id + "v" + variant.id +"'>\n" +
                    "                <label class='col variant'>"+ variant.text +"</label>\n" +
                    "</div>" +
                    "            </div>")
            })
        });
        $("#questions").append("        " +
            "<div class=\"row justify-content-center mt-3 mb-3\">\n" +
            "            <div class=\"col-auto btn btn-primary p-1 mt-3\" id=\"calculateResult\">Завершити</div>\n" +
            "        </div>");
        fadeInContainer("questions");

        $("#calculateResult").click(function () {
            let inputsCount = 0;
            $('input:checked').each(function (index, element) {
                let answerId  = $(element).attr("id");
                let intQuestionId = answerId.substr(answerId.lastIndexOf('q') + 1, answerId.lastIndexOf('v')-1);
                let intVariantId = answerId.substr(answerId.lastIndexOf('v') + 1);
                let correctAnswerId = 0;
                for (let i = 0; i < obj.questions.length; i++) {
                    if (+obj.questions[i].id === +intQuestionId) {
                        correctAnswerId = obj.questions[i].answerId;
                        break
                    }
                }
                if (+intVariantId === +correctAnswerId) {
                    points++;
                }
                inputsCount++;
            });
            if (inputsCount === obj.questions.length) {
                fadeOutContainer("questions");
                $("#result").append(points);
                setTimeout(function () {
                    fadeInContainer("resultContainer");
                }, animationTime);
                $("#retry").click(function () {
                    $('input:checked').prop( "checked", false );
                    fadeOutContainer("resultContainer");
                    setTimeout(function () {
                        fadeInContainer("questions");
                        $("#result").empty();
                    }, animationTime);
                });
                $("#choseFile").click(function () {
                    $("#questions").empty();
                    fadeOutContainer("resultContainer");
                    setTimeout(function () {
                        fadeInContainer("fileLoadContainer");
                    }, animationTime);
                    $("#testsFile").val("");
                });
            } else {
                alert("Будь ласка дайте відповідь на всі запитання")
            }
            points = 0;
        });
    }


    document.getElementById('JSONFile').addEventListener('change', onChange);
});


//
function fadeOutContainer(containerId) {
    $("#" + containerId).fadeOut(animationTime);
}

function fadeInContainer(containerId) {
    $("#" + containerId).fadeIn(animationTime);
}


function generateVariants(questionId ,question) {
    let tempVariants = question.split('\n');
    let questionText = tempVariants[0];
    let correctVariantId = 0;
    let varionts = [];
    tempVariants.shift();
    for (let i = 0; i < tempVariants.length; i++) {
        let text= tempVariants[i].trim();
        if (text !== "") {
            if (text.substr(0, 1) === '+') {
                correctVariantId = i;
                text = text.substr(1);
            }
            varionts.push({
                id:i,
                text: text
            })
        }
    }
    addQuestion(questionId, questionText, correctVariantId, varionts);
}

function addQuestion(id, questionText,answerId , variants) {
    obj.questions.push({
        id: id,
        question:questionText,
        answerId:answerId,
        variants:variants
    });
}

function shuffledArr(arr) {
    return arr.sort(function(){
        return Math.random() - 0.5;
    });
}

$("#info-btn").click(function () {
    $("#info-container").slideToggle(animationTime);
})