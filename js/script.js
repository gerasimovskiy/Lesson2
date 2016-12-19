//      1. Сумма чисел
// Создайте страницу, которая предлагает ввести два числа 
// и выводит их сумму

// var numberOne = +prompt("Enter first number ", "0");
// var numberTwo = +prompt("Enter second number ", "0");
// document.write("Sum = " + numberOne + numberTwo + "<br />" + "<hr />");



//      2. Генератор случайных чисел

// Имитация бросания двух игральных костей

// var randomNumberOne = Math.floor(Math.random() * 6) + 1;
// var randomNumberTwo = Math.floor(Math.random() * 6) + 1;
// document.write(randomNumberOne + "<br />");
// document.write(randomNumberTwo + "<br />" + "<hr />" + "<br />");



// Имитация игры орел-решка





// Создать программу, которая принимает значение от 
// пользователя, а затем выводит случайное число от 1 
// до числа, что ввел пользователь.

// var userNumber = +prompt("Please, enter number ");
// var randomNumber = Math.floor(Math.random() * userNumber) + 1;
// document.write("The random number between 1 and " + userNumber + " is: " + randomNumber);
// document.write("<br />" + "<hr />" + "<br />");




// Создать программу, которая принимает два значение от 
//пользователя, а затем выводит случайное число от первого 
//до второго числа, что ввел пользователь.

// var min;
// var max;
// var userNumberOne = +prompt("Please, enter first number ");
// var userNumberTwo = +prompt("Please, enter first number ");
// if (userNumberOne < userNumberTwo) {
// 	min = userNumberOne;
// 	max = userNumberTwo;
// } else {
// 	min = userNumberTwo;
// 	max = userNumberOne;
// }
// var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
// document.write("The random number between " + min + " and " + max + " is: " + randomNumber);
// document.write("<br />" + "<hr />" + "<br />");




// Используя конструкцию if..else, напишите код, который 
// будет спрашивать: «Каково «официальное» название 
// JavaScript?». Если посетитель вводит «ECMAScript», то 
// выводить «Верно!», если что-то другое – выводить 
// «Не знаете? «ECMAScript»!».

// var name = prompt("Каково \"официальное\" название JavaScript? ");
// if (name == "ECMAScript") {
// 	alert("Верно!")
// } else {
// 	alert("Не знаете? \"ECMAScript\"!");
// }
// document.write("<br />" + "<hr />" + "<br />");





// Перепишите if с использованием оператора '?':
// if (a + b < 4) {  
// result = 'Мало';
// } else {  
// result = 'Много';
// }


// var result = (a + b < 4) ? "Мало" : "Много";
// document.write("<br />" + "<hr />" + "<br />");







// Напишите код, который будет спрашивать логин (prompt). Если посетитель вводит «Админ», 
// то спрашивать пароль, если нажал отмена (escape) – выводить «Вход отменён», если вводит 
// что-то другое – «Я вас не знаю». Пароль проверять так. Если введён пароль «Чёрный Властелин», 
// то выводить «Добро пожаловать!», иначе – «Пароль неверен», при отмене – «Вход отменён».

var login = prompt("Кто пришел?");
if (login == null) {
	alert("Goodbye my friend");
} else if (login == "Админ") {
	var password = prompt("Пароль?");
	if (password == null) {
		alert("До новых встреч!");
	} else if (password == "Черный властелин") {
		alert("Welcome");
	} else {
		alert("Научись на кнопки нажимать!");
	}
} else {
	alert("Граааааабят!!!");
}
document.write("<br />" + "<hr />" + "<br />");