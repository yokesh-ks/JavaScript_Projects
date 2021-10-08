const quizData = [
    {
        question: 'How can you get the total number of arguments passed to a function?',
        a: 'Using args.length property',
        b: 'Using arguments.length property',
        c: 'Both of the above',
        d: 'None of the above',
        correct: 'b'
    }, {
        question: 'Which built-in method calls a function for each element in the array?',
        a: 'while()',
        b: 'loop()',
        c: 'forEach()',
        d: 'None of the above',
        correct: 'c'
    }, {
        question: 'Which built-in method returns the calling string value converted to lower case?',
        a: 'toLowerCase()',
        b: 'toLower()',
        c: 'changeCase(case)',
        d: 'None of the above.',
        correct: 'a'
    }, {
        question: ' Which built-in method combines the text of two strings and returns a new string?',
        a: 'append()',
        b: 'concat()',
        c: 'attach()',
        d: 'None of the above.',
        correct: 'b'
    }, {
        question: 'Which of the following is the correct syntax to print a page using JavaScript?',
        a: 'window.print();',
        b: 'browser.print();',
        c: 'navigator.print();',
        d: 'document.print();',
        correct: 'a'
    }
]

const quiz = document.getElementById("quiz");
const questionE1 = document.getElementById('question');
const a_option = document.getElementById("a_option");
const b_option = document.getElementById("b_option");
const c_option = document.getElementById("c_option");
const d_option = document.getElementById("d_option");
const submitBtn = document.getElementById("submit-btn");
const answerE1s = document.querySelectorAll(".answer");

let currentQuestion = 0;

let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuestion];

    questionE1.innerText = currentQuizData.question;
    a_option.innerText = currentQuizData.a;
    b_option.innerText = currentQuizData.b;
    c_option.innerText = currentQuizData.c;
    d_option.innerText = currentQuizData.d;

}

function getSelected() {
   

    let answer = undefined;

    answerE1s.forEach((answerE1) => {
        if(answerE1.checked){
            answer =  answerE1.id;
        }
    });

    return answer;
}

function deselectAnswers(){
    answerE1s.forEach((answerE1) => {
        answerE1.checked = false;
    })
}

submitBtn.addEventListener("click", function(){
    
    const answer = getSelected();
    if(answer){
        console.log(currentQuestion);
        if(answer === quizData[currentQuestion].correct){
            score++;
        }
        currentQuestion++;
        if(currentQuestion < quizData.length){
            loadQuiz();
        } else{
            quiz.innerHTML = `
            <h2>
                You answered correctly at ${score}/${quizData.length} questions.
            </h2>
            <button oncLick="location.reload()">Retake</button>`;
        }


    }
})