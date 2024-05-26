"use strict";
function solveEquation(a,b,c)
{
  let arr = [];
  let d = b**2 - 4*a*c;
  if (d > 0) {
    arr.push((-b + Math.sqrt(d))/(2*a));
    arr.push((-b - Math.sqrt(d))/(2*a));
  }
  else if (d === 0){
    arr.push(-b/(2*a));
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let monthlyPercent = percent / 100 / 12;
	let loanAmount = amount - contribution;
	let monthlyPayment = loanAmount * (monthlyPercent + monthlyPercent / (Math.pow((1 + monthlyPercent), countMonths) - 1));
	let totalAmount = monthlyPayment * countMonths;

	return Number(totalAmount.toFixed(2));
}

console.log(calculateTotalMortgage(10, 0, 50000, 12)); // Вывод: 52749.53
console.log(calculateTotalMortgage(10, 1000, 50000, 12)); // Вывод: 51694.54
console.log(calculateTotalMortgage(10, 0, 20000, 24)); // Вывод: 22149.56
console.log(calculateTotalMortgage(10, 1000, 20000, 24)); // Вывод: 21042.09
console.log(calculateTotalMortgage(10, 20000, 20000, 24)); // Вывод: 0
console.log(calculateTotalMortgage(10, 0, 10000, 36)); // Вывод: 11616.19
console.log(calculateTotalMortgage(15, 0, 10000, 36)); // Вывод: 12479.52



