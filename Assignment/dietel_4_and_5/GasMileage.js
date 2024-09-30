const ps = require("prompt-sync");
const prompt = ps();

let totalMiles = 0;
let totalGallon = 0;

let  milesDriven = 0;
let gallonUsed = 0;

milesDriven = Number(prompt("Enter miles Driven : ")); 

while(milesDriven != -1){ 

	
	gallonUsed = Number(prompt("Enter gallonUsed : ")); 
	
	totalMiles += milesDriven;
	totalGallon += gallonUsed;

	milesPerGallon = gallonUsed / milesDriven ;
	console.log();

	console.log("Miles per gallon : " + Math.round(milesPerGallon *100)/100);
	console.log();
	milesDriven = Number(prompt("Enter miles Driven or (-1 to end): ")); 

}

let totalMilesPerGallon = totalGallon / totalMiles;

console.log("Total miles per gallon : " + Math.round(totalMilesPerGallon * 100)/100);