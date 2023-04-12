"strict mode";

///////////////
// Tiles
///////////////

const wrapper = document.getElementById("tiles");

let columns = Math.floor(document.body.clientWidth / 75);
let rows = Math.floor(document.body.clientHeight / 75);

const createTile = function (index) {
  const tile = document.createElement("div");

  tile.classList.add("tile");

  return tile;
};

const createTiles = function (quantity) {
  Array.from(Array(quantity)).map((tile, index) => {
    wrapper.appendChild(createTile(index));
  });
};

createTiles(columns * rows);

const createGrid = function () {
  wrapper.innerHTML = "";
  columns = Math.floor(document.body.clientWidth / 75);
  rows = Math.floor(document.body.clientHeight / 75);

  wrapper.style.setProperty("--columns", columns);
  wrapper.style.setProperty("--rows", rows);

  createTiles(columns * rows);
};

createGrid();

window.onresize = function () {
  createGrid();
};

/* ///////////////
// Canvas
///////////////

const canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

const TOTAL = 10;
const petalArray = [];

const petalImg = new Image();
petalImg.src = "slike/pahulja.svg";
petalImg.addEventListener("load", () => {
  for (let i = 0; i < TOTAL; i++) {
    petalArray.push(new Petal());
  }
  render();
});

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  petalArray.forEach((petal) => petal.animate());
  window.requestAnimationFrame(render);
}

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

let mouseX = 0;
function touchHandler(e) {
  mouseX = (e.clientX || e.touches[0].clientX) / window.innerWidth;
}
window.addEventListener("mousemove", touchHandler);
window.addEventListener("touchmove", touchHandler);

// Petal class
class Petal {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height * 2 - canvas.height;
    this.w = 25 + Math.random() * 15;
    this.h = 20 + Math.random() * 10;
    this.opacity = this.w / 40;
    this.flip = Math.random();

    this.xSpeed = 1.5 + Math.random() * 2;
    this.ySpeed = 1 + Math.random() * 1;
    this.flipSpeed = Math.random() * 0.03;
  }

  draw() {
    if (this.y > canvas.height || this.x > canvas.width) {
      this.x = -petalImg.width;
      this.y = Math.random() * canvas.height * 2 - canvas.height;
      this.xSpeed = 1.5 + Math.random() * 1.5;
      this.ySpeed = 1 + Math.random() * 1;
      this.flip = Math.random();
    }
    ctx.globalAlpha = this.opacity;
    ctx.drawImage(
      petalImg,
      this.x,
      this.y,
      this.w * (0.6 + Math.abs(Math.cos(this.flip)) / 3),
      this.h * (0.8 + Math.abs(Math.sin(this.flip)) / 5)
    );
  }

  animate() {
    this.x += this.xSpeed + mouseX * 3;
    this.y += this.ySpeed + mouseX * 2;
    this.flip += this.flipSpeed;
    this.draw();
  }
} */

///////////////
// Textarea autoresize
///////////////

const textarea = document.querySelector(".message-input");

textarea.addEventListener("keyup", function (e) {
  textarea.style.height = "4rem";
  let scHeight = e.target.scrollHeight;
  console.log(scHeight);
  textarea.style.height = `${scHeight}px`;
});
