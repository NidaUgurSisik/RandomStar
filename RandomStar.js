var spot={
	x:0,
	y:0
};

var col={
	r:0,
	g:255,
	b:120
};

function setup() {
  createCanvas(500,500);
	background(0);
}

function draw() {
  col.r=random(0,205);
	col.g=random(0,125);
	col.b=random(150,200);
	spot.x=random(0,width);
	spot.y=random(0,height);
  
  noStroke();
	fill(col.r,col.g,col.b);
  star(spot.x,spot.y,5,5/2,5);
  
  }
function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle / 2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}