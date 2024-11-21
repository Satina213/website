function Particle()  {
    this.pos = createVector(random(width),random(height));
    this.vel = p5.Vector.random2D();
    this.acc = createVector(0,0);

    this.show = function()  {
      colorMode(HSB);
      let col = frameCount%360;
      stroke(col,100,100);
      strokeWeight(2);
      point(this.pos.x,this.pos.y);
    } //End of show

    this.update = function()  {
      this.vel.add(this.acc);
      this.pos.add(this.vel);
      this.vel.limit(1);
      if (this.pos.x > width) this.pos.x = 0;
      if (this.pos.x < 0) this.pos.x = width;
      if (this.pos.y > height) this.pos.y = 0;
      if (this.pos.y < 0) this.pos.y = height;
    }
    this.applyForce = function()  {
      let x = this.pos.x/scl;
      let y = this.pos.y/scl;
      let xOff = x * inc;
      let yOff = y * inc;
      let angle = noise(xOff,yOff,zOff) * 4 * TWO_PI;
      let v = p5.Vector.fromAngle(angle,1);
      this.acc.setMag(0);
      this.acc.add(v);
    }

  }
