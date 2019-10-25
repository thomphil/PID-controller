class Vehicle {
    constructor(x = width / 2, y = 20) {
        this.pos = createVector(x, y); //position
        this.vel = createVector(0, 0); //velocity
        this.acc = createVector(0, 0); //acceleration

        this.mas = 20; //object mass
    }

    run() {
        this.update();
        this.render();
    }

    update() {
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        // clear acceleration
        this.acc.set(0, 0);
    }

    applyForce(vec) {
        //take the objects mass into consideration
        //when applying a force
        vec.div(this.mas);
        this.acc.add(vec);
    }

    render() {
        stroke(0);
        strokeWeight(2);
        rectMode(CENTER);
        rect(this.pos.x, this.pos.y, 20, 20);
    }
}