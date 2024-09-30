const ps = require("prompt-sync");
const prompt = ps();


let size = Number(prompt("Enter length of triangle : "));

for(count = 1; count <= size;  count++){

	for(counter = 1; counter <= count; counter++){
	
		process.stdout.write("*");

	}
	console.log();
}