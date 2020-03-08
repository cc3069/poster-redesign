let slider1;
let slider2;
let slider3;
function setup() {
    createCanvas(windowWidth, windowHeight);
    slider1 = createSlider(0, 255);
    slider2 = createSlider(0,255);
    slider3 = createSlider(0,255);
}
function draw() {
    background(0,0, slider1.value());
    //text
    fill("yellow");
    textSize(32);
    text('RAMEN 2.0', 300, 50);
    //bowl
    fill("rgb(220,20,60)")
    arc(620, 400, 500, 500, 0, -PI, CHORD);

    //arcs
    fill("rgb(0,0,205)");
    arc(620, 700, 250, 250, -PI, 0, CHORD);
    //egg
    ellipseMode(RADIUS);
    fill("white"); 
    ellipse(800, 210, 91, 91); 
    ellipseMode(CENTER); 
    fill("#ffd85c"); 
    ellipse(800, 210, 90, 90); 
    //ham
    fill("rgb(255,69,0)")
    rect(430, 150, 55, 125, 225, 0, 225, 0);
    rect(470, 155, 55, 125, 225, 0, 225, 0);
    //chopsticks
    fill("rgb(255,240,245)");
    rect(930, 150, 10, 455);
    rect(960, 150, 10, 455);
    //1st round
    fill(0, 0, frameCount % 255);
    arc(400, 300, 50, 50, 0, -PI, CHORD);
    arc(450, 300, 50, 50, -PI, 0, CHORD);
    arc(500, 300, 50, 50, 0, -PI, CHORD);
    arc(550, 300, 50, 50, -PI, 0, CHORD);
    arc(600, 300, 50, 50, 0, -PI, CHORD);
    arc(650, 300, 50, 50, -PI, 0, CHORD);
    arc(700, 300, 50, 50, 0, -PI, CHORD);
    arc(750, 300, 50, 50, -PI, 0, CHORD);
    arc(800, 300, 50, 50, 0, -PI, CHORD);
    arc(850, 300, 50, 50, -PI, 0, CHORD);
    //2nd round
    arc(400, 350, 50, 50, 0, -PI, CHORD);
    arc(450, 350, 50, 50, -PI, 0, CHORD);
    arc(500, 350, 50, 50, 0, -PI, CHORD);
    arc(550, 350, 50, 50, -PI, 0, CHORD);
    arc(600, 350, 50, 50, 0, -PI, CHORD);
    arc(650, 350, 50, 50, -PI, 0, CHORD);
    arc(700, 350, 50, 50, 0, -PI, CHORD);
    arc(750, 350, 50, 50, -PI, 0, CHORD);
    arc(800, 350, 50, 50, 0, -PI, CHORD);
    arc(850, 350, 50, 50, -PI, 0, CHORD); 
    //3nd round
    arc(400, 400, 50, 50, 0, -PI, CHORD);
    arc(450, 400, 50, 50, -PI, 0, CHORD);
    arc(500, 400, 50, 50, 0, -PI, CHORD);
    arc(550, 400, 50, 50, -PI, 0, CHORD);
    arc(600, 400, 50, 50, 0, -PI, CHORD);
    arc(650, 400, 50, 50, -PI, 0, CHORD);
    arc(700, 400, 50, 50, 0, -PI, CHORD);
    arc(750, 400, 50, 50, -PI, 0, CHORD);
    arc(800, 400, 50, 50, 0, -PI, CHORD);
    arc(850, 400, 50, 50, -PI, 0, CHORD); 
}
