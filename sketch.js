let scl;
let xOff;
let yOff;
let zOff;
let rows;
let cols;
let inc;
let particles = [];
let particleCount;
let cut;
function setup() {
  let canvas = createCanvas(800, 800);
  canvas.parent("animation-container");
  background(0);
  scl = 30;
  xOff = 0;
  yOff = 10000;
  zOff = -10000;
  rows = height/scl;
  cols = width/scl;
  inc = 0.03;
  particleCount = 500;
  cut = floor(particleCount / 50);
  for (i = 0; i < particleCount; i++)  {
    particles[i] = new Particle;
  }
}

function draw() {
  //setting background alpha so particle traces slowly fade.
  colorMode(RGB);
  background(0,10);
  //rate of change for flowfield.
  zOff = frameCount * 0.005;
  //this cycles through particles array to keep a general spread of particles around.
  particles.splice(particles.length - cut,cut);
  for (var i = 0; i < cut; i++)  {
    particles.splice(0,0,new Particle);
  }
  //This is the loop for running the particle object functions

  for (i = 0; i < particles.length; i++)  {
    particles[i].show();
    particles[i].update();
    particles[i].applyForce();
  }
  //Enabling these lines of code shows the flowfield \/  \/  \/
  /*yOff = 0;
  for (y = 0; y < rows; y++)  {
    xOff = 0;
    for (x = 0; x < cols; x++)  {
      xOff+=inc;
      let angle = noise(xOff, yOff, zOff) * 4 * TWO_PI
      let v = p5.Vector.fromAngle(angle,12);
      v.setMag(15);
      push();
      translate(x*scl, y*scl);
      stroke(255);
      line(0,0,v.x,v.y);
      strokeWeight(3);
      point(0,0);
      pop();
    }
    yOff+=inc;
  }*/
  //End of flowfield visualization code
}
