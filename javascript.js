
//set initial grid size
let gridSize = 2;

//generate grid and set initial values to the grid and text content
generateGrid();
const value = document.querySelector("#value");
const input = document.querySelector("#slider");
value.textContent = input.value;

//check for input event update and regenerate grid
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
  gridSize = parseInt(value.textContent);
  container.innerHTML = "";
  generateGrid();
});

//grid function which draws the grid row by row
function generateGrid() {
  for (i = 0; i < gridSize; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let i = 0; i < gridSize; i++) {
      const squareElement = document.createElement("div");
      squareElement.classList.add("square");
      row.appendChild(squareElement);
    }
    container.appendChild(row);
  }
}
