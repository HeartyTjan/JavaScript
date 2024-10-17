// Tasks 1
let person = {
	
	name : "Alice",
	
	age : 30,
	
	city : "wonderland",

};
let count = 0;

for(info in person){
	count++;
}

console.log("Total count of object properties : " + count);

//Tasks 2

function isLeapYear(year){

	if (year < 1900) return false;

	else if (year % 4 == 0 || year % 400 == 0)return true;

	else return false;
	
}
console.log(); 
console.log("is it leap year : " + isLeapYear(1700));

// Tasks 3
let student = {
	

	mathe : 90,
	
	english : 85,

	science : 88,
	
}

console.log(); 
console.log("Subject Score"); 
for(info in student){

	console.log(`${info} : ${student[info]}`);
}

//Tasks 4
function convertToFahrenheit(celsius){

	return celsius * (9 / 5) + 32;

}

console.log(); 
console.log("Fahrenheit is : " + convertToFahrenheit(46))

//Taks 5
const david = {

	groceries : 150,
	dining : 100,
	transportation : 50,
	entertainment : 80,

};

let total = 0;
for(cost in david){

	total += david[cost];
};

console.log(); 
console.log("Total amount spent is : " + total); 