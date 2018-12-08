let obj = "";
let points = 0;

$(document).ready(function () {

    function onChange(event) {
        let reader = new FileReader();
        reader.onload = onReaderLoad;
        reader.readAsText(event.target.files[0]);
    }

    function onReaderLoad(event){
        obj = JSON.parse(event.target.result);
        fadeOutContainer("fileLoadContainer");
        addQuestionsWithVariants(obj);
    }

    function addQuestionsWithVariants(data){
        $.each(data.questions, function (index, element) {
            let questionId = "question" + element.id;
            $("#questions").append("" +
                "<div class='row mt-5' id='"+ questionId +"'>\n" +
                "            <div class='col-12 question-text'>"+ element.question +"</div>\n" +
                "</div>");

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
            "<div class=\"row justify-content-center mt-3\">\n" +
            "            <div class=\"col-auto btn btn-primary p-1 mt-3\" id=\"calculateResult\">Завершити</div>\n" +
            "        </div>");
        fadeInContainer("questions");



        $("#calculateResult").click(function () {
            let inputsCount = 0;
            $('input:checked').each(function (index, element) {
                let answerId  = $(element).attr("id");
                let intQuestionId = answerId.substr(answerId.lastIndexOf('q') + 1, answerId.lastIndexOf('v')-1);
                let intVariantId = answerId.substr(answerId.lastIndexOf('v') + 1);
                let correctAnswerId = obj.questions[intQuestionId].answerId;
                if (+intVariantId === +correctAnswerId) {
                    points++;
                }
                inputsCount++;
            });
            if (inputsCount === obj.questions.length) {
                fadeOutContainer("questions");
                $("#result").append(points);
                fadeInContainer("resultContainer");
                $("#retry").click(function () {
                    $('input:checked').prop( "checked", false );
                    fadeOutContainer("resultContainer");
                    fadeInContainer("questions");

                    $("#result").empty();
                });
                $("#choseFile").click(function () {
                    $("#questions").empty();
                    fadeOutContainer("resultContainer");
                    fadeInContainer("fileLoadContainer");
                    $("#testsFile").val("");
                });
            } else {
                alert("Будь ласка дайте відповідь на всі запитання")
            }
        });
    }


    document.getElementById('testsFile').addEventListener('change', onChange);
});


//
function fadeOutContainer(containerId) {
    $("#" + containerId).fadeOut(150);
}

function fadeInContainer(containerId) {
    $("#" + containerId).fadeIn(150);
}