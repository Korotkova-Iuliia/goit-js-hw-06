const inputBtn = document.querySelector('input#validation-input');
const inputDataLengthEl = Number(inputBtn.getAttribute('data-length'));
const borderInputBtnValid = document.querySelector('#validation-input');

inputBtn.addEventListener('blur', onInputBtnBlur);
function onInputBtnBlur(event) {
  if (event.currentTarget.value.length === inputDataLengthEl) {
    return event.currentTarget.classList.add('valid');
  }
  // console.log(inputDataLengthEl);
  event.currentTarget.classList.add('invalid');
  //    console.log(event.currentTarget.value.length);
}

// console.log(inputBtn);
// console.log(borderInputBtnValid);
// console.log(inputBtn.getAttribute('data-length'));
// console.log(inputDataLengthEl);
