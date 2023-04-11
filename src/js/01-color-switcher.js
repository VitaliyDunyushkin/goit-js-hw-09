const refs = {
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};

let timerID = 0;

function onStartBtnClick() {
  timerID = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
}

function onStopBtnClick() {
  clearInterval(timerID);
  refs.startBtn.disabled = false;
  refs.stopBtn.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

////

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);
