const ps = require("prompt-sync");
const prompt = ps();


let max = 0;

for(count = 1; count <= 10; count++){

	let number = Number(prompt("Enter number : "));
	
	if (number > max)max = number;
	
}
console.log(max);


