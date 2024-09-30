 for(count = 1; count <= 10; count++){

		
	for(space = 1; space < count; space++){

		process.stdout.write(" ");

	}

	for (counter = 10; counter >= count; counter--){

		process.stdout.write("*");

	}
	console.log();
	
}
