// [ x ] 1. start를 누른다 > stop버튼이 드러난다
// [ x ] 2. start를 누른 이후, 스탑워치가 흘러가기 시작한다
// [ x ] 3. stop버튼을 누르면 스탑워치가 멈춘다 > start버튼이 다시 나타난다
// [ x ] 4. 멈춘 시간이 폴더 인덱스 위치에 기록된다
// 5. 비생산 시간이 나중에 start버튼을 누르는 순간 내부적으로 계산될 수 있게끔한다.
// - (새로 start로 입력된 시간) - (마지막 stop버튼으로 입력된 시간 >> 구현해둠!)
// start버튼 기능 : stop버튼 보이기 하기, 스탑워치 시작되게 하기
// stop버튼 기능 : 스탑워치 멈추기, 스탑워치 내용 기록하기,

const stopWatchStart = document.querySelector('#durationStart');
const stopWatchEnd = document.querySelector('#durationStop');
const stopWatchCase = document.querySelector('#stop-watch-case');
let startTime = null;
let finishTime = null;
let idleTime = null;
let folder1Duration = document.querySelector('#folder1 .index1-inside'); // the index shows stopwatch records
let stopwatch1 = null; // for interval

// if a number is less than ten, put 0 infront of it
function isLessThanTen(time) {
  if (time < 10) {
    return `0${time}`;
  } else {
    return `${time}`;
  }
}

// stop watch recording
function stopwatchOn() {
  const date = new Date();
  const passTime = date.getTime();
  const duration = passTime - startTime;
  const ss = Math.floor((duration / 1000) % 60);
  const ms = Math.floor((duration / 1000 / 60) % 60);
  const hrs = Math.floor(duration / 1000 / 60 / 60);

  folder1Duration.innerHTML = `${isLessThanTen(hrs)}:${isLessThanTen(
    ms
  )}:${isLessThanTen(ss)}`;
}

// what happens after click 'start'
function start(event) {
  event.preventDefault();
  const date = new Date();
  const setTime = date.getTime();
  startTime = setTime;
  if (finishTime) {
    idleTime = startTime - finishTime;
    //idle time reset
  }
  stopWatchEnd.classList.replace('hidden', 'show');
  stopWatchStart.classList.replace('show', 'hidden');
  stopwatchOn();
  stopwatch1 = setInterval(stopwatchOn, 1000); // 이렇게 할 때는 start 할 때마다만 refresh 됨. stop버튼 눌러도 계속 됨.
}

// what happens after click 'stop'
function end(event) {
  event.preventDefault();
  const date = new Date();
  finishTime = date.getTime(); // when is the last 'stop' time
  const duration = finishTime - startTime;

  //set final time
  const hours = Math.floor(duration / 1000 / 60 / 60);
  const minutes = Math.floor((duration / 1000 / 60) % 60);
  const secs = Math.floor((duration / 1000) % 60);

  //show start again
  stopWatchStart.classList.replace('hidden', 'show');
  stopWatchEnd.classList.replace('show', 'hidden');

  //stop the stopwatch
  clearInterval(stopwatch1);

  //show how much time we spent
  folder1Duration.innerText = `${isLessThanTen(hours)}:${isLessThanTen(
    minutes
  )}:${isLessThanTen(secs)}`;
}

stopWatchStart.addEventListener('click', start);
stopWatchEnd.addEventListener('click', end);
