function setup() {
  createCanvas(128,128);
}

function draw() {
  background(255);
  fill(153, 0, 153);
  noStroke();
  triangle(12,120,116,120,116,10);
  fill(255);
  stroke(241, 157, 181)
  triangle(0,108,106,108,106,0);
  textSize(32);
  fill(241, 157, 181)
  textFont("serif");
  text("46", 68, 100);
}
