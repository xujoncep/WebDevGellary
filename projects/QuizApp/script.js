const questions = [
    {
        question: "Which programming language is known as the language of the web?",
        answers: [
            { text: "Python", correct: false },
            { text: "JavaScript", correct: true },
            { text: "C++", correct: false },
            { text: "Java", correct: false },
        ]
    },
    {
        question: "Which keyword is used to create a variable in JavaScript?",
        answers: [
            { text: "var", correct: true },
            { text: "let", correct: true },
            { text: "int", correct: false },
            { text: "string", correct: false },
        ]
    },
    {
        question: "Which of the following is a JavaScript framework?",
        answers: [
            { text: "React", correct: true },
            { text: "Django", correct: false },
            { text: "Laravel", correct: false },
            { text: "Flask", correct: false },
        ]
    },
    {
        question: "What does CSS stand for?",
        answers: [
            { text: "Cascading Style Sheets", correct: true },
            { text: "Colorful Style Sheets", correct: false },
            { text: "Computer Style Sheets", correct: false },
            { text: "Creative Style Sheets", correct: false },
        ]
    },
    {
        question: "Which method is used to print a message to the console in JavaScript?",
        answers: [
            { text: "print()", correct: false },
            { text: "console.log()", correct: true },
            { text: "write()", correct: false },
            { text: "display()", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    nextButton.style.display = "none"; // Hide the next button initially
    showQuestion();
}

function showQuestion() {
    // Clear previous answers
    answerButtons.innerHTML = "";

    // Show the current question
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerHTML = (currentQuestionIndex + 1) + ". " + currentQuestion.question;

    // Show the answer buttons
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });

    nextButton.style.display = "none"; // Hide the next button until an answer is selected
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";
    if (correct) {
        score++;
        selectedButton.classList.add("correct");
    } else {
        selectedButton.classList.add("incorrect");
    }

    // Disable all buttons after selecting an answer
    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
    });

    // Show the next button
    nextButton.style.display = "block";
    if (currentQuestionIndex < questions.length - 1) {
        nextButton.addEventListener("click", nextQuestion);
    } else {
        nextButton.innerHTML = "Finish";
        nextButton.addEventListener("click", showScore);
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
}

function showScore() {
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    answerButtons.innerHTML = "";
    nextButton.innerHTML = "Restart";
    nextButton.removeEventListener("click", showScore);
    nextButton.addEventListener("click", startQuiz);
}

startQuiz();

