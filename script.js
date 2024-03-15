function createGrid() {
  const grid = document.querySelector(".grid");
  const resetBtn = document.querySelector(".reset");
  const colorInput = document.querySelector("input[type='color']");

  let isDrawing = false;

  function createNewGrid() {
    grid.innerHTML = "";
    let dim = prompt("Enter dimension of grid");
    let x = 400 / dim;

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
      pixel.addEventListener("mousedown", () => {
        isDrawing = true;
        setColor(pixel);
      });

      pixel.addEventListener("mouseenter", () => {
        if (isDrawing) {
          setColor(pixel);
        }
      });

      pixel.addEventListener("mouseup", () => {
        isDrawing = false;
      });
    });
  }

  function setColor(pixel) {
    pixel.style.backgroundColor = colorInput.value;
  }

  resetBtn.addEventListener("click", createNewGrid);
}

createGrid();
