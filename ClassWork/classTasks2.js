let number = 1;
result = 0;
while (result <= 20){

	result = number * 2;
	console.log(result);
	number++;
}

console.log();



let geraldBalance =  500;
const withdrawAmount = 50;

do{

	geraldBalance -= withdrawAmount;
	console.log("New Balance" + " "+ geraldBalance);
	

}while(geraldBalance > 0);

console.log();



let rocketTimer = 10;

while(rocketTimer >= 1){
	console.log("count down" + " " + rocketTimer);
	rocketTimer--

	if(rocketTimer == 0) console.log("Lift Off");
}