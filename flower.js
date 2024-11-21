var c = 10;
var n = 1400;

function setup() {
  let canvas = createCanvas(800, 800);
  canvas.parent("animation-flower");
  angleMode(DEGREES);
  background(0);
  colorMode(HSB);
  noStroke();
  //frameRate(12);
}

function draw() {
  fill(n%360,100,100);
  let p = n * 137.5;
  let r = c * sqrt(n);
  let x = r * cos(p) + width/2;
  let y = r * sin(p) + height/2;
  circle(x,y,15);
  if(n>0)  {
  n--;
  }
}
