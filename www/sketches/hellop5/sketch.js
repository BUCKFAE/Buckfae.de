function setup() {

    let canvas = createCanvas(640, 480);

    // Move the canvas so it’s inside our <div id="sketch-holder">.
    canvas.parent('sketch-holder');

    background(255, 0, 200);
}

function draw() {
    if (mouseIsPressed) {
        fill(0);
    } else {
        fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
}

function eraseEverything() {
    background(255, 0, 200)
}