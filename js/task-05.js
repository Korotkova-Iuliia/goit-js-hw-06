const inputBtn = document.querySelector('input#name-input');
console.log(inputBtn);
const output = document.querySelector('span#name-output');
console.log(output);

inputBtn.addEventListener('input', onInputBtnInput);
function onInputBtnInput(event) {
  output.textContent = event.currentTarget.value;
}
