function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const controlsContainer = document.querySelector('#controls');
const inputBtn = controlsContainer.firstElementChild;
const boxesContainer = document.querySelector('#boxes');

let sizeBoxes = 30;

createBtn.addEventListener('click', onCreateBtnClick);
const shapeEl = document.createElement('div');

function onCreateBtnClick() {
  const amountBoxes = inputBtn.value;

  for (let i = 0; i < amountBoxes; i++) {
    sizeBoxes += 10;
    const shapeEl = document.createElement('div');
    shapeEl.style.backgroundColor = getRandomHexColor();
    shapeEl.style.width = `${sizeBoxes}px`;
    shapeEl.style.height = `${sizeBoxes}px`;
    boxesContainer.appendChild(shapeEl);
    inputBtn.value = '';
  }
}

destroyBtn.addEventListener('click', destroyBoxes);
function destroyBoxes() {
  boxesContainer.remove();
  return;
}

// У цьому коді працює лише, якщо натискати на стрілки в input
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
// const createBtn = document.querySelector('button[data-create]');
// const destroyBtn = document.querySelector('button[data-destroy]');
// const controlsContainer = document.querySelector('#controls');
// const inputBtn = controlsContainer.firstElementChild;
// const boxesContainer = document.querySelector('#boxes');
// const boxes = boxesContainer.children;
// let sizeBoxes;
// inputBtn.addEventListener('input', onInput);

// function onInput() {
//   createBtn.addEventListener('click', onCreateBtnClick);

//   const amountBoxes = inputBtn.value;
//   const shapeEl = document.createElement('div');

//   function onCreateBtnClick() {
//     shapeEl.style.backgroundColor = getRandomHexColor();

//     for (let i = 0; i < amountBoxes; i++) {
//       sizeBoxes = `${Math.floor(30 + amountBoxes * 10)}px`;
//       shapeEl.style.width = sizeBoxes;
//       shapeEl.style.height = sizeBoxes;
//       boxesContainer.appendChild(shapeEl);
//       inputBtn.value = '';
//     }
//   }
// }
// destroyBtn.addEventListener('click', destroyBoxes);
// function destroyBoxes() {
//   boxesContainer.remove();
//   return;
// }
