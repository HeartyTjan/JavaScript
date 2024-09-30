 for(count = 1; count <= 10; count++){

		
	for(space = 10; space > count; space--){

		process.stdout.write(" ");

	}

	for (counter = 1; counter <= count; counter++){

		process.stdout.write("*");

	}
	console.log();
	
}
