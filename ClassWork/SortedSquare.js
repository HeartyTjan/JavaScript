function getSquare(number){
	
	let square = 1;

	for(count = 1; count <= 2; count++){

		square = square * number;

	}
	return square;

}

function getSquareArray(array){

	let size = array.length;
	let squareOfArray = [];

	let count = 0;

	for (element of array){
	
		squareOfArray[count] = getSquare(element);
		count++;

	}

	return squareOfArray;

}

function getSortedSquare(array){

	let size = array.length;
	let temp = 0;
	let position = 0;

	for(count = 0; count < size; count++){




		position = count;
		
		for (counter = count + 1; counter < size; counter++){

			if(array[counter] < array[position]) position = counter;

		}
		temp = array[position];
		array[position] = array[count];
		array[count] = temp;

	}	
	console.log(array)
}


let numbers = [2,1,4,3,5,9];

let squareOfArray = getSquareArray(numbers);

console.log(getSortedSquare(squareOfArray));
