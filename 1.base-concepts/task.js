"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let discriminant = Math.pow(b, 2) - 4 * a * c;
	if (discriminant < 0) {
		// Если дискриминант меньше нуля, корней нет (пустой массив)
		return arr;
	} else if (discriminant === 0) {
		// Если дискриминант равен нулю, вычисляем один корень и возвращаем массив с одним корнем
		let root = -b / (2 * a);
		arr.push(root);
		return arr;
	} else {
		// Если дискриминант больше нуля, вычисляем два корня и возвращаем массив с корнями
		let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		arr.push(root1);
		arr.push(root2);
		return arr;
	}
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	if (percent < 0 || contribution < 0 || amount < 0 || countMonths < 0) {
		return 'Пожалуйста, введите корректные значения';
	}

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



