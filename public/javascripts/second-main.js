
// ***** Video Animation ***** //

var videoToggler = document.querySelectorAll('.video-button');
var video = document.querySelector('.full-video-wrapper');

function toggleVideo() {
	console.log('SUP');
	video.classList.toggle('full-video-active');
}

videoToggler.forEach(function() {
	this.addEventListener('click', toggleVideo, false);
}); 	

// videoToggler.addEventListener('click', toggleVideo, false);
