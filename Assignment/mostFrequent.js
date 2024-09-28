let scores = [50,21,76,52,50,67,99,50]

let result = getFrequent(scores);


console.log(result);


function getFrequent(array){

	let size = array.length;
	let maxCount = 0;
	
	let frequent = [];

	for(count = 0; count < size; count++){

		let counter = 0;
	
		for (number = 0; number < size; number++){
			if(array[count] == array[number])counter++;
	
			if(counter > maxCount){

				maxCount = counter;
				frequent = array[count];
			}

		}
	}
	return frequent;
}
