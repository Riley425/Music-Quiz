const users = {
    'user1': 'password1',
    'user2': 'password2'
};

const quizzes = {
    quiz1: [
        {question: "Question 1?", answers: ["A", "B", "C", "D", "E"], correct: 0},
        {question: "Question 2?", answers: ["A", "B", "C", "D", "E"], correct: 1},
        {question: "Question 3?", answers: ["A", "B", "C", "D", "E"], correct: 2},
        {question: "Question 4?", answers: ["A", "B", "C", "D", "E"], correct: 3},
        {question: "Question 5?", answers: ["A", "B", "C", "D", "E"], correct: 4},
        {question: "Question 6?", answers: ["A", "B", "C", "D", "E"], correct: 0},
        {question: "Question 7?", answers: ["A", "B", "C", "D", "E"], correct: 1},
        {question: "Question 8?", answers: ["A", "B", "C", "D", "E"], correct: 2},
        {question: "Question 9?", answers: ["A", "B", "C", "D", "E"], correct: 3},
        {question: "Question 10?", answers: ["A", "B", "C", "D", "E"], correct: 4}
    ],
    quiz2: [
        {question: "Question 1?", answers: ["A", "B", "C", "D", "E"], correct: 0},
        {question: "Question 2?", answers: ["A", "B", "C", "D", "E"], correct: 1},
        {question: "Question 3?", answers: ["A", "B", "C", "D", "E"], correct: 2},
        {question: "Question 4?", answers: ["A", "B", "C", "D", "E"], correct: 3},
        {question: "Question 5?", answers: ["A", "B", "C", "D", "E"], correct: 4},
        {question: "Question 6?", answers: ["A", "B", "C", "D", "E"], correct: 0},
        {question: "Question 7?", answers: ["A", "B", "C", "D", "E"], correct: 1},
        {question: "Question 8?", answers: ["A", "B", "C", "D", "E"], correct: 2},
        {question: "Question 9?", answers: ["A", "B", "C", "D", "E"], correct: 3},
        {question: "Question 10?", answers: ["A", "B", "C", "D", "E"], correct: 4}
    ]
};

let currentQuiz = null;
let currentUser = null;

function login() {
    const username = document.getElementById('username').value;
    if (users[username]) {
        currentUser = username;
        document.getElementById('user-name').textContent = username;
        showPage('home-page');
    } else {
        alert('Invalid username!');
    }
}

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
}

function startQuiz(quizId) {
    currentQuiz = quizId;
    const quiz = quizzes[quizId];
    const questionsContainer = document.getElementById('questions-container');
    questionsContainer.innerHTML = '';
    quiz.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = `
            <h3>${q.question}</h3>
            <div class="answers">
                ${q.answers.map((answer, i) => `<label><input type="radio" name="q${index}" value="${i}"> ${answer}</label>`).join('')}
            </div>
        `;
        questionsContainer.appendChild(questionDiv);
    });
    showPage('quiz-page');
}

function submitQuiz() {
    const quiz = quizzes[currentQuiz];
    let score = 0;
    quiz.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && parseInt(selected.value) === q.correct) {
            score++;
        }
    });
    const percentage = (score / quiz.length) * 100;
    document.getElementById('score').textContent = `You got ${score} out of ${quiz.length} correct (${percentage}%)`;
    showPage('results-page');
}

function goHome() {
    showPage('home-page');
}
