let drone;
let dData;
let pid;
let setPoint;

function setup() {
    createCanvas(200, 500);
    drone = new Vehicle();
    pid = new PID();
    //HTML area for onscreen information (height, speed...)
    dData = createP();
    setPoint = createVector(width / 2, height - 20);
}

function draw() {
    meter(); // must run first
    drone.applyForce(pid.update(drone.pos, setPoint))
    drone.run();

}

function meter() {
    scale(1, -1);
    translate(0, -height);

    //hub
    dData.html("Height: " + (drone.pos.y - 20).toFixed(2) + "</br>" + "Speed: " + drone.vel.y.toFixed(2));

    let padding = 20;
    //canvas background
    background(240);
    stroke(0)
    strokeWeight(3)
    //main
    line(padding, padding, padding, height - padding)

    //distance markers
    for (let i = 0; i < 21; i++) {
        let y = padding + (height - (2 * padding)) * (i / 20);
        line(padding, y, padding + 8, y);
    }
}