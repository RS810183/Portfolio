<script>
function setup() {
  var canvas = createCanvas(650, 300);
  canvas.parent("pong-container");
}
let x = 300;
let y = 200;
let xspeed = 3;
let yspeed = 1;
let posX = 0;
let posY = 0;
let streakCounter = 0;

function draw() {
  background(0);

  streak();

  move();

  ellipse(x, y, 30);

  bouncer();

  paddle();

  isOutOfBounds();

  rect(0, posY, 10, 50);
}

function move() {
  x += xspeed;
  y += yspeed;
}

function mouseMoved() {
  posY = mouseY;
  if (posY > 300) {
    posY = 300;
  }
}

function bouncer() {
  if (x > width) {
    xspeed = -xspeed;
  }
  if (y > height || y < 0) {
    yspeed = -yspeed;
  }
}

function paddle() {
  if (x < 10) {
    if (posY <= y && posY + 50 >= y) {
      xspeed = -xspeed;
      xspeed++;
      yspeed++;
    }
  }
}

function isOutOfBounds() {
  if (x < 0) {
    x = 300;
    y = 200;
    xspeed = 3;
    yspeed = 1;
  }
}

function streak() {
  if (x < 10) {
    if (posY <= y && posY + 50 >= y) {
      streakCounter++;
      console.log(streakCounter);
    } else {
      streakCounter = 0;
      console.log("You lost your streak!");
    }
  }
}
