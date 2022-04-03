// Getting DOM Nodes to manipulate
const container = document.getElementById("container");
const imageWrapper = document.getElementById("image-wrapper");

//  Defining boxes to render initially and for infinite scroll
const boxesCount = 10;
let currentBox = 1;

// Function to create Boxes
function createBoxes() {
  new Array(boxesCount).fill(1).forEach((_, index) => {
    const box = document.createElement("div");
    box.innerHTML = currentBox++;
    box.classList.add("box");
    imageWrapper.appendChild(box);
  });
}

// Function to handleScrollEvent
function handleScroll() {
  if (scrollY + innerHeight >= document.documentElement.scrollHeight)
    createBoxes();
}

// Init function
function init() {
  createBoxes();
}

// EventListeners for dom
document.addEventListener("DOMContentLoaded", init);
document.addEventListener("scroll", handleScroll);
