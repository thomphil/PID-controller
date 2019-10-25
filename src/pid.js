class PID {
    constructor(kP = 0, kI = 0, kD = 0) {
        this.kP = kP;
        this.kI = kI;
        this.kD = kD;

        this.P;
        this.I;
        this.D;

        this.last_error;

    }

    update(current_pos, set_point) {
        // let error = p5.Vector.sub(set_point, current_pos);

        // this.P = error;
        // this.I += error;
        // this.D = error - this.last_error;

        // this.last_error = error;

        // return (p5)
    }
}