const form = document.querySelector('form.login-form');
// console.log(form);
form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  //   console.log(formData);
  formData.forEach((value, name) => {
    if (value === '' || name === '') {
      return alert('все поля должны быть заполнены');
    }
    console.log({ name, value });
  });

  form.reset();
}
