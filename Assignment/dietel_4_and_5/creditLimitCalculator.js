let accountNumber = 210567161;
let beginningBalance = 1000;
let totalCharges = 7000;
let totalCredit = 6000;
let allowedCredit = 1000;

let newBalance = beginningBalance + totalCharges - totalCredit;
console.log("New bal " + newBalance);

if (newBalance >= allowedCredit){

	console.log("Credit Limit exceeded");
}