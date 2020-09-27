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
        question: "How many bricks is the Empire State Building made of?",
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

// Current question
let question_number = 0;

// Correct answers
let correct = 0;

// Wait for page to load
document.addEventListener("DOMContentLoaded", () => {

    // Hide timer and # correct questions
    document.querySelector("#countdown").style.display = "none";
    document.querySelector(".correct").style.display = "none";
    
    // Hide play again button
    playagain = document.querySelector("#playagain");
    playagain.style.display = "none"

    // Start quiz
    start = document.querySelector("#start");
    start.addEventListener("click", () => {
        
        // Hide start button
        start.style.display = "none";
        
        // Load question and start countdown
        load_question();
        setInterval(count, 1000);
        document.querySelector("#countdown").style.display = "block";
        document.querySelector(".correct").style.display = "block";   
    });
});

let counter = 100;

function count() {
    if (counter > 0) {
        counter--;
        document.querySelector("#counter").innerHTML = counter;
    }

    else {
        game_over();
    }    
}

function game_over() {
    document.querySelector("#question").innerHTML = "Quiz complete!";
                
                // Remove option buttons
                document.querySelector("#options").style.display = "none";

                // Hide timer
                document.querySelector("#countdown").style.display = "none";
                
                // Play again
                playagain.style.display = "initial";
                playagain.addEventListener("click", () => {
                    location.reload();
                });
};


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
                game_over();
            }

            else {
                // Load next question
                load_question()
            }
        }
    });
}