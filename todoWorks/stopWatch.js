const stopWatchStart = document.querySelector('#durationStart');
const stopWatchEnd = document.querySelector('#durationStop');
const stopWatchCase = document.querySelector('#stop-watch-case');
let startTime = null;
let hours = null;
let minutes = null;
let secs = null;

function start(event) {
  event.preventDefault();
  const date = new Date();
  const setTime = date.getTime();
  startTime = setTime;
  stopWatchEnd.classList.replace('hidden', 'show');
  stopWatchStart.classList.replace('show', 'hidden');
}

function end(event) {
  event.preventDefault();
  const date = new Date();
  const finishTime = date.getTime();
  const duration = finishTime - startTime;

  hours = Math.floor(duration / 1000 / 60 / 60);
  minutes = Math.floor((duration / 1000 / 60) % 60);
  secs = Math.floor((duration / 1000) % 60);
  stopWatchStart.classList.replace('hidden', 'show');
  stopWatchEnd.classList.replace('show', 'hidden');
}

stopWatchStart.addEventListener('click', start);
stopWatchEnd.addEventListener('click', end);
