const questions = [
    {
        question: "Where were the fortune cookies invented?",
        options: ["San Francisco", "Hong Kong", "Guangzhou"],
        answer: "San Francisco"
    },
    {
        question: "What animal cannot stick out their tongue?",
        options: ["Kangaroo", "Crocodile", "Mouse"],
        answer: "Crocodile"
    },

    {
        question: "How many sides does a dodecahedron have?",
        options: ["12", "8", "7"],
        answer: "12"
    },

    {
        question: "Who composed the music for Sonic the Hedgehog 3?",
        options: ["Koji Kondo", "Michael Jackson", "Hans Zimmer"],
        answer: "Michael Jackson"
    },

    {
        question: "What color is the ‘black box’ in an airplane?",
        options: ["Black", "Green", "Orange"],
        answer: "Orange"
    },

    {
        question: "What is Johnny Depp afraid of?",
        options: ["Clowns", "Bears", "Taxes"],
        answer: "Clowns"
    },

    {
        question: "How many teeth does an aardvark have?",
        options: ["5", "32", "None"],
        answer: "None"
    },

    {
        question: "What was Marilyn Monroe’s natural hair color?",
        options: ["Blonde", "Red", "Brown"],
        answer: "Red"
    },

    {
        question: "With how many bricks is the Empire State Building is made of?",
        options: ["10 million", "40 million", "5 million"],
        answer: "10 million"
    },

    {
        question: "On Sunday what is illegal to sell in Columbus, Ohio?",
        options: ["Alcohol", "Bananas", "Cornflakes"],
        answer: "Cornflakes"
    }
];

// Total # of questions
const questionLength = questions.length;

// Curent question
let question_number = 0;

// Correct answers
let correct = 0;

// Wait for page to load
document.addEventListener("DOMContentLoaded", () => {
    load_question();
});

function load_question() {

    document.querySelector("#question").innerHTML = questions[question_number].question;
    const options = document.querySelector("#options");
    options.innerHTML = "";
    for (const option of questions[question_number].options) {
        options.innerHTML += `<button class="option">${option}</button>`;
    }

    // Check if selected answer is correct
    document.querySelectorAll(".option").forEach(option => {
        option.onclick = () => {

            // Get value of option
            const check = option.innerHTML;
            
            // Get answer
            const answer = questions[question_number].answer;
            
            // Check if it is the right answer
            if (check === answer) {
                correct++;
                question_number++;
            }
            
            else {
                question_number++;
            }

            // Update score
            const score = document.querySelector("#correct");
            score.innerHTML = correct + " of " + questionLength;
            
            // If last question
            if (question_number == questionLength){
                
                document.querySelector("#question").innerHTML = "Quiz complete!";
                
                // Remove option buttons
                document.querySelector("#options").style.display = "none";
            }

            else {
                // Load next question
                load_question()
            }
        }
    });
}