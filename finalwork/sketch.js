// 最終課題を制作しよう
let balls;
let count;
function setup(){
  createCanvas(windowWidth, windowHeight);
  balls = [];
  count = [];
}

function windowResized(){
 resizeCanvas(windowWidth, windowHeight);
}

const x = new Array(5).fill(255);
const y = new Array(50).fill(255);
const vx = new Array(50).fill(255);
const vy = new Array(50).fill(255);

function draw() {
    count++;
    background(0);
    x[0] = mouseX;
    y[0] = mouseY;
    fill(255, 0, 0);
    ellipse(x[0], y[0], 15, 15);

    for(let i = 1; i < x.length; i++){
        fill(52, 235, 70);
        x[i] += vx[i];
        y[i] += vy[i];
        vx[i] = int((x[i-1] - x[i]) * 0.1);
        vy[i] = int((y[i-1] - y[i]) * 0.1);
        ellipse(x[i], y[i], 15, 15);
    }

    for(let i = 0; i < balls.length; i++){
    let b = balls[i];
    fill(255);
    ellipse(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;
  }

  if(count % 1 == 0){
  const b = { x: width/2, y: height/2, size: 10, vx:random(2) - 1 , vy:random(2) - 1 };
  balls.push(b);
}
}
