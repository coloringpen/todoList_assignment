const clock = document.querySelector('#clock');
const theScreen = document.querySelector('#screen');

function getClock() {
  const date = new Date();
  const hour = String(date.getHours()).padStart(2, '0');
  const minute = String(date.getMinutes()).padStart(2, '0');
  const second = String(date.getSeconds()).padStart(2, '0');

  clock.innerHTML = `${hour}:${minute}:${second}`;
}

function screenMoveDown() {
  const date = new Date();
  const currentHour = date.getHours();
  const currentMin = date.getMinutes();
  const totalCurrentMins = currentHour * 60 + currentMin;
  const screenDownHeight = 790 * (totalCurrentMins / (24 * 60));
  const goUp = (790 - screenDownHeight) * -1;
  theScreen.style.setProperty('--height-time', goUp);
}

getClock();
setInterval(screenMoveDown, 1000);
setInterval(getClock, 1000);
