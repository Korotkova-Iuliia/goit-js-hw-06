let counterValue = 0;
const decBtn = document.querySelector('button[data-action="decrement"]');
console.log(decBtn);
const incBtn = document.querySelector('button[data-action="increment"]');
console.log(incBtn);

decBtn.addEventListener('click', onDecBtnClick);
function onDecBtnClick(event) {
  console.log(event.currentTarget.value);
  counterValue -= 1;
  console.log(counterValue);
  return counterValue;
}
incBtn.addEventListener('click', onIncBtnClick);
function onIncBtnClick(event) {
  console.log(event.currentTarget.value);
  counterValue += 1;
  console.log(counterValue);
  return counterValue;
}
