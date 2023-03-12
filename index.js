const dodger = document.getElementById("dodger");

dodger.style.background = "#FF69B4";

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});

function moveDodgerRight() {
  const rightP = dodger.style.left.replace("px", "");
  const right = parseInt(rightP, 10);

  if (right < 360) {
    dodger.style.left = `${right + 1}px`;
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowRight") {
    moveDodgerRight();
  }
});
