const ps = require("prompt-sync");
const prompt = ps();


const numberOfTimes = Number(prompt("Enter number of value: "));

let max = 0;
let mini = 0;
for(count = 1; count <= numberOfTimes; count++){

	number = Number(prompt("Enter value: "));

	mini = number

	if(number > max)max = number;
	if(number < mini)mini = number;
	

}

sumOfMinMax = max + mini;
console.log(max);
console.log(mini);
console.log(sumOfMinMax);