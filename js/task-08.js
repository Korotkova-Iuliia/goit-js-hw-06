const form = document.querySelector('form.login-form');
console.log(form);
form.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  const formData = new FormData(event.currentTarget);
  console.log(formData);
  formData.forEach((value, name) => {
    console.log(name);
    if (value === '' || name === '') {
      alert('все поля должны быть заполнены');
    }
    console.log(value);
    ('dhjdtyjdtykfSRgEG');
  });
  console.log(event.currentTarget.elements.email.value);
  event.currentTarget.elements.email.value;
}
