const inputBtn = document.querySelector('input#font-size-control');
const textString = document.querySelector('span#text');

inputBtn.addEventListener('input', onInputBtnChange);

function onInputBtnChange() {
  textString.style.fontSize = `${inputBtn.value}px`;
}
