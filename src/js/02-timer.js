import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  targetDate: document.getElementById('datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

refs.startBtn.addEventListener('click', onStartBtnClick);

////////////------------------------//////////////////

let diff = 0;
let targetDate = 0;
let idTimer = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.dir(selectedDates[0]);
    targetDate = selectedDates[0];
    diff = targetDate - options.defaultDate;

    if (diff <= 0) {
      refs.startBtn.disabled = true;
      return alert('Please choose a date in the future');
    }
    refs.startBtn.disabled = false;
  },
};

flatpickr('#datetime-picker', options);

function onStartBtnClick() {
  countDownTimer();
  idTimer = setInterval(countDownTimer, 1000);
}

function countDownTimer() {
  diff = targetDate - new Date();
  if (diff >= 0) {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    refs.days.textContent = days;
    refs.hours.textContent = addZero(hours);
    refs.minutes.textContent = addZero(minutes);
    refs.seconds.textContent = addZero(seconds);
  } else {
    clearInterval(idTimer);
  }
}

function addZero(number) {
  return String(number).padStart(2, '0');
}
