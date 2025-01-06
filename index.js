const container = document.getElementById("container");
const addSize = document.getElementById("addsize");
const erase = document.getElementById("erase");
const colorPicker = document.getElementById("selectedColor");

let isHold = false;
let selectedColor = colorPicker.value;

console.log(selectedColor);

main();

function main() {
  // create the initial grid
  createGrid(16);

  // button options
  erase.addEventListener("click", clearGrid);
  addSize.addEventListener("click", changeSize);
  colorPicker.addEventListener(
    "input",
    (e) => (selectedColor = e.target.value)
  );

  // mouse event
  document.addEventListener("mousedown", () => (isHold = true));
  document.addEventListener("mouseup", () => (isHold = false));
}

function createGrid(size) {
  container.innerHTML = "";
  let div_size = 600 / size;

  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("grid");
    div.style.width = `${div_size}px`;
    div.style.height = `${div_size}px`;

    if (i === 0) {
      div.classList.add("top-left");
    } else if (i === size - 1) {
      div.classList.add("top-right");
    } else if (i === size * (size - 1)) {
      div.classList.add("bottom-left");
    } else if (i === size * size - 1) {
      div.classList.add("bottom-right");
    }

    div.addEventListener("mousedown", () => {
      if (isHold) div.style.backgroundColor = selectedColor;
    });

    div.addEventListener("mouseover", () => {
      if (isHold) div.style.backgroundColor = selectedColor;
    });

    container.appendChild(div);
  }
}

function clearGrid() {
  const grids = document.querySelectorAll(".grid");
  grids.forEach((grid) => {
    grid.style.backgroundColor = "white";
  });
}

function changeSize() {
  let size = prompt("Enter the size of the grid: ");

  if (isNaN(size) || size === null || size < 1) {
    alert("Please enter a valid number");
    return;
  }

  if (size > 16 && size <= 100) {
    createGrid(size);
  }
}
