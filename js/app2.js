// Defining questions
var question1 = new question({
	charName: "1. Constante investigación para tener un conocimiento general de varios temas.",
	answerOptions: ["ME INTERESA", "NO SABRÍA SI ME INTERESA" ,"NO ME INTERESA"],
	answer:  0,
	pageNumber: "page-1"
});

var question2 = new question({
	charName: "2. Trabajar y ganar dinero por tu arte y tu creatividad.",
	answerOptions: ["ME INTERESA", "NO SABRÍA SI ME INTERESA" ,"NO ME INTERESA"],
	answer: 2,
	pageNumber: "page-2"
});

var question3 = new question({
	charName: "3. Estarías dispuesto a utilizar una gran cantidad de pinceles, lapices y pinturas para realizar arte.",
	answerOptions: ["ME INTERESA", "NO SABRÍA SI ME INTERESA" ,"NO ME INTERESA"],
	answer: 2,
	pageNumber: "page-3"
});

var question4 = new question({
	charName: "4. Aprender técnicas de dibujo, pintura y diseño.",
	answerOptions: ["ME INTERESA", "NO SABRÍA SI ME INTERESA" ,"NO ME INTERESA"],
	answer: 1,
	pageNumber: "page-4"
});

var question5 = new question({
	charName: "5. Deberás realizar una alta inversión en materiales para tus obras y proyectos.",
	answerOptions: ["ME INTERESA", "NO SABRÍA SI ME INTERESA" ,"NO ME INTERESA"],
	answer: 0,
	pageNumber: "page-5"
});

var question6 = new question({
	charName: "6. Conectarás con la sensibilidad humana, su lenguaje, su arte y su cultura",
	answerOptions: ["ME INTERESA", "NO SABRÍA SI ME INTERESA" ,"NO ME INTERESA"],
	answer: 0,
	pageNumber: "page-6"
});
var question7 = new question({
	charName: "7. Sentir el llamado a temas de las letras, filosofía y la necesidad de entender la realidad.",
	answerOptions: ["ME INTERESA", "NO SABRÍA SI ME INTERESA" ,"NO ME INTERESA"],
	answer: 1,
	pageNumber: "page-7"
});
var question8 = new question({
	charName: "8. Organizaras una presentación sobre el conocimiento humano; deberás investigar y tener evidencias claras.",
	answerOptions: ["ME INTERESA", "NO SABRÍA SI ME INTERESA" ,"NO ME INTERESA"],
	answer: 0,
	pageNumber: "page-8"
});

var question9 = new question({
	charName: "9. Tienes un trabajo en el cual debes comunicarte y conocer a personas desconocidas en la ciudad.",
	answerOptions: ["ME INTERESA", "NO SABRÍA SI ME INTERESA" ,"NO ME INTERESA"],
	answer: 0,
	pageNumber: "page-9"
});
var question10 = new question({
	charName: "10. Tener presente las investigaciones realizadas porque varios temas estaran conectados por ejemplo: la mente del humano con el desarrollo del arte.",
	answerOptions: ["ME INTERESA", "NO SABRÍA SI ME INTERESA" ,"NO ME INTERESA"],
	answer: 1,
	pageNumber: "page-10"
});

//Defining prototype
function question(option){
	this.charName = option.charName;
	this.answerOptions = option.answerOptions;
	this.answer = option.answer;
	this.pageNumber = option.pageNumber;
}

//Questions html template
var genQuestion = function(x){
	var stage = $('#questions');
	stage.append('<div id="' + x.pageNumber + '" class="page"></div>');

	var questionsPage = $('#' + x.pageNumber);
	questionsPage.append('<h1>TEST ÁREA HUMANIDADES Y ARTES</h1><hr/>');	
	questionsPage.append('<p class="charName">' + x.charName + '</p>')
	questionsPage.append('<form>');
	questionsPage.append('<input type="radio" name="tv1" value="1" checked>' + x.answerOptions[0] + '<br/>');
	questionsPage.append('<input type="radio" name="tv1" value="1">' + x.answerOptions[1] + '<br/>');
	questionsPage.append('<input type="radio" name="tv1" value="0">' + x.answerOptions[2] + '<br/>');
	questionsPage.append('</form>');
	questionsPage.append('<button>SIGUIENTE</button>');
}

//variables
var count = 0;
var nextPage = 1;

// calculate score
function showScore(){
	$('.score').append("De 1 a 10, presentas un nivel de relación con el área de Humanidades y Artes es de:" + count);
}

//checking answer
function checkAnswer(x){
	var finalAnswer = $('input:checked').val();
	if(nextPage == 10 && finalAnswer == x.answer){
		count++;
		$('#questions').hide();
		$('#finish').show();
		showScore();

	} else if(nextPage == 10){
		$('#questions').hide();
		$('#finish').show();
		showScore();

	} else if(finalAnswer == x.answer){
		count++;
		nextPage++;
		$('.page').hide();
		$('#finish').hide();
		$('#page-' + nextPage).show();
	} else {
		nextPage++;
		$('.page').hide();
		$('#finish').hide();
		$('#page-' + nextPage).show();
	}
}

//create a new game and questions
function newGame(){
	var create1 = new genQuestion(question1);
	var create2 = new genQuestion(question2);
	var create3 = new genQuestion(question3);
	var create4 = new genQuestion(question4);
	var create5 = new genQuestion(question5);
	var create6 = new genQuestion(question6);
	var create7 = new genQuestion(question7);
	var create8 = new genQuestion(question8);
	var create9 = new genQuestion(question9);
	var create10 = new genQuestion(question10);
}

//restart game
function restart(){
	count = 0;
	nextPage = 1;
	$('#start-page').show();
	$('#page-1').hide();
	$('#page-2').hide();
	$('#page-3').hide();
	$('#page-4').hide();
	$('#page-5').hide();
	$('#page-6').hide();
	$('#page-7').hide();
	$('#page-8').hide();
	$('#page-9').hide();
	$('#page-10').hide();
	$('#finish').hide();
	$('#questions').show();
	$('.score').empty();
	$('#finish').hide();
}

$(document).ready(function(){
	// when the start button is clicked
	$('#start-page button').click(function(){
		$('#start-page').hide();
		$('#page-1').show();
		$('#page-2').hide();
		$('#page-3').hide();
		$('#page-4').hide();
		$('#page-5').hide();
		$('#page-6').hide();
		$('#page-7').hide();
		$('#page-8').hide();
		$('#page-9').hide();
		$('#page-10').hide();
		$('#finish').hide();
	});

	//generating the questions
	newGame();

	//events when next button is clicked
	$('#page-1 button').click(function(){
		checkAnswer(question1);
	});

	$('#page-2 button').click(function(){
		checkAnswer(question2);
	});

	$('#page-3 button').click(function(){
		checkAnswer(question3);
	});

	$('#page-4 button').click(function(){
		checkAnswer(question4);
	});
	$('#page-5 button').click(function(){
		checkAnswer(question5);
	});
	$('#page-6 button').click(function(){
		checkAnswer(question6);
	});
	$('#page-7 button').click(function(){
		checkAnswer(question7);
	});
	$('#page-8 button').click(function(){
		checkAnswer(question8);
	});
	$('#page-9 button').click(function(){
		checkAnswer(question9);
	});
	$('#page-10 button').click(function(){
		checkAnswer(question10);
	});
	
	// event when try again is clicked
	$('#finish button').click(function(){
		restart();
	});
});