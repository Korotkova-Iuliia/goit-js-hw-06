const changeColorBtn = document.querySelector('button.change-color');
const body = document.querySelector('body');

changeColorBtn.addEventListener('click', onChangeColor);

function onChangeColor() {
  body.style.backgroundColor = getRandomHexColor();
  const nameColor = document.querySelector('.color');
  console.dir((nameColor.textContent = getRandomHexColor()));
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
