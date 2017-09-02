var fs = require("fs");
var BasicCard = require('./BasicCard.js');

var ClozeCard = function(text, cloze){
	this.text = text;
	this.cloze = cloze;
	// if(this.text.search(this.cloze)===false){
	// 	console.log('error');
	// }
};

ClozeCard.prototype.fullText = function() {
	console.log(this.text);
};


ClozeCard.prototype.partial = function() {
	var clozeLength = this.cloze.length;
	console.log(' ... ' + this.text.substring(clozeLength));
};

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

// "Who was the first president of the United States?"
// console.log(firstPresident.front); 

// "George Washington"
// console.log(firstPresident.back); 

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

// "George Washington"
console.log(firstPresidentCloze.cloze); 

// " ... was the first president of the United States.
// console.log(firstPresidentCloze.partial);

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText());
console.log(firstPresidentCloze.partial());

// // Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");
console.log(brokenCloze.cloze);
console.log(brokenCloze.partial());

// module.exports = ClozeCard;