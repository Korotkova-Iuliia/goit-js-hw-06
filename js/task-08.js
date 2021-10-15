const form = document.querySelector('form.login-form');
console.log(form);
form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  console.log(event.currentTarget.elements.email.value);
  event.currentTarget.elements.email.value;
  event.preventDefault();
}
