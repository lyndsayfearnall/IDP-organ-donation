
var videoToggler = document.querySelectorAll('.video-button');
var video = document.querySelector('.full-video-wrapper');

var menuToggler = document.querySelector('.ham-menu-wrapper');
var menu = document.querySelector('.slide-nav-wrapper');
var closeMenu = document.querySelector('.hamburger');

var navText = document.querySelectorAll('.nav-scroll');
var stopScroll = document.querySelector('body');



function toggleVideo() {
	console.log('SUP');
	video.classList.toggle('full-video-active');
	// stopScroll.classList.toggle('stopScroll')
}

navText.forEach(function(e, i) {
	navText[i].addEventListener('click', function(e) {
		e.preventDefault();
		smoothScroll(navText[i]);
		toggleMenu();
	}, false);
});

videoToggler.forEach(function(e, i) {
	videoToggler[i].addEventListener('click', toggleVideo, false);
}); 	

function toggleMenu() {
	console.log('menu toggle being fondled')
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
