// animates the scrolling
function scrollToPosition (position, duration) {
	let numSteps = duration / 15,
		stepSize = (position - window.scrollY) / numSteps,
		currentStep = 0,
		start;

	function step(timeStamp) {
		let currentTime,
			progress;

		if (!start) {
			start = timeStamp;
		}

		currentTime = timeStamp - start;
		progress = Math.round((currentTime / duration) * 100) / 100;

		window.scrollTo(0, position * progress);

		if (progress <= 1) {
			window.requestAnimationFrame(step);
		}
	}

	window.requestAnimationFrame(step);
}

// adds all the event listeners
function addEventListeners () {
	document.querySelector('#home #arrow').addEventListener('click', () => {
		let position = document.querySelector('#work').offsetTop;
		scrollToPosition(position, 400);
	});
	document.querySelector('nav ul li#nav-work').addEventListener('click', () => {
		let position = document.querySelector('#work').offsetTop;
		scrollToPosition(position, 400);
	});
	document.querySelector('nav ul li#nav-about').addEventListener('click', () => {
		let position = document.querySelector('#about').offsetTop;
		scrollToPosition(position, 400);
	});
	document.querySelector('nav ul li#nav-contact').addEventListener('click', () => {
		let position = document.querySelector('#contact').offsetTop;
		scrollToPosition(position, 400);
	});
}

// waits till dom is loaded to run anything
document.addEventListener('DOMContentLoaded', () => {
	addEventListeners();

});