const questions = [
    {
        question: "What is Athena's favorite animal?",
        options: ["jellyfish", "penguins", "otters"],
        answer: "otters"
    },
    {
        question: "What is 10 + 10?",
        options: ["8", "20", "28", "30"],
        answer: "20"
    },

    {
        question: "This is the last question",
        options: ["1", "2", "right", "wrong"],
        answer: "right"
    }
];

let question_number = 0;
let correct = 0;

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

    document.querySelectorAll(".option").forEach(option => {
        option.onclick = () => {

            // Get value of option
            const check = option.innerHTML;
            
            // Get answer
            const answer = questions[question_number].answer;
            
            // Check if it is the right answer
            if (check === answer) {
                correct++;
                console.log("Correct answer");
                question_number++;
            }
            
            else {
                question_number++;
            }

            // Update score
            const score = document.querySelector("#correct");
           
            score.innerHTML = correct + " of " + question_number;
            
            // New question
            load_question()
            

            // If last question: Display game over page
        }
    });

}