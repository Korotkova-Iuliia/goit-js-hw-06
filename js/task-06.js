const inputBtn = document.querySelector('input#validation-input');
console.log(inputBtn);

//
inputBtn.addEventListener('blur', onInputBtnBlur);
function onInputBtnBlur() {
  if (event.currentTarget.value.length === 6) {
    console.log('fyj');
  }

  console.log('эsgaeraerhэ');
  console.log(event.currentTarget.value.length);
}
