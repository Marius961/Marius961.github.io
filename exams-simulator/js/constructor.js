let questionId = 0;
let obj = {
    questions: []
};

$(document).ready(function () {
    $("#addVariant").click(function () {
        $("#variants    ").append("" +
            "  <div class=\"row pl-5 p-2\">\n" +
            "       <label class=\"col-12\">Введіть варіант відповіді</label>\n" +
            "       <input class=\"col-12\" type=\"text\">\n" +
            "  </div>")
    });

    $("#saveQuestion").click(function () {
        let variants = [];
        let correctAnswer = "";
        let question = $("#question").val().replace(/[']/g, "\"");
        addQuestionDemo(question);
        alert(question);
        let i = 0;
        $("#variants").find("input").each(function (index, element) {
            if ($(element).val()) {
                let text = $(element).val().replace(/[']/g, "\"");
                if (text.substr(0, 1) === '+' && !correctAnswer) {
                    correctAnswer = +i;
                    text = text.substr(1);
                }
                addVariantDemo(text);
                variants.push({
                    id: i,
                    text:text,
                });
                i++;
                if (index === 0) {
                    $(this).val("")
                } else {
                    $(this).parent().remove();;
                }
                $("#question").val("");
            }
        });
        addQuestion(question, correctAnswer, variants)
        $("#generateFile").css("display", "block");
    });
});

$("#generateFile").click(function () {
    if (obj.questions.length > 1) {
        generateFile();
    } else {
        alert("Спочатку потрібно додати хочаб 2 запитання")
    }
})

function addQuestion(question, answerId, variants) {
    obj.questions.push({
        id : questionId,
        question : question,
        answerId : answerId,
        variants : variants
    });
    questionId++;
    $("#downloadFile").remove();
}


function generateFile() {
    $("#downloadFile").remove();
    let data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));
    $("#downloadContainer").append("    " +
        "<div class='row' id='downloadFile'>\n" +
        "        <a class='col-12 download-btn text-center' href='data:"+ data + "' download='tests.json'>Завантажити файл</a>\n" +
        "</div>")
}


function addQuestionDemo(questionText) {
    $("#demo").append("<div class='col-12 question-text'>"+ questionText + "</div>")
}

function addVariantDemo(variantText) {
    $("#demo").append("<div class='col-12 variant pl-5'>* "+ variantText + "</div>")
}