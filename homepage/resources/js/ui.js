window.addEventListener('load', function() {
	introTextFlow();
})

window.addEventListener('resize', function() {

})

window.addEventListener('scroll', function() {

})

function introTextFlow() {
	var section = document.querySelector('.section-intro');
	var playBtn = section.querySelector('.btn-play');
	var stopBtn = section.querySelector('.btn-stop');
	var timer = null;

	playBtn.addEventListener('click', play);
	stopBtn.addEventListener('click', stop);

	play();

	function play() {
		playBtn.classList.remove('is-active');
		stopBtn.classList.add('is-active');
		section.classList.remove('is-finish');
		section.classList.add('is-animate');
		timer = setTimeout(function() {
			stop();
		}, 12500);
	}
	function stop() {
		playBtn.classList.add('is-active');
		stopBtn.classList.remove('is-active');
		section.classList.add('is-finish');
		clearTimeout(timer);
	}

}
