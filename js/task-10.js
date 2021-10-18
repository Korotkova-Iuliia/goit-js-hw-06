function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const controlsContainer = document.querySelector('#controls');
const inputBtn = controlsContainer.firstElementChild;
const boxesContainer = document.querySelector('#boxes');
// console.log(boxesContainer);
const boxes = boxesContainer.children;
console.log(boxes);
console.log(boxes.length);
inputBtn.addEventListener('input', onInput);

function onInput(event) {
  const amountBoxes = Number(event.currentTarget.value);
  console.log(amountBoxes);

  createBtn.addEventListener('click', onCreateBtnClick);
  const shapeEl = document.createElement('div');

  function onCreateBtnClick() {
    shapeEl.style.backgroundColor = getRandomHexColor();

    for (let i = 0; i < amountBoxes; i++) {
      console.log(amountBoxes);
      let sizeBoxes;
      sizeBoxes = `${Math.floor(30 + amountBoxes * 10)}px`;
      shapeEl.style.width = sizeBoxes;
      shapeEl.style.height = sizeBoxes;

      // console.log(indexOf(boxes));
      console.log('sgawrg');

      // return;
    }
    boxesContainer.appendChild(shapeEl);

    inputBtn.value = '';
    return;
  }
}
destroyBtn.addEventListener('click', destroyBoxes);
function destroyBoxes() {
  boxesContainer.remove();
  return;
}
