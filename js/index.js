
// Initialize video


$(function(){


//init mediaelement js
	$('video').mediaelementplayer({
 features: ['playpause', 'tracks', 'progress'],
  startLanguage: 'en',
  useSmoothHover:true,
  controlsTimeoutMouseLeave:6000,
  controlsTimeoutDefault:6000
	});

// declare const and var
const video = document.getElementsByTagName('video')[0];
const trackElements = document.querySelectorAll('span[data-start]');

// get time to pass it thru the highlight function
function highlightElements(time){
//loop through all spans time
for (let i = 0; i < trackElements.length; i++){
// start time
const startTime = trackElements[i].getAttribute('data-start');
const endTime = trackElements[i].getAttribute('data-end');
if(time >= startTime && time <= endTime) {
trackElements[i].classList.add('active');
}
else {
trackElements[i].classList.remove('active');
}
}
}
	//get time and pass it to the highlight function
	function getTime() {
		video.addEventListener('timeupdate', () => {
			let time = video.currentTime;
			console.log("TIME = " + time);
			highlightElements(time);
		});
	}

	//Video starts
	video.addEventListener("play", () => {
		console.log("video begins");
		getTime();
	});	

	//When element is clicked, set currentTime to data-time value
	for (let i = 0; i < trackElements.length; i++) {
		const start = trackElements[i].getAttribute('data-start');
		trackElements[i].addEventListener('click', () => {
		video.currentTime = start;
		});
	}

});




