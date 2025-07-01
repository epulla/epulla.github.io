let cityImage;

function preload() {
  cityImage = loadImage("/images/city.png"); // asegúrate de que esté en /public
}

let textPoints = [];
let usedPoints = [];
let fontGraphics;

let showInstructions = true;

let staticSky;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("sketch-holder");
  noStroke();
  if (/Mobi|Android|iPhone|iPad/.test(navigator.userAgent)) {
    frameRate(30); // o incluso 24
  } else {
    frameRate(60);
  }

  pixelDensity(1); // para evitar problemas de escala en pantallas de alta resolución

  // Crear imagen de texto en un gráfico
  fontGraphics = createGraphics(width, height);
  fontGraphics.pixelDensity(1);
  fontGraphics.textSize(width * 0.1); // 10% del ancho de pantalla
  fontGraphics.textAlign(CENTER);
  fontGraphics.fill(255);
  fontGraphics.text("Feliz Viaje Elliee!!", width / 2, height * 0.45);

  fontGraphics.loadPixels();
  textPoints = [];

  for (let y = 0; y < fontGraphics.height; y += 8) {
    for (let x = 0; x < fontGraphics.width; x += 8) {
      let index = (x + y * fontGraphics.width) * 4;
      let alpha = fontGraphics.pixels[index + 3];
      if (alpha > 128) {
        textPoints.push(createVector(x, y));
      }
    }
  }

  usedPoints = new Array(textPoints.length).fill(false);

  // Crear el gráfico estático
  staticSky = createGraphics(width, height);

  // Cielo degradado
  for (let y = 0; y < height; y++) {
    let inter = map(y, 0, height, 0, 1);
    let c = lerpColor(color(10, 10, 35), color(0, 0, 15), inter);
    staticSky.stroke(c);
    staticSky.line(0, y, width, y);
  }

  // Estrellas (fijas)
  staticSky.noStroke();
  for (let i = 0; i < 200; i++) {
    let x = random(width);
    let y = random(height * 0.9);
    let size = random(1, 3);
    let alpha = random(180, 255);
    staticSky.fill(255, alpha);
    staticSky.ellipse(x, y, size);
  }
}

function draw() {
  image(staticSky, 0, 0); // dibuja el fondo estático
  drawCity();
  drawFireworks();

  if (showInstructions) {
    drawInstructions();
  }
}

function drawCity() {
  let imgW = cityImage.width;
  let imgH = cityImage.height;

  // Aumentamos la escala de altura al 25% del canvas
  let targetHeight = height * 0.4;
  let scale = targetHeight / imgH;
  let scaledW = imgW * scale;
  let scaledH = imgH * scale;

  let yPos = height - scaledH * 0.75; // ⬅️ esto asegura que esté pegada al borde inferior

  for (let x = 0; x < width; x += scaledW) {
    image(cityImage, x, yPos, scaledW, scaledH);
  }
}

function drawInstructions() {
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(width * 0.025); // proporcional al ancho

  const isTouch = /Mobi|Android|iPhone|iPad|Touch/.test(navigator.userAgent);

  let message = isTouch
    ? "Toca ambos lados con los pulgares\nrepetidamente"
    : "Presiona las teclas A y D repetidamente";

  if (isTouch) {
    textSize(width * 0.05); // más grande para móviles
  }

  // fondo semitransparente
  fill(0, 200);
  rect(0, height * 0.4, width, height * 0.2);

  fill(255);
  text(message, width / 2, height / 2);
}

let fireworks = [];

function keyPressed() {
  if (key === "A" || key === "a") {
    showInstructions = false;
    fireworks.push(new Firework(0, width / 2));
  }
  if (key === "D" || key === "d") {
    showInstructions = false;
    fireworks.push(new Firework(width / 2, width));
  }
}

function mousePressed() {
  handleFireworkTrigger(mouseX);
}

function touchStarted() {
  handleFireworkTrigger(touches[0]?.x || mouseX);
}

function handleFireworkTrigger(x) {
  showInstructions = false;
  if (x < width / 2) {
    fireworks.push(new Firework(0, width / 2)); // como tecla A
  } else {
    fireworks.push(new Firework(width / 2, width)); // como tecla D
  }
}

function drawFireworks() {
  for (let i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
}

class Firework {
  constructor(xMin, xMax) {
    this.x = xMin + Math.random() * (xMax - xMin); // posición horizontal aleatoria dentro del rango
    this.color = this.pickColor();
    this.explodeHeight = height * (0.3 + Math.random() * 0.3); // altura entre 30% y 60%
    this.firework = new Particle(this.x, height, true, this.color);
    this.exploded = false;
    this.particles = [];
  }

  pickColor() {
    const r = Math.floor(Math.random() * 3);
    if (r === 0) return color(255, 255, 0); // amarillo
    if (r === 1) return color(0, 255, 255); // cyan
    return color(255, 0, 255); // magenta
  }

  update() {
    if (!this.exploded) {
      this.firework.applyForce(createVector(0, -0.4));
      this.firework.update();

      if (this.firework.pos.y <= this.explodeHeight) {
        this.exploded = true;

        for (let i = 0; i < 100; i++) {
          let p = new Particle(
            this.firework.pos.x,
            this.firework.pos.y,
            false,
            this.color
          );

          // 🎯 5% de probabilidad de anclar a un punto del texto
          if (Math.random() < 0.15) {
            const freeIndex = usedPoints.findIndex((u) => !u);
            if (freeIndex !== -1) {
              p.lockTo(textPoints[freeIndex].x, textPoints[freeIndex].y);
              usedPoints[freeIndex] = true;
            }
          }

          this.particles.push(p);
        }
      }
    }

    for (let p of this.particles) {
      p.applyForce(createVector(0, 0.08));
      p.update();
    }

    this.particles = this.particles.filter((p) => !p.finished());
  }

  show() {
    if (!this.exploded) this.firework.show();
    for (let p of this.particles) {
      p.show();
    }
  }

  done() {
    return this.exploded && this.particles.length === 0;
  }
}

class Particle {
  constructor(x, y, isFirework, colorOverride) {
    this.pos = createVector(x, y);
    this.vel = isFirework
      ? createVector(0, random(-12, -9))
      : p5.Vector.random2D().mult(random(2, 6));
    this.acc = createVector(0, 0);
    this.isFirework = isFirework;
    this.color = colorOverride;
    this.lifespan = 255;
    this.locked = false; // se queda fija si forma parte del texto
  }

  applyForce(force) {
    if (!this.locked) {
      this.acc.add(force);
    }
  }

  update() {
    if (!this.isFirework && !this.locked) {
      this.vel.mult(0.95);
      this.lifespan -= 3;
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  finished() {
    return !this.locked && this.pos.y > height;
  }

  show() {
    push();
    strokeWeight(this.locked ? 3 : 2);
    stroke(
      this.color.levels[0],
      this.color.levels[1],
      this.color.levels[2],
      this.locked ? 255 : this.lifespan
    );
    point(this.pos.x, this.pos.y);
    pop();
  }

  lockTo(x, y) {
    this.locked = true;
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
  }
}
