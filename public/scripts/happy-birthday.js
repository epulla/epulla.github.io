class Firework {
  constructor() {
    this.hu = random(255);
    let x = random(50, width - 100);
    this.firework = new Particle(x, height, this.hu, true);
    this.exploded = false;
    this.particles = [];
    this.allArrived = false;
  }

  done() {
    return this.exploded && this.particles.length === 0;
  }

  update() {
    if (!this.exploded) {
      this.firework.applyForce(gravity);
      this.firework.update();
      if (this.firework.vel.y >= 0) {
        this.exploded = true;
        this.explode();
      }
    }
    for (let p of this.particles) {
      this.allArrived = true;
      if (!p.seekComplete) {
        this.allArrived = false;
        break;
      }
    }
    for (var i = this.particles.length - 1; i >= 0; i--) {
      if (this.allArrived) {
        this.particles[i].applyForce(gravity);
      }
      this.particles[i].update();
      if (this.particles[i].done()) {
        this.particles.splice(i, 1);
      }
    }
  }

  explode() {
    let x = this.firework.pos.x;
    let y = this.firework.pos.y;
    this.letters = font.textToPoints(letter[textCounter], x, y, 150);
    for (let l of this.letters) {
      var p = new Particle(
        this.firework.pos.x,
        this.firework.pos.y,
        this.hu,
        false,
        true,
        l
      );
      this.particles.push(p);
    }
    textCounter++;
    if (textCounter == letter.length) {
      textCounter = 0;
    }
  }

  show() {
    if (!this.exploded) this.firework.show();
    for (let p of this.particles) p.show();
  }
}

class Particle {
  constructor(x, y, hu, firework, seek, target) {
    this.pos = createVector(x, y);
    this.firework = firework;
    this.lifespan = 255;
    this.hu = hu;
    this.acc = createVector();
    this.vel = createVector();
    this.seek = seek;
    if (this.seek) {
      this.seekComplete = false;
      this.target = createVector(target.x, target.y);
    } else {
      this.seekComplete = true;
    }
    if (this.firework) {
        // Calculate velocity needed to reach middle-upper area (30% from top)
        // Using physics: v² = u² + 2as, where final v=0, a=gravity(0.2), s=distance
        let targetY = height * 0.3; // Target explosion point at 30% from top
        let distance = height - targetY; // Distance to travel upward
        let velocityNeeded = -sqrt(2 * 0.2 * distance); // Negative because going up
        this.vel = createVector(0, velocityNeeded);
    }
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    if (!this.seekComplete) {
      this.applyForce(this.arrive());
    } else {
      if (!this.firework) {
        this.vel.mult(0.9);
        this.lifespan -= 1;
      }
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
    if (this.seek) {
      this.checkSeek();
    }
  }

  checkSeek() {
    if (this.target.dist(this.pos) < 10) {
      this.seekComplete = true;
    }
  }

  arrive() {
    let desired = p5.Vector.sub(this.target, this.pos);
    let steer = p5.Vector.sub(desired, this.vel);
    steer.limit(0.2);
    return steer;
  }

  done() {
    if (this.lifespan < 0) {
      return true;
    } else {
      return false;
    }
  }

  show() {
    colorMode(HSB);
    if (!this.firework) {
      strokeWeight(4);
      stroke(this.hu, 255, 255, this.lifespan);
    } else {
      strokeWeight(8);
      stroke(this.hu, 255, 255);
    }
    point(this.pos.x, this.pos.y);
  }
}

let fireworks = [];
let gravity;
let letter;
let textCounter = 0;
let font;

function preload() {
  font = loadFont("/fonts/MomoTrustDisplay-Regular.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  letter = "FELIZ CUMPLE MI GEN!".replace(/\s/g, "").split("");
  textCounter = 0;
  gravity = createVector(0, 0.2);
  addFirework();
  setInterval(addFirework, 2000);
}

function draw() {
  colorMode(RGB);
  background(0, 0, 0, 25);
  renderFireworks();
}

function addFirework() {
  fireworks.push(new Firework());
}

function renderFireworks() {
  for (var i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
}
