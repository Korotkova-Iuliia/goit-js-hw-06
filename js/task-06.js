const inputBtn = document.querySelector('input#validation-input');

const inputDataLengthEl = Number(inputBtn.getAttribute('data-length'));
const borderInputBtnValid = document.querySelector('style#validation-input');

console.log(inputBtn);
console.log(borderInputBtnValid);
console.log(inputBtn.getAttribute('data-length'));
console.log(inputDataLengthEl);

//
inputBtn.addEventListener('blur', onInputBtnBlur);
function onInputBtnBlur(event) {
  if (event.currentTarget.value.length === inputDataLengthEl) {
    inputBtn.style.borderColor = borderInputBtnValid;
    console.log('fyj');
  }
  console.log(inputDataLengthEl);

  console.log('эsgaeraerhэ');
  console.log(event.currentTarget.value.length);
}
