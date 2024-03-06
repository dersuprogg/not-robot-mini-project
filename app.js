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
