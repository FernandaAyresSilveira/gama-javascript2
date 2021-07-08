

//proximo
let newStr = '';

function reverseASrting(str){

	for(let i = str.length - 1;i>=0; i--){
		newStr += str[i];
		console.log(newStr);
	}
}
let resultado2 = reverseASrting('Hello');

//proximo
function converToFahrenheit(value){
	return value * 1.8 + 32;
}
let resultado3 = converToFahrenheit(40);
console.log(`O valor em Fahrenheit é ${resultado3}`);