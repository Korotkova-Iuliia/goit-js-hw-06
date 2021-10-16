function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('button[data-create]');
console.log(createBtn);
const destroyBtn = document.querySelector('button[data-destroy]');
console.log(destroyBtn);
const controlsContainer = document.querySelector('#controls');
console.log(controlsContainer);
const inputBtn = controlsContainer.firstElementChild;
console.log(inputBtn);
const boxesContainer = document.querySelector('#boxes');
console.log(boxesContainer);
console.log(document.createElement('div'));

inputBtn.addEventListener('input', onIcreateBtnInput);
function onIcreateBtnInput(event) {
  console.log(Number(event.currentTarget.value));

  // if (event.currentTarget.value.length === inputDataLengthEl) {
  //   return event.currentTarget.classList.add('valid');
  // }

  // console.log(inputDataLengthEl);
  // event.currentTarget.classList.add('invalid');
  //    console.log(event.currentTarget.value.length);
}
// const dishes = document.querySelectorAll('.dishes > li');
// dishes.forEach((dish) => {
//   console.log(dish.dataset.id);
// });
// div#boxes
// function createBoxes(amount) {
//   const addContainerEl = document.createElement('div');
//     const addContainerEl = document.createElement('div');

//   addContainerEl.classList.add('item');
//   <div></div>;
// }
