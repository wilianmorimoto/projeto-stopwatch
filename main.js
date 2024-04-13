const minutesEl = document.querySelector('#minutes');
const secondsEl = document.querySelector('#seconds');
const millisecondsEl = document.querySelector('#milliseconds');

const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const resumeBtn = document.querySelector('#resume');
const resetBtn = document.querySelector('#reset');

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let isPaused = false;

function startTimer() {
	interval = setInterval(() => {
		if (!isPaused) {
			milliseconds += 10;

			if (milliseconds === 1000) {
				seconds++;
				milliseconds = 0;
			}

			if (seconds === 60) {
				minutes++;
				seconds = 0;
			}

			minutesEl.textContent = formatTime(minutes);
			secondsEl.textContent = formatTime(seconds);
			millisecondsEl.textContent = formatMilliseconds(milliseconds);
		}
	}, 10);

	startBtn.style.display = 'none';
	stopBtn.style.display = 'block';
}

function pauseTimer() {
	isPaused = true;
	stopBtn.style.display = 'none';
	resumeBtn.style.display = 'block';
}

function resumeTimer() {
	isPaused = false;
	stopBtn.style.display = 'block';
	resumeBtn.style.display = 'none';
}

function resetTimer() {
	clearInterval(interval);

   isPaused = false
   minutes = 0
   seconds = 0
   milliseconds = 0

	minutesEl.textContent = '00';
	secondsEl.textContent = '00';
	millisecondsEl.textContent = '000';

   startBtn.style.display = 'block'
   stopBtn.style.display = 'none'
   resumeBtn.style.display = 'none'
}

function formatTime(time) {
	return time < 10 ? `0${time}` : time;
}

function formatMilliseconds(milliseconds) {
	if (milliseconds < 10) return `00${milliseconds}`;
	if (milliseconds < 100) return `0${milliseconds}`;
	return milliseconds;
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', pauseTimer);
resumeBtn.addEventListener('click', resumeTimer);
resetBtn.addEventListener('click', resetTimer);
