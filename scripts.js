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
                //question_number++;
            }
            
            else {
                //question_number++;
            }

            //Update DOM
                // correct = ["0, of, 0"]
                // correct[0] +1
                // correct[2] = total
        }
    });

}