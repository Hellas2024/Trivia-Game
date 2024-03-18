const prompt = require ("prompt-sync")()

console.log("Welcome to the Computer Hardware Quiz!")

let correctAnswers = 0;

const answer1 = prompt("What is the brain of the computer? ");
const correct_answer1 = "CPU";

if (answer1.toUpperCase() === correct_answer1) {
    console.log("You got it correct!");
    correctAnswers = correctAnswers ++;
 } else {
        console.log("You got it wrong.");
    }


const answer2 = prompt("What is the powerhouse of the computer, as to mitochondira in the cell? ");
const correct_answer2 = "GPU";

if (answer2.toUpperCase() === correct_answer2) {
    console.log("You got it correct!");
    correctAnswers = correctAnswers ++;
 } else {
        console.log("You got it wrong.");
    }


const answer3 = prompt("What are the blood vessels of the computer? ");
const correct_answer3 = "MotherBoard";

if (answer3.toUpperCase() === correct_answer3) {
    console.log("You got it correct!");
    correctAnswers = correctAnswers ++;
 } else {
        console.log("You got it wrong.");
    
}

const percent = Math.round((correctAnswers / totalQuestions) * 100);

console.log("You got", correctAnswers, "questions correct!")
console.log("You scored", percent.toString() + "%")
