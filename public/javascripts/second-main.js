
// ***** Video Animation ***** //

var videoToggler = document.querySelectorAll('.video-button');
var video = document.querySelector('.full-video-wrapper');
var menuToggler = document.querySelector('.ham-menu-wrapper');
var menu = document.querySelector('.slide-nav-wrapper');
var closeMenu = document.querySelector('.hamburger');

function toggleVideo() {
	console.log('SUP');
	video.classList.toggle('full-video-active');
}

videoToggler.forEach(function() {
	this.addEventListener('click', toggleVideo, false);
}); 	

function toggleMenu() {
	console.log('menu toggle being fondled')
	menu.classList.toggle('nav-wrapper-active');
	closeMenu.classList.toggle('is-active');
	// menu.classList.add('slideInRight');
	// stopScroll.classList.toggle('stopScroll')
	// hamAnimation.classList.toggle('open-menu');
}

// navText.forEach(function(e, i) {
// 	navText[i].addEventListener('click', function(e) {
// 		e.preventDefault();
// 		smoothScroll(navText[i]);
// 		toggleMenu();
// 	}, false);
// });

menuToggler.addEventListener('click', toggleMenu, false);

// videoToggler.addEventListener('click', toggleVideo, false);
