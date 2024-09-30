const ps = require("prompt-sync");
const prompt = ps();

let max = 0;
let secondMax = 0;

for(count = 1; count <= 5; count++){

	let number = Number(prompt("Enter number : "));
		
	
	if (number > max){
		secondMax = max;
		max = number;
	}
}
console.log(max);
console.log(secondMax);
