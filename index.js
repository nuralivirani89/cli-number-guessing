#! usr/bin/env node
import inquirer from "inquirer";
// computer generated number
// user guessed number
// compare computer generated number with user guessed number
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number from 1 to 10: ",
    }
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congratulations! You guessed right Number");
}
else {
    console.log("You guessed wrong Number");
}
