// Helicopter Game Start

// Set up canvas and graphics context
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let heliImg = document.createElement("img");
heliImg.src = "img/heliGreenTransparent.png";

// Draw Function
window.addEventListener("load", draw);

function draw() {
  drawGameOver();

  // Request Animation Frame
  requestAnimationFrame(draw);
}