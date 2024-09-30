const ps = require("prompt-sync");
const prompt = ps();

const wages = 200;
const percent = 9 / 100;

let itemSales = 0;


let totalSales = 0;
while (itemSales != -1){

	itemSales = Number(prompt("Enter agent sales amount or (-1 to end) : "));
	
	totalSales += itemSales;
}

let agentEarnings = wages + (totalSales * percent);
console.log("Agent Earning " + agentEarnings);