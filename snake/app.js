var delayInMilliseconds = 1000;
function playAudio(url) {
	setTimeout(function() {
		new Audio(url).play();
	}, delayInMilliseconds);


	window.location.href="index.html";
}