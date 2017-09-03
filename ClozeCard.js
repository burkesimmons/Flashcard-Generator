var fs = require("fs");
var BasicCard = require('./BasicCard.js');

var ClozeCard = function(text, cloze){
	this.text = text;
	this.cloze = cloze;
	
};

ClozeCard.prototype.fullText = function() {
	console.log(this.text);
};


ClozeCard.prototype.partial = function() {
	if(this.text.search(this.cloze)){
		console.log('error');
	} else{
	var clozeLength = this.cloze.length;
	console.log(' ... ' + this.text.substring(clozeLength));
	};
};

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

var firstPresidentCloze = new ClozeCard(
    "George Washington was the first president of the United States.", "George Washington");

firstPresidentCloze.fullText();
firstPresidentCloze.partial();

// // Should throw or log an error because "oops" doesn't appear in "This doesn't work"
var brokenCloze = new ClozeCard("This doesn't work", "oops");
// console.log(brokenCloze.cloze);
brokenCloze.partial();

//What is the purpose of this? Are we supposed to have another js file that uses ClozeCard?
module.exports = ClozeCard;