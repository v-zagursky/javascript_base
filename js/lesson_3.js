"use strict"
//Первое задание
for (let i = 0; i <= 10; i++) {
	if (i == 0) console.log(`${i} - это ноль`);
	if (i > 0 && i % 2 == 0) console.log(`${i} - это чётное число`);
	if (i % 2 != 0) console.log(`${i} - это не чётное число`);
}
// Второе задание
const post = {
	author: "John", //вывести этот текст
	postId: 23,
	comments: [
		{
			userId: 10,
			userName: "Alex",
			text: "lorem ipsum",
			rating: {
				likes: 10,
				dislikes: 2 //вывести это число
			}
		},
		{
			userId: 5, //вывести это число
			userName: "Jane",
			text: "lorem ipsum 2", //вывести этот текст
			rating: {
				likes: 3,
				dislikes: 1
			}
		},
	]
};
console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

//Третье задание
const products = [
	{
		id: 3,
		price: 200,
	},
	{
		id: 4,
		price: 900,
	},
	{
		id: 1,
		price: 1000,
	},
];
let discont = 0.15;
// function discontForProducts(product) {
// 	let appDiscont = product.price - product.price * discont;
// 	console.log(`Цена товара ${product.price}`);
// 	console.log(`Стоимость с учётом скидки 15% составляет ${appDiscont}`);
// 	return appDiscont;
// 	}
// products.forEach(discontForProducts);
products.forEach(function (product) {
	console.log(`Цена товара ${product.price}`);
	console.log(`Стоимость с учётом скидки ${discont * 100}% составляет 
	${product.price - product.price * discont}`);
	return product.price - product.price * discont;
});
console.log(products);//в консоли браузера не показывает измененные значения,говорит, что "значение было вычислено при первом развертывании. С тех пор оно могло меняться" Что не так?

//Четвёртое задание
const products2 = [
	{
		id: 3,
		price: 127,
		photos: [
			"1.jpg",
			"2.jpg",
		]
	},
	{
		id: 5,
		price: 499,
		photos: []
	},
	{
		id: 10,
		price: 26,
		photos: [
			"3.jpg"
		]
	},
	{
		id: 8,
		price: 78,
	},
];
let includePhotos = products2.filter(element => "photos" in element &&
	element.photos.length > 0);
//  Подсмотрел в решении, что нужно вначале сравнить "photos" in element, т.к. не мог догнать, почему он не принимает просто element.photos.length > 0.
console.log(includePhotos);

products2.sort((a, b) => a.price - b.price);// сотрировка по возрастанию цены
console.log(products2);

//Пятое задание
for (let i = 0; i < 10; console.log(i++));

// Шестое задание
for (let i = "x"; i.length <= 20; i += "x") {
	console.log(i)
};//подсмотрел в решении, много информации ), сложно сориетнироваться, какой подход использовать