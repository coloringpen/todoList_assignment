const stopWatchStart = document.querySelector('#durationStart');
const stopWatchEnd = document.querySelector('#durationStop');
const stopWatchCase = document.querySelector('#stop-watch-case');
let startTime = null;
let hours = null;
let minutes = null;
let secs = null;
let duration1 = document.querySelector('#folder1 .index1-inside');

console.log(duration1);

function isLessThanTen(time) {
  if (time < 10) {
    return `0${time}`;
  } else {
    return `${time}`;
  }
}

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

  duration1.innerText = `${isLessThanTen(hours)}:${isLessThanTen(
    minutes
  )}:${isLessThanTen(secs)}`;
}

function stopwatchOn() {
  const date = new Date();
  const passTime = date.getTime();
  const duration = passTime - startTime;
  const secs = Math.floor((duration / 1000) % 60);
  const mins = Math.floor((duration / 1000 / 60) % 60);
  const hours = Math.floor(duration / 1000 / 60 / 60);

  duration1.innerHTML = `${hours}:${mins}:${secs}`;
}

stopWatchStart.addEventListener('click', start);
stopWatchEnd.addEventListener('click', end);
