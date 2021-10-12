const counterValue = 0;
const decBtn = document.querySelector('button.decrement');
// console.log(decBtn);
const incBtn = document.querySelector('.increment');
// console.log(incBtn);

decBtn.addEventListener('click', onDecBtnClick);
function onDecBtnClick(event) {
  console.log('decBtn');
  console.log(event.currentTarget.Value);
}
incBtn.addEventListener('click', onIncBtnClick);
function onIncBtnClick(event) {
  console.log('incBtn');
}
