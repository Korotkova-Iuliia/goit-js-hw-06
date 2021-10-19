const changeColorBtn = document.querySelector('button.change-color');
const body = document.querySelector('body');
const nameColor = document.querySelector('.color');

changeColorBtn.addEventListener('click', onChangeColor);

function onChangeColor() {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  nameColor.textContent = color;
}
// function onChangeColor() {
//   body.style.backgroundColor = getRandomHexColor();
//   const nameColor = document.querySelector('.color');
//   console.dir((nameColor.textContent = getRandomHexColor()));
// }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
