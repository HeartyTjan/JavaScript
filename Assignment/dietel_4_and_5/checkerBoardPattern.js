const ps = require("prompt-sync");
const prompt = ps();


let size = Number(prompt("Enter length of triangle : "));

for(count = 1; count <= size; count++){

	for(counter = 1; counter <= size ; counter++){

		if (count % 2 == 0) {
			process.stdout.write(" ");
			process.stdout.write(" *");
		}
		else process.stdout.write(" * ");

	}
	console.log();

}