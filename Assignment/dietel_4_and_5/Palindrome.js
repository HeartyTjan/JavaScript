const ps = require("prompt-sync");
const prompt = ps();

let number = Number(prompt("Enter number : "));

let originalNumber = number;

let reverse = 0;

while (number != 0){

	reverse = reverse * 10 + number % 10;
	number = Math.floor(number / 10);


}
if (originalNumber != reverse)console.log("It is not a palindrome");
else console.log("It is a palindrome");




