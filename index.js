
function toggleAnswer(element) {
    var answerId = element.getAttribute('data-answer-id');
    var answerDiv = document.getElementById(answerId);
    var main = "main";


    if (answerDiv.style.display === "block") {
        answerDiv.style.display = "none";
        element.src = "assets/images/icon-plus.svg";
    } else {
        answerDiv.style.display = "block";
        element.src = "assets/images/icon-minus.svg";
    }
}




