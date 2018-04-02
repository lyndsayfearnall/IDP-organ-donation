
var videoToggler = document.querySelectorAll('.video-button');
var video = document.querySelector('.full-video-wrapper');

var menuToggler = document.querySelector('.ham-menu-wrapper');
var menu = document.querySelector('.slide-nav-wrapper');
var closeMenu = document.querySelector('.hamburger');

var navText = document.querySelectorAll('.nav-scroll');
var stopScroll = document.querySelector('body');

var quizToggler = document.querySelectorAll('.quiz-toggle');
var quiz = document.querySelector('.quiz-page-wrapper');

var quizPage = document.querySelectorAll('.quiz-q-wrapper');
var quizOption = document.querySelectorAll('.q-con');


// ***** Functioning Quiz ***** //
function checkAnswers(){
	console.log('checking answers');

	var answers = [];

	for (var i = 1; i < 7; i++) {
		var checkedAnswerItems = 0;
		var answerItems = document.querySelectorAll('input[value="a'+i+'"]');
		answerItems.forEach(function(e,index) {
			if (answerItems[index].checked) {
				checkedAnswerItems++;
			}
		});
		answers.push(checkedAnswerItems);
	}

	var quizOutcome = document.querySelector(".quizOutcome");

	console.log(Math.max(...answers));
	var mostSelected = Math.max(...answers);
	var quizResultHeart = document.querySelector('#heart-result');
	var quizResultLungs = document.querySelector('#lungs-result');
	var quizResultLiver = document.querySelector('#liver-result');
	// var quizResult = document.querySelector('.quiz-result-wrapper');

	if (answers[0] === mostSelected || answers[1] === mostSelected) {
		console.log('one of the top two is most');
		quizResultHeart.classList.add('active-result');
	}
	else if (answers[2] === mostSelected || answers[3] === mostSelected) {
		console.log('one of the middle two is most');
		quizResultLungs.classList.add('active-result');
	}
	else if (answers[4] === mostSelected || answers[5] === mostSelected) {
		console.log('one of the bottom two is most');
		quizResultLiver.classList.add('active-result');
	}
}


// ***** Cycling Quiz Pages ***** //

var quizPageCount = 1;

function toggleActiveOptions(e, i) {
	this.parentElement.classList.remove('active');

	if (quizPageCount < 5) {
		this.parentElement.nextElementSibling.classList.add('active');
		quizPageCount++;
	}
	else {
		checkAnswers();
	}
}

quizOption.forEach(function(e, i) {
	quizOption[i].addEventListener('click', toggleActiveOptions, false);
});


// ***** Toggling Quiz ***** //
// var quizResult = document.querySelectorAll('.quiz-result-wrapper');

function toggleQuiz() {
	// console.log('quiz toggle being fondled')
	quiz.classList.toggle('quiz-active');
	// quizResult.classList.remove('active-result');
	// closeMenu.classList.toggle('is-active');
}

quizToggler.forEach(function(e, i) {
	quizToggler[i].addEventListener('click', toggleQuiz, false);
});


//  ***** Toggling Video Slide ***** //
function toggleVideo() {
	console.log('SUP');
	video.classList.toggle('full-video-active');
	// stopScroll.classList.toggle('stopScroll')
}

videoToggler.forEach(function(e, i) {
	videoToggler[i].addEventListener('click', toggleVideo, false);
}); 

// ***** Toggling Menu Slide and Smooth Scrolling ***** //

navText.forEach(function(e, i) {
	navText[i].addEventListener('click', function(e) {
		e.preventDefault();
		smoothScroll(navText[i]);
		toggleMenu();
	}, false);
});	

function toggleMenu() {
	menu.classList.toggle('nav-wrapper-active');
	closeMenu.classList.toggle('is-active');
}

menuToggler.addEventListener('click', toggleMenu, false);

function smoothScroll(e) {
	console.log(e);
	var elementToScroll = e.getAttribute("href");
	console.log(elementToScroll);
	document.querySelector(elementToScroll).scrollIntoView({ 
	  behavior: 'smooth' 
	});

}
