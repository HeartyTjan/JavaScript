const ps = require("prompt-sync");
const prompt = ps();




let userOption;
displaySongVerseMenu();

	
while (userOption != 0){

	verseMenuOptions();

}


function gotoUserChoice(){

	let userOption = Number(prompt("Enter prefered option :"));

}

function displaySongVerseMenu(){
	
	let mainSong = `
			
				12 Days of Christmas
			=====================================
			 1 --> A patridge in a pear tree
			 2 --> Two Turtle Doves
			 3 --> Three French Hens
			 4 --> Four Calling Birds
			 5 --> Five Golden Rings
			 6 -->  Six Gesse a-Laying
			 7 --> Seven Swans a-Swimming
			 8 --> Eight Maids a-Milking
			 9 --> Nine Ladies Dancing
			 10 --> Ten Lords a-Leaping
			 11 --> 11. Eleven Pipers Piping
			 12 --> Twelve Drummers Drumming
			 0 --> Quit
			=====================================
			`;

	process.stdout.write(mainSong);

}

function verseMenuOptions(){

		
	let userOption = Number(prompt("Enter prefered option :"));
						
		
	switch (userOption) {
					

				case 1 : process.stdout.write(`
				
							On the first day of Christmas, my true love gave to me
							A Partridge in a Pear Tree

						`);  break;


				case 2 : process.stdout.write(`
				
							On the second day of Christmas, my true love gave to me
							Two turtle doves,
							And a partridge in a pear tree

						`); break;
				
				case 3 : process.stdout.write(`
				
							On the third day of Christmas, my true love gave to me...
							Three French hens,
							Two turtle doves,
							And a partridge in a pear tree.

						`); break;

				case 4 : process.stdout.write(`
				
							On the fourth day of Christmas, my true love gave to me...
							Four calling birds,
							Three French hens,
							Two turtle doves,
							And a partridge in a pear tree.
					
						`); break;

				case 5 : process.stdout.write(`
				
							On the fifth day of Christmas, my true love gave to me...
							Five golden rings,
							Four calling birds,
							Three French hens,
							Two turtle doves,
							And a partridge in a pear tree.

						`); break;

				case 6:	process.stdout.write(`
				
							On the sixth day of Christmas, my true love gave to me...
							Six geese a-laying,
							Five golden rings,
							Four calling birds,
							Three French hens,
							Two turtle doves,
							And a partridge in a pear tree.

						`); break;		
				
				case 7 : process.stdout.write(`
				
							On the seventh day of Christmas, my true love gave to me...
							Seven swans a-swimming,
							Six geese a-laying,
							Five golden rings,
							Four calling birds,
							Three French hens,
							Two turtle doves,
							And a partridge in a pear tree.

						`); break;

				case 8 : process.stdout.write(`
				
							On the eighth day of Christmas, my true love gave to me...
							Eight maids a-milking,
							Seven swans a-swimming,
							Six geese a-laying,
							Five golden rings,
							Four calling birds,
							Three French hens,
							Two turtle doves,
							And a partridge in a pear tree.

						`); break;

				case 9 : process.stdout.write(`
				
							On the ninth day of Christmas, my true love gave to me...
							Nine ladies dancing,
							Eight maids a-milking,
							Seven swans a-swimming,
							Six geese a-laying,
							Five golden rings,
							Four calling birds,
 							Three French hens,
							Two turtle doves,
							And a partridge in a pear tree

						`); break;

				case 10 : process.stdout.write(`
				
							On the tenth day of Christmas, my true love gave to me...
							Ten lords a-leaping,
							Nine ladies dancing,
							Eight maids a-milking,
							Seven swans a-swimming,
 							Six geese a-laying,
							Five golden rings,
							Four calling birds,
							Three French hens,
							Two turtle doves,
							And a partridge in a pear tree...

						`);break;

				case 11 : process.stdout.write(`
				
							On the eleventh day of Christmas, my true love gave to me...
							Eleven pipers piping,
							Ten lords a-leaping,
							Nine ladies dancing,
							Eight maids a-milking,
							Seven swans a-swimming,
							Six geese a-laying,
							Five golden rings,
							Four calling birds,
							Three French hens,
							Two turtle doves,
							And a partridge in a pear tree.

						`);break;
				
				case 12 : process.stdout.write(`
				
							On the twelfth day of Christmas, my true love gave to me...
							Twelve drummers drumming,
							Eleven pipers piping,
							Ten lords a-leaping,
							Nine ladies dancing,
							Eight maids a-milking,
							Seven swans a-swimming,
							Six geese a-laying,
							Five golden rings,
							Four calling birds,
							Three French hens,
							Two turtle doves,
							And a partridge in a pear tree.

						`);break;
				
				case 0 : if (userOption === 0)break;

				
		

		} 
}		 

