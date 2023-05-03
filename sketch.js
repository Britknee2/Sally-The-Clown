var sally=0
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(21,345,257); // navy blue
  //circle
  stroke(255,225,127) // an RGB color for the circle's border
  strokeWeight(5);
  fill(243, 23, 23, sally ); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(233,200,200); // center of canvas, 20px dia
  fill(230,130,203,mouseX);
  stroke(255,5,127);
  strokeWeight(5);
  ellipse(230,200,200,sally);
  sally=sally+10;
  ellipse(mouseX,mouseY,20,20,);
  fill(101, 40, 231);
  textSize(30)
  textFont("Georgia")
  text('sallys anger', 12,150,100);

}

function mousePressed() {
 if (sally>= 50){
  sally= 0;
 } else {
  sally=sally+5;
  }
}

