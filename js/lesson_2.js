'use strict'
//третье задание
let a = +prompt("Введите первое число");
let b = +prompt("Введите второе число");
if (a >= 0 && b >= 0) {
	alert(`Задание 3. Разность = ${a - b}`);
} else if (a < 0 && b < 0) {
	alert(`Задание 3. Произведение чисел = ${a * b}`);
} else if (a < 0 && b > 0 || a > 0 && b < 0) {
	alert(`Задание 3. Сумма чисел = ${a + b}`);
}
else {
	alert("Задание 3. Вы ввели некорректное значение");
}

//Четвертое задание
/**
 * add
 * @param {number} a первое введенное пользователем число 
 * @param {number} b второе введённое пользователем число
 * @returns сумма a & b
 */
function add(a, b) {
	let result = a + b;
	alert("Задание 4. Результат  работы функции sum = " + result);
	return (result);
}
add(a, b);
/**
 * sub
 * @param {number} a первое введенное пользователем число
 * @param {number} b второе введённое пользователем число
 * @returns результат вычитания a - b
 */
function sub(a, b) {
	let result = a - b;
	alert(" Задание 4. Результат работы функции sub = " + result);
	return (result);
}
sub(a, b);
/**
 * mult
 * @param {number} a первое введенное пользователем число
 * @param {number} b второе введённое пользователем число
 * @returns результат умножения a && b
 */
function mult(a, b) {
	let result = a * b;
	alert("Задание 4. Результат работы функции mult = " + result);
	return (result);
}
mult(a, b);
/**
 * division
 * @param {number} a первое введенное пользователем число
 * @param {number} b второе введённое пользователем число
 * @returns результат деления a && b
 */
function division(a, b) {
	let result = a / b;
	alert("Задание 4. Результат работы функции division = " + result);
	return (result);
}
division(a, b);

//Пятое задание

let operation = null;
/**
 * Функция выполняет математическое действие с переменными a и b по указанию пользователя
 * @param {number} a первое введенное пользователем число
 * @param {number} b второе введённое пользователем число
 * @param {string} operation  введённая пользователем операция
 */
function mathOperation(arg1, arg2, operation) {
	operation = prompt(`Итак, мы имеем два числа ${a} и ${b}, напишите, что Вы хотите с ними сделать. (Например: умножить, разделить, сложить, отнять) `)
	switch (operation) {
		case "умножить":
		case "Умножить":
		case "*":
			return mult(a, b);

		case "разделить":
		case "Разделить":
		case "/":
			return division(a, b);

		case "сложить":
		case "Сложить":
		case "+":
			return add(a, b);

		case "отнять":
		case "Отнять":
		case "Вычесть":
		case "вычесть":
		case "-":
			return sub(a, b);
		default:
			return alert("Ну зачем так жить то...)")
	}
}
mathOperation(a, b, operation);

//Шестое задание
let amount = +prompt("Введи сумму, сколько Вы хотите положить на вклад (руб).");
let wordRub = "рубль";
let lastNum = amount % 10;
if (amount >= 5 && amount <= 20) {
	wordRub = "рублей";
}
else if (lastNum == 0 || lastNum >= 5) {
	wordRub = "рублей";
}
else if (lastNum > 1 && lastNum <= 4) {
	wordRub = "рубля";
} else { wordRub = "рубль"; }
alert(`Ваш вклад ${amount} ${wordRub} зачислен!`)

