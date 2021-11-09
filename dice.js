class Die {

	x;
	y;
    z;
	random;
	totalScore = 0;

	 constructor (x, y) {
		this.x = x;
		this.y = y;
        this.z = 0;
	}
	
	roll() {
		random = (int)((Math.random() * 6) + 1);
		this.totalScore += random;
	}
	
	show (x, y) {
		this.x = x;
		this.y = y;
		fill(0, 0, 100);
		rect(x, y, 50, 50, 10);
		fill(0);
		this.roll();
        colorMode(HSB);
        let colorA = (int) ((Math.random() * 360) + 1);
        let colorB = (int) ((Math.random() * 100) + 1);
        let colorC = (int) ((Math.random() * 100) + 1);
		if (random == 1) {
			fill(colorA, colorB, colorC);
			ellipse(x + 25, y + 25, 10, 10);
		}
		else if (random == 2) {
			fill(colorA, colorB, colorC);
			ellipse(x + 10, y + 10, 10, 10);
			ellipse(x + 40, y + 40, 10, 10);
		}
		else if (random == 3) {
			fill(colorA, colorB, colorC);
			ellipse(x + 10, y + 10, 10, 10);
			ellipse(x + 25, y + 25, 10, 10);
			ellipse(x + 40, y + 40, 10, 10);
		}
		else if (random == 4) {
			fill(colorA, colorB, colorC);
			ellipse(x + 10, y + 10, 10, 10);
			ellipse(x + 40, y + 10, 10, 10);
			ellipse(x + 10, y + 40, 10, 10);
			ellipse(x + 40, y + 40, 10, 10);
		}
		else if (random == 5) {
			fill(colorA, colorB, colorC);
			ellipse(x + 10, y + 10, 10, 10);
			ellipse(x + 40, y + 10, 10, 10);
			ellipse(x + 10, y + 40, 10, 10);
			ellipse(x + 40, y + 40, 10, 10);
			ellipse(x + 25, y + 25, 10, 10);
		}
		else if (random == 6) {
			fill(colorA, colorB, colorC);
			ellipse(x + 10, y + 10, 10, 10);
			ellipse(x + 10, y + 25, 10, 10);
			ellipse(x + 10, y + 40, 10, 10);
			ellipse(x + 40, y + 10, 10, 10);
			ellipse(x + 40, y + 25, 10, 10);
			ellipse(x + 40, y + 40, 10, 10);
		}
	}
	
	getScore() {
        this.z = this.totalScore;
        this.totalScore = 0;
		return this.z;
	}
		
}
const die = new Die(50, 50);
var score;

function setup() {
    createCanvas(400, 400);
	background(0);
}

function draw() {
    if(frameCount % 25 == 0){
      colorMode(HSB);
      let colorA = (int) ((Math.random() * 360) + 1);
      let colorB = (int) ((Math.random() * 100) + 1);
      let colorC = (int) ((Math.random() * 100) + 1);
      background(colorA, colorB, colorC);
      for (var i = 0; i < 3; i++) {
          for (var j = 0; j < 4; j++) {
              die.show(j * 100 + 20, i * 100 + 50);
          }
          this.score = die.getScore();
      }
      textSize(32);
      fill(0, 0, 100);
      text("Total: ", 116, 385);
      text("", 260, 385);
      text(this.score, 210, 385);
    }
}

function mousePressed() {
	redraw();
}

 
