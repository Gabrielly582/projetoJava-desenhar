function setup() {
    createCanvas(600, 600);
  background("white");
  }
  function draw() {
    stroke("yellow");
    fill("red");
    
   
   if(mouseIsPressed) {
     rect(mouseX, mouseY, 25, 35);
   }
    
  }