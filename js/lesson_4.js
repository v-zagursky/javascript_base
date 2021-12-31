"use strict"
// ES5
// function Product(name, prise) {
// 	this.name = name;
// 	this.prise = prise;
// }
// Product.prototype.make25PercentDiscont = function()  {
// 			return this.prise = this.prise - this.prise * (25 / 100);
// 		 }
// let prod1 = new Product("prod", 300);
// prod1.make25PercentDiscont(30);
// console.log(prod1);

//ES6
// class Product {
// 	constructor(name, prise) {
// 		this.name = name;
// 		this.prise = prise;
// 	}
// 	make25PercentDiscont() {
// 		return this.prise = this.prise - this.prise * (25 / 100);
// 		//не совсем понятно, почему, если написать make25PercentDiscont = fuction(...){} он становиться св-вом объекта, а не прототипа?
// 		// Также, дописал return, хотя в примере его не увидел, почему его не было и нужен ли он?
// 	}

// }
// let prod2 = new Product("Тарелка", 245);
// prod2.make25PercentDiscont(40);

// Задание 1.2

// function Post(autor, text, date) {
// 	this.autor = autor;
// 	this.text = text;
// 	this.date = date;
// }
// Post.prototype.edit = function (newText) {
// 	if (newText !== "") {
// 		return this.text = newText;
// 	}
// }
// let post1 = new Post("Вася", "Lorem ipsum", "13.08.1986");
// post1.edit("I wil be going with horse");
// console.log(post1);

// function AttachedPost(autor, text, date) {
// 	Post.call(this, autor, text, date);
// 	this.highlighted = false;
// }
// AttachedPost.prototype = Object.create(Post.prototype);
// AttachedPost.prototype.constructor = AttachedPost;
// AttachedPost.prototype.makeTextHighlighted = function () {
// 	return this.highlighted = true;
// }
// let post2 = new AttachedPost("Коля", "Жили-были", "21.18.2008");
// post2.makeTextHighlighted();
// console.log(post2);

//ES6
class Post {
	constructor(autor, text, date) {
		this.autor = autor;
		this.text = text;
		this.date = date;
	}
	edit(newText) {
		if (newText !== "") {
			return this.text = newText;
		}
	}
}
class AttachedPost extends Post {
	constructor(autor, text, date) {
		super(autor, text, date);
		this.highlighted = false;
	}
	makeTextHighlighted() {
		return this.highlighted = true;
	}
}
let post1 = new AttachedPost("Коля", "Жили-были", "21.18.2008");
post1.makeTextHighlighted();
console.log(post1);