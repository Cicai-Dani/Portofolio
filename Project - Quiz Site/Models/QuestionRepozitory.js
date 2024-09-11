class Question {
    id;
    category;
    difficulty;
    question;
    correctAnswer;
    incorrectAnswers;

    constructor(id, question, correctAnswer, incorrectAnswers, difficulty, category) {
        this.id = id;
        this.question = question;
        this.correctAnswer = correctAnswer;
        this.incorrectAnswers = incorrectAnswers;
        this.difficulty = difficulty;
        this.category = category;
    }
}

const apiUrl = "http://localhost:3000/questions"

class QuizManager {
    constructor() {
        this.questions = [];
    }

    loadQuestions() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                this.questions = data;
            })
            .catch(error => console.error('Error:', error));
    }

    saveQuestions() {
        fetch(apiUrl, {
            method: 'POST',
            body: JSON.stringify(this.questions),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => console.log('Questions has been saved:', data))
            .catch(error => console.error('Error. Questions not saved:', error));
    }

    addQuestion(id, question, correctAnswer, incorrectAnswers, difficulty, category) {
        const newQuestion = new Question(id, question, correctAnswer, incorrectAnswers, difficulty, category);
        this.questions.push(newQuestion);
        this.saveQuestions();
    }

    removeQuestion(id) {
        this.questions = this.questions.filter(question => question.id !== id);
        this.saveQuestions();
    }
}
