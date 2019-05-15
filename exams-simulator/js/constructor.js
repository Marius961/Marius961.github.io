let questionId = 0,                             // index for questions you have created
    addOptionBtn = $("#addOptionBtn"),          // button which used to add new option to question
    optionsContainer = $("#options"),           // container with options
    saveQuestionBtn = $("#saveQuestionBtn"),    // button which used to save question to local object
    questionBox = $("#question"),               // question input
    generateFileBtn = $("#generateFileBtn"),    // button which allows user to generate a file
    downloadBtnId = "downloadFile",             // id of button for downloading generated file
    previewContainer = $("#previewContainer");  // container for preview questions after adding


// object which contains questions
let obj = {
    questions: []
};


$(document).ready(function () {

    $(addOptionBtn).click(function () {
        // add new input for new option
        $(optionsContainer).append(
            "  <div class='row pl-5 p-2'>\n" +
            "       <label class='col-12'>Введіть варіант відповіді</label>\n" +
            "       <input class='col-12' type='text'>\n" +
            "  </div>"
        )
    });

    // save the question with all options to local object
    $(saveQuestionBtn).click(function () {
        let options = [];

        // variable to save the correct option id
        let correctAnswer = "";

        // replace all ' to "" from question, because JSON does not work correctly with "'"
        let question = $(questionBox).val().replace(/[']/g, "\"");

        // create preview for question, in order to choose a user saw what he added
        createQuestionPreview(question);

        let i = 0;
        let inputText = "";
        // iterate through all inputs in optionsContainer
        $(optionsContainer).find("input").each(function (index, input) {
            inputText = $(input).val();
            if (inputText) {

                // replace all ' to "" from option
                inputText = inputText.replace(/[']/g, "\"");

                // if text of the option starts with "+" (it's a correct option marker),
                if (inputText.substr(0, 1) === '+' && !correctAnswer) {

                    // the option marked as correct
                    correctAnswer = +i;

                    // remove "+" from the text of the option
                    inputText = inputText.substr(1);
                }
                createOptionPreview(inputText);

                // add created option to array with other options of this question
                options.push({
                    id : i,
                    text : inputText});

                // if index of input is 0, the field is cleared
                if (index === 0) $(this).val("");
                // else field is removed
                else $(this).parent().remove();

                $(questionBox).val("");
                i++;
            }
        });
        addQuestion(question, correctAnswer, options);
        $(generateFileBtn).css("display", "block");
    });
});

// by clicking on this button user can generate the file with his questions
$(generateFileBtn).click(function () {
    if (obj.questions.length > 1) generateFile();
    else alert("Спочатку потрібно додати хочаб 2 запитання");
});

// append question to array with other questions
function addQuestion(question, answerId, options) {
    obj.questions.push({
        id : questionId,
        question : question,
        answerId : answerId,
        options : options
    });
    questionId++;
    $("#downloadFile").remove();
}


function generateFile() {
    // remove old download button with link if it exist
    $("#" + downloadBtnId).remove();

    // generate link to JSON file which will be created from JS object (obj)
    let data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));
    createDownloadBtn(data);
}

// create a download button which allows download the file with questions
function createDownloadBtn(data) {
    $("#downloadContainer").append(
        "<div class='row' id='"+ downloadBtnId +"'>\n" +
        "        <a class='col-12 download-btn text-center' href='data:"+ data + "' download='tests.json'>Завантажити файл</a>\n" +
        "</div>"
    )
}

// 2 functions that add HTML element with the text of the question to previewContainer
function createQuestionPreview(questionText) {
    $(previewContainer).append("<div class='col-12 question-text'>"+ questionText + "</div>")
}

function createOptionPreview(optionText) {
    $(previewContainer).append("<div class='col-12 option-1 pl-5'>* "+ optionText + "</div>")
}