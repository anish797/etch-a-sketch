function createGrid() {
  const grid = document.querySelector(".grid");
  const btn = document.querySelector(".reset");

  let dim = prompt("Enter dimension of grid");
  let x = 640 / dim;

  for (let i = 1; i <= dim; i++) {
    const pixelRow = document.createElement("div");
    for (let j = 1; j <= dim; j++) {
      const pixel = document.createElement("div");
      pixel.classList.add("pixel");
      pixel.style.height = `${x}px`;
      pixel.style.width = `${x}px`;
      pixelRow.appendChild(pixel);
    }
    pixelRow.classList.add("row");
    grid.appendChild(pixelRow);
  }

  const pixels = document.querySelectorAll(".pixel");
  pixels.forEach((pixel) => {
    pixel.addEventListener("mouseover", () => {
      pixel.style.backgroundColor = "blue";
    });
  });

  btn.addEventListener("click", () => {
    window.location.reload();
  });
}

createGrid();