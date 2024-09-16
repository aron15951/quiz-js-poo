export class UI {
    /**
     * @param {string} text question to render
     */
    showQuestion(text) {
    const questionTitle = document.getElementById("question");
    questionTitle.innerText = text;
    console.log(questionTitle);
    }


    /**
     * @param {string[]} choices the choices of the question
     */
    showChoices(choices, callback) {
        const choicesContainer = document.getElementById('choices');

        choicesContainer.innerHTML = '';
        
        for (let i = 0; i < choices.length; i++) {
            const button = document.createElement('button');
            button.innerText = choices[i];
            button.className = 'button';
            button.addEventListener('click', () => callback(choices[i]));
            choicesContainer.appendChild(button);
            
        }
    }

    /**
     * @param {number} score the score of the quiz
     */
    showScores(score) {
        const gameOverHTML = `
        <h1>Result</h1>
        <h2 id="score">Your score: ${score}</h2>
        `;
        const element = document.getElementById('quiz');
        element.innerHTML = gameOverHTML;
    }

    /**
     * @param {number} currentIndex the current index of the quiz
     * @param {number} total the total number of questions
     */
    showProgress(currentIndex, total) {
        const progressHTML = `
        <div class="progress-bar">
            <div>Question ${currentIndex+1} of ${total+1}</div>
        </div>
        `;
        const element = document.getElementById('progress');
        element.innerHTML = progressHTML;
    }

}