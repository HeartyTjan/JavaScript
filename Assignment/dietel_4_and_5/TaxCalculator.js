const ps = require("prompt-sync");
const prompt = ps();


console.log("  Tax Calculator  ");
console.log("===================");

console.log();

let taxRate = 15 / 100;
let taxRate2 = 20 / 100;
let earning = 0;

while (earning != -1){

	let name = prompt("Enter citizen name : ");
	earning = Number(prompt("Enter citizen earnings : "));
	if (earning == -1)break;

	if (earning <= 30,000){

		calculatedTax = earning * taxRate;
		console.log("Citizen Tax is :" + calculatedTax);
		console.log();
	}
	else {

		calculatedTax = earning * taxRate2;
		console.log("Citizen Tax is  : " + calculatedTax);	
		console.log();
	}



}