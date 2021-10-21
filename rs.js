function setup() {
  x = 600;
  createCanvas(x, x);
}

function draw() {
  background(0);
  var sqrSize = 55;
  getRS();

} 
function getRS(){
  noFill();
  stroke(255, 0, 0);
  strokeWeight(x/50);
  
  let alpha_val = [];
  for (let i = 0; i <= 150; i++) {
    append(alpha_val, i / 150);
  }
  
  let colors = ['rgba(96, 60, 20,', 'rgba(156, 39, 6,', 'rgba(212, 91, 18,', 'rgba(243, 188, 46,', 'rgba(95, 84, 38,'];
  
  for (let i = 150; i > 0; i--) {
    append(alpha_val, i / 150);
  }
  
  stroke(colors[floor(frameCount / alpha_val.length) % 5] + str(alpha_val[frameCount % alpha_val.length]) + ')')
  
  
  
  triangle(x/4, x/8, x/2, x/4, x/5, x/2);
  line(x/5, x/2, x/(400/65), x/(400/300));
  line(x/5, x/2, x/(400/180), x/(400/300));
  line(x/(400/180), x/(400/300), x/(400/350), x/4);
  line(x/(400/350), x/4, x/(400/300), x/8);
  line(x/(400/300), x/8, x/(400/250), x/4);
  line(x/(400/250), x/4, x/(400/350), x/(400/250));
  line(x/(400/350), x/(400/250), x/(400/300), x/(400/300));
  line(x/(400/300), x/(400/300), x/2, x/2);
  line(x/2, x/2, x, x/2);
}

