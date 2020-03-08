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
}
