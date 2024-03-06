const colorText = document.querySelector(".random-color");
const colorsContainer = document.querySelector(".colors-container");
const colorBoxes = document.querySelectorAll(".colors-container__box");
const continueBtn = document.querySelector(".btn--submit");

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const letters = ["a", "b", "c", "d", "e", "f"];
const digitsAndLetters = digits.concat(letters);

function chooseRandElement(arr) {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

function generateRandColor() {
  let color = "";
  for (let i = 0; i < 6; i++) {
    color += chooseRandElement(digitsAndLetters);
  }

  return `#${color}`;
}

function generateColorPalette() {
  const colorPalette = [];
  for (let i = 0; i < 9; i++) {
    colorPalette.push(generateRandColor());
  }
  const selectedColor = chooseRandElement(colorPalette);

  for (let i = 0; i < 9; i++) {
    colorBoxes[i].firstElementChild.textContent = colorPalette[i];
    colorBoxes[i].style.backgroundColor = colorPalette[i];
  }

  colorText.textContent = selectedColor;
  colorText.style.borderBottom = `4px solid ${selectedColor}`;
}

function checkUserChosenColor() {
  colorsContainer.addEventListener("click", (e) => {
    const selectedColor = colorText.textContent;
    if (e.target.classList.contains("box-color")) {
      const userSelectedColor = e.target.textContent;
      if (userSelectedColor === selectedColor) {
        continueBtn.classList.remove("btn--disabled");
      } else {
        alert("reCaptcha failed");
        generateColorPalette();
      }
    }
  });
}

document.addEventListener("DOMContentLoaded", generateColorPalette);

document.addEventListener("DOMContentLoaded", checkUserChosenColor);
