const form = document.querySelector('form.login-form');
// console.log(form);
form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  //   console.log(formData);
  if (
    event.currentTarget.elements.email.value === '' ||
    event.currentTarget.elements.password.value === ''
  ) {
    return alert('все поля должны быть заполнены');
  }
  const userData = {};
  formData.forEach((value, name) => {
    userData[name] = value;
  });
  console.log(userData);
  form.reset();
}
