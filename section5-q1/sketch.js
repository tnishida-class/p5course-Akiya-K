// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
}
function draw(){
  background(255);
  balloon("Hello, world",mouseX,mouseY);
}

function balloon(t,x,y){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  fill(0);
  rect(x, y, w + p * 2, h + p * 2);
  triangle(x + 10, y + h, x, y + h + 20, x + 20, y + h)
  fill(0,255,0);
  text(t, x + p, y + h + p);
}
