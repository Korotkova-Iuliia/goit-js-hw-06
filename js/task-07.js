const inputBtn = document.querySelector('input#font-size-control');
const textString = document.querySelector('span#text');
const valueMinInputBtn = inputBtn.getAttribute('min');
const valueMaxInputBtn = inputBtn.getAttribute('max');
console.log(valueMinInputBtn);
console.log(valueMaxInputBtn);
inputBtn.addEventListener('change', onInputBtnChange);

console.log(inputBtn);
console.log(textString);

function onInputBtnChange(event) {
  const values = [];
  console.log(values);
  for (let i = 16; i <= 96; i += 1) {
    values.push(i);
  }
  textString.style.fontSize = values;

  //   console.log(event.nextElementSibling.values);
}
