let selectedCategory = '';
let selectedDifficulty = '';
let currentQuestionIndex = 0;
let questions = [];
const nextButton = document.getElementById('next-btn');
let score = 0;
let popUp = document.getElementById("pop-up");
let timeoutId;
const cricketSound = document.getElementById(`cricket-sound`);

const playSound = () => {
    cricketSound.play();
}

const resetTimeout = () => {
    if(timeoutId) {
        clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(playSound, 30000);

};

function selectCategory(category) {
    sessionStorage.setItem('selectedCategory', category);
    window.location.href = '../Game-page/quiz-game.html';
}
function retrieveSelectedCategory() {
    selectedCategory = sessionStorage.getItem('selectedCategory');
    if (!selectedCategory) {
        alert(`Category was not selected!`)
        window.location.href = '../Main-page/quiz-main-page.html';
    }
}

function selectDifficulty(difficulty) {
    selectedDifficulty = difficulty;
    retrieveSelectedCategory();
    loadQuestionsByCategoryAndDifficulty(selectedCategory, selectedDifficulty);
}


function loadQuestionsByCategoryAndDifficulty(selectedCategory, selectedDifficulty) {
    const apiURLQuestions = `http://localhost:3000/questions?category=${selectedCategory}&difficulty=${selectedDifficulty}`;

    fetch(apiURLQuestions)
        .then(response => response.json())
        .then(data => {
            questions = data;
            currentQuestionIndex = 0;
            swapClass("difficulty-cnt", "difficulty-cnt", "hidden-class");
            swapClass("quiz-cnt", "hidden-class", "quiz-cnt-visible");
            showQuestion(currentQuestionIndex);
        })
        .catch(error => console.log(error));
}
 

function showQuestion(index) {
    shuffleArray(questions);

    const selectedQuestions = questions.slice(0, 4);
    const question = selectedQuestions[index];

    const questionTitle = document.getElementById('question-title');
    const answersContainer = document.getElementById('answers');

    questionTitle.textContent = question.question;
    answersContainer.innerHTML = '';

    let answers = [question.correct_answer, ...question.incorrect_answers];
    shuffleArray(answers);
    
    answers.forEach((answer, i) => {
        const answerId = `answer-${index}-${i}`;
        const answerInput = document.createElement('input');
        answerInput.type = 'radio';
        answerInput.id = answerId;
        answerInput.name = `question-${index}`;
        answerInput.value = answer;
        answerInput.classList.add('checkbox-btn');
    
        answerInput.addEventListener('change', function() {
            if (this.checked && this.value === question.correct_answer) {
                score++;
                console.log(`Correct answer. Your score is: ${score}`);
            }
            resetTimeout();
        });
    
        const answerLabel = document.createElement('label');
        answerLabel.htmlFor = answerId;
        answerLabel.textContent = answer;
        answerLabel.classList.add('checkbox-label');
    
        answersContainer.appendChild(answerInput);
        answersContainer.appendChild(answerLabel);
    });
    
    if (index === selectedQuestions.length - 1) {
       swapClass(`next-btn`, `next-btn`, `hidden-class`)
       swapClass("submit-btn", "hidden-class", "submit-btn")
    }

    resetTimeout();
}

function getResult() {
    const resultStatement = document.getElementById("result-statement");
    resultStatement.innerText = `Congrats. You answered correctly at ${score} out of 4 questions.`;
    return resultStatement.innerText;
}

function openPopUp() {
    swapClass('quiz-cnt','quiz-cnt-visible','hidden-class');
    swapClass("submit-btn", "submit-btn", "hidden-class");
    getResult();
    popUp.classList.add("pop-up-display");
} 

function closePopUp() {
    popUp.classList.remove("pop-up-display");
    window.location.href = '../Main-page/quiz-main-page.html';
}


nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    showQuestion(currentQuestionIndex);
});
