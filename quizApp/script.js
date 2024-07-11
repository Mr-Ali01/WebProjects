const questions = [
    {
        question: "Which is largest animal in the wordl?",
        answers:[
            {text: "Shark", correct: false},
            {text: "Blue whale", correct: true},
            {text: "Elephent", correct: false},
            {text: "Giraffe", correct: false},
        ]
    },
    {
        question: "Who is richest man in the wordl?",
        answers:[
            {text: "Mukesh Ambani", correct: false},
            {text: "Jeff Bezos", correct: false},
            {text: "Bernard Arnault", correct: true},
            {text: "Elon musk", correct: false},
        ]
    },
    {
        question: "Which is the largest desert in the wordl?",
        answers:[
            {text: "Kalahari", correct: false},
            {text: "Gobi", correct: false},
            {text: "Sahara", correct: false},
            {text: "Antarctica", correct: true},
        ]
    },
    {
        question: "Which is the smallest continent in the wordl?",
        answers:[
            {text: "Asia", correct: false},
            {text: "Australia", correct: true},
            {text: "Arctic", correct: false},
            {text: "Africa", correct: false},
        ]
    },
]; 

let questionElement = document.getElementById("question");
let answerButtons = document.getElementById("answer-buttons");
let nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML ="Next";
    console.log(currentQuestionIndex);
    console.log(score);
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex]
    console.log(currentQuestion);
    let questionNo = currentQuestionIndex + 1;
    console.log(questionNo)
    questionElement.innerHTML = questionNo+". "+currentQuestion.question;

    currentQuestion.answers.forEach( (answer) =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer);
    })
}

// showQuestion();
function selectAnswer(e){
    const selectedBtn = e.target;
    console.log(selectedBtn);
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach( (button) =>{
       
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display ="block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})
startQuiz();