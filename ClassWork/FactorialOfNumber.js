
//Tasks 1
let number = 10;
factorial = 1;
process.stdout.write("Factorial is : ")
while(number != 0){
  
	factorial *= number;
	number--; 
	
	if(factorial > 1000)break;
	
}

console.log(factorial);


//Tasks 2
let count = 50;

process.stdout.write("Count down : ");
while(count !=0){

	process.stdout.write(count + " ");

	count -= 5;

} 

console.log();

let sentence = "hello world";
vowel = "aeiou";
let letterCount = 0;
for(count = 0; count < sentence.length; count++){

	for(counter = 0; counter < vowel.length; counter++){
		
		if(sentence[count] == vowel[counter])letterCount++;
		
	}	
}

console.log("Vowel count is : "  + letterCount);

// Tasks 4
let numbers = [10,12,25,9,20,15,];
total = 0;

function getSumArray(array){

	for(number of numbers ){
		
		total += number	
	}
	return total;
}


console.log("Total of numbers in array : " + getSumArray(numbers));

// Tasks 5
let width  = 15;
let height = 10;


function calculateArea(width,height){

	
	return 0.5 * (width * height);

	
}

console.log("Area of the rectangle is : " + calculateArea(width, height));


