const addQuestion = document.getElementById('submit-button');

function addNewQuestion() {

    const questionText = document.getElementById('question-text').value;
    const correctAnswer = document.getElementById('correct-answer').value;
    const incorrectAnswers = [
        document.getElementById('incorrect-answer1').value,
        document.getElementById('incorrect-answer2').value,
        document.getElementById('incorrect-answer3').value
    ];
    const category = document.getElementById('category').value;
    const difficulty = document.getElementById('difficulty').value;
    const questionId = Date.now();

    const newQuestion = new Question(questionId, questionText, correctAnswer, incorrectAnswers,difficulty, category);

    const questionObject = {
        id: newQuestion.id,
        question: newQuestion.question,
        correctAnswer: newQuestion.correctAnswer,
        incorrectAnswers: newQuestion.incorrectAnswers,
        difficulty: newQuestion.difficulty,
        category: newQuestion.category
    };

    quizManager.addQuestion(
        questionObject.id,
        questionObject.question,
        questionObject.correctAnswer,
        questionObject.incorrectAnswers,
        questionObject.difficulty,
        questionObject.category
    );

}

const quizManager = new QuizManager();
addQuestion.addEventListener('click', addNewQuestion);
