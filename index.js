#! /usr/bin/env node 
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter Your Sentence: "
    }
]);
let Characters = answer.Sentence;
let words = answer.Sentence.trim().split(" ");
console.log(Characters);
console.log(Characters.length);
console.log(words);
console.log(words.length);
