

let gridSize = 20;

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
