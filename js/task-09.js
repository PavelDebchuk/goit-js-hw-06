

const colorjs = document.querySelector('.change-color');
const codeColor = document.querySelectorAll('.color');
const color = document.body;
// codeColor = color.textContent;

colorjs.addEventListener('click', getRandomHexColor);

let colors;

function getRandomHexColor() {
  color.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return color;
}




