import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const {
    elements: { delay, step, amount },
  } = event.currentTarget;

  let position = 1;
  let firstDelay = delay.valueAsNumber;
  let nextDelay = firstDelay + step.valueAsNumber;

  createPromise(position, firstDelay);

  for (let i = 2; i <= amount.value; i += 1) {
    position += 1;
    createPromise(position, nextDelay);
    nextDelay += step.valueAsNumber;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promiseData = { position, delay };

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(promiseData);
      } else {
        reject(promiseData);
      }
    }, delay);
  });

  promise
    .then(({ position, delay }) => {
      Notify.success(`✅ Fulfilled promise ${position} in ${delay} ms`);
    })
    .catch(({ position, delay }) => {
      Notify.failure(`❌ Rejected promise ${position} in ${delay} ms`);
    });

  // promise
  //   .then(({ position, delay }) => {
  //     console.log(`✅ Fulfilled promise ${position} in ${delay} ms`);
  //   })
  //   .catch(({ position, delay }) => {
  //     console.log(`❌ Rejected promise ${position} in ${delay} ms`);
  //   });
}
