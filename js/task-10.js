function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('button[data-create]');
// console.log(createBtn);
const destroyBtn = document.querySelector('button[data-destroy]');
// console.log(destroyBtn);
const controlsContainer = document.querySelector('#controls');
// console.log(controlsContainer);
const inputBtn = controlsContainer.firstElementChild;
// console.log(inputBtn);
const boxesContainer = document.querySelector('#boxes');
console.log(boxesContainer);

const boxes = boxesContainer.children;
console.log(boxes);

function getSize() {
  for (let i = 0; i < boxes.length; i++) {
    let sizeBoxes;
    sizeBoxes = `${Math.floor(30 + indexOf(boxes) * 10)}px`;
    console.log(indexOf(boxes));

    return;
  }
}
inputBtn.addEventListener('input', onInput);

function onInput(event) {
  const numberBoxes = Number(event.currentTarget.value);
  console.log(numberBoxes);

  createBtn.addEventListener('click', onCreateBtnClick);
  const shapeEl = document.createElement('div');

  function onCreateBtnClick(event) {
    shapeEl.style.backgroundColor = getRandomHexColor();
    shapeEl.style.width = `${getSize()}px`;
    shapeEl.style.height = '30px';
    console.log(shapeEl);
    boxesContainer.appendChild(shapeEl);

    console.log(boxes);
    console.log(boxes.length);
    inputBtn.value = '';
  }
}
