import { questions } from "../data/questions.js";
import { Quiz } from "../models/Quiz.js";
import { UI } from "../models/UI.js";

/**
 * 
 * @param {Quiz} quiz the main quiz object
 * @param {UI} ui the user interface object
 */
const renderPage = (quiz, ui) => {
    if (quiz.isEnded()) {
        ui.showScores(quiz.score)
    } else {
        ui.showQuestion(quiz.getQuestionIndex().enunciate)
        ui.showChoices(quiz.getQuestionIndex().choices, (currenChoice) => {
            quiz.guess(currenChoice);
            renderPage(quiz, ui);
        })
        ui.showProgress(quiz.questionIndex, quiz.questions.length)
    }
}

function main() {
  const quiz = new Quiz(questions);
  const ui = new UI();
  
  renderPage(quiz, ui)
}


main();
