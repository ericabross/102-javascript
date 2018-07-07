$(document).ready(function(){
	
	var magic8Ball = {};
	
	magic8Ball.answers = ["It remains to be seen", "Unequivocally", "A-duh!", "Hell no!", "Why are you asking me?!", "Hmmm...ask again"];
	
	magic8Ball.askQuestion = function (question) {
		var randomNumber = Math.random();
		var randomNumberForAnswers = randomNumber * this.answers.length;
		var randomIndex = Math.floor (randomNumberForAnswers);
		var answer = this.answers [randomIndex];
		$("#answer").text(answer);
		console.log (question);
		console.log (answer);	
};
	
	var onClick = function (){
		var question = prompt("Ask me a yes/no question!");
		magic8Ball.askQuestion(question);
	};
	$("#questionButton").click(onClick);
});
