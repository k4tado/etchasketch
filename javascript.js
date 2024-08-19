
//set initial grid size
let gridSize = 16;
let squareElement;

//generate grid and set initial values to the grid and text content
generateGrid();
const value = document.querySelector("#value");
const input = document.querySelector("#slider");
const btn = document.querySelector("#btn");
value.textContent = input.value;

//check for input event update and regenerate grid
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
  gridSize = parseInt(value.textContent);
  gridcontainer.innerHTML = "";
  generateGrid();
});



//grid function which draws the grid row by row
function generateGrid() {
  for (i = 0; i < gridSize; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let i = 0; i < gridSize; i++) {
      squareElement = document.createElement("div");
      squareElement.classList.add("square");
      squareElement.addEventListener("mouseover", (event) => {
        event.target.classList.add("squareOver");
      });

      row.appendChild(squareElement);
      
    }
    gridcontainer.appendChild(row);
  }
}

btn.addEventListener("click", () => {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.classList.remove("squareOver");
  });
});