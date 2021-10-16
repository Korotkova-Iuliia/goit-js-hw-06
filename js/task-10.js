function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('button[data-create]');
console.log(createBtn);
const destroyBtn = document.querySelector('button[data-destroy]');
console.log(destroyBtn);

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
