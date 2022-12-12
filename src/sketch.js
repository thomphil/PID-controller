let drone;
let dData;
let pid;
let setPoint;
let log;
let logData = [];

function setup() {
    createCanvas(200, 540);
    drone = new Vehicle();
    pid = new PID(0.001, 0.01, 0.001);
    //HTML area for onscreen information (height, speed...)
    dData = createP();
    log = createP();
    setPoint = createVector(width / 2, height - 20);
}

function draw() {
    meter(); // must run first
    let next = pid.update(drone.pos, setPoint);
    drone.applyForce(next);
    drone.run();

}

function meter() {
    scale(1, -1);
    translate(0, -height);

    //hub
    dData.html("Height: " + (drone.pos.y - 20).toFixed(2) + "</br>" + "Speed: " + drone.vel.y.toFixed(2));

    if (drone.pos.y - 20 != 500) {
        logData.push(drone.pos.y - 20);
        output = ""
        for (const entry of logData) {
            output = entry + "</br>" + output;
        }
        log.html(output)
    }
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