var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 
  'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var letter = letters[Math.floor(Math.random()*letters.length)];
var wins = 0;
var wincondition = 0;
var losses = 0;
console.log(letter)


i = 9;
$(document).ready(function(){
	$("input").keypress(function(){
		$("#guesses").text(i -= 1);
		var dInput = this.value;
		if (letter == dInput) {
			wincondition = 1;
		}
	});
	