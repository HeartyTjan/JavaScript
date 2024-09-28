

let scores = [70,56,67,87,63,78];



let result = processGrades(scores);
console.log(result);



function processGrades(array){

	outputArray(array);
	
	console.log("Class average is : " + Math.round(getAverage(scores)* 100) / 100);

	console.log("Lowest grade is : " + getMin(scores));
		
	console.log("Highest grade is : " + getMax(scores));

	displayBarChat(scores);



}


function getAverage(array){

	let total = 0;
	let average = 0;
	for(let number of array){
	
		total += number;

	}
	average = total / array.length;
	
	return average;
	
}


function getMax(array){

	let max = array[0];

	for(number of array){
		
		if (number > max) max = number;


	}
	return max;
}

function getMin(array){

	let min = array[0];

	for(number of array){
		
		if (number < min) min = number;


	}
	return min;
}

function outputArray(array){

	let size = array.length;
	let studentCount = 1;
	
	console.log("Grade of student in the class :");
	console.log();

	for (let count = 0; count < size; count++){

		console.log("Student " + studentCount + ": " + array[count]);

		studentCount++;	

	}

}

function displayBarChat(array){

	let size = array.length;
	let frequency = [];
	let index = 0
	let counter = 0;
	let startCount = 0;
	let endCount = 9;

	for (integer = 0; integer < 11; integer++){
		
		for (digit of array){
			
			if (digit >= startCount &&  digit <= endCount)counter++
			
						
		}
		
		frequency[index] = counter;
		
		index++;
		counter = 0;
		
		startCount += 10;
		endCount += 10;

		if (endCount > 99) endCount = 100;

		if (integer >=10) break;
		
	}
	
	console.log();
	console.log("Student Grade distribution below : ");
	console.log();
	
	
	for (count = 0; count < frequency.length; count++){

		if (count == 10)console.log(100 + " : ")

		else process.stdout.write(count * 10 + '-' + (count * 10 + 10 - 1 ) + " : ");

		for (let counter = 0; counter < frequency[count]; counter++){

			process.stdout.write("*");
		}

		console.log();
	}
	
}