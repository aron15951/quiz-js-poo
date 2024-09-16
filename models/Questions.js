export class Question {

    /**
     * 
     * @param {string} enunciate this is the text of the question
     * @param {string[]} choices this is the choices of the question
     * @param {string} answer this is the answer of the question
     */

    constructor(enunciate, choices, answer) {
        this.enunciate = enunciate;
        this.choices = choices;
        this.answer = answer;
    }

    /**
     * 
     * @param {string} choice some text to guess
     * @returns {boolean} return true if the choice is correct
     */
    correctAnswer(choice) {
        return choice === this.answer;
    }

}




