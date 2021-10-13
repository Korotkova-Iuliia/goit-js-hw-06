const inputBtn = document.querySelector('input#font-size-control');
const textString = document.querySelector('span#text');
// const valueMinInputBtn = inputBtn.getAttribute('min');
// const valueMaxInputBtn = inputBtn.getAttribute('max');
// console.log(valueMinInputBtn);
// console.log(valueMaxInputBtn);
inputBtn.addEventListener('change', onInputBtnChange);

console.log(inputBtn);
console.log(textString);

function onInputBtnChange() {
  const inputBtnValue = inputBtn.value;

  textString.style.fontSize = `${inputBtnValue}px`;
}
