
document.getElementById("result-section").style.display="none";

let number1Ele=document.getElementById("number1")
let number2Ele=document.getElementById("number2")
let number3Ele=document.getElementById("number3")


let buttonEle = document.getElementById("button");

buttonEle.addEventListener("click",function (){

let  number1 = parseInt(number1Ele.value);
let  number2 = parseInt(number2Ele.value);
let  number3 = parseInt(number3Ele.value);


if(number1 > number2 && number1 > number3 ){
	
	if(number2 > number3){
		document.getElementById("result").innerText = number1+" , "+number2+" , "+number3;
	}
	else{
		document.getElementById("result").innerText = number1+" , "+number3+" , "+number2;
	}
}
else if(number2 > number1 && number2 > number3 ){
	
	if(number1 > number3){
		
		document.getElementById("result").innerText = number2+" , "+number1+" , "+number3;
	}
	else{
		document.getElementById("result").innerText = number2 +" , "+number3+" , "+number1;
	}
}
else {
	
	if(number2 > number1){
		document.getElementById("result").innerText = number3+" , "+number2+" , "+number1
	}
	else{
		document.getElementById("result").innerText = number3+" , "+number1+" , "+number2;
	}	
}
document.getElementById("result-section").style.display="block";


document.getElementById("number1").value="";
document.getElementById("number2").value="";
document.getElementById("number3").value="";


});