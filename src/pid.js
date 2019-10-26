class PID {
    constructor(kP = 0, kI = 0, kD = 0) {
        this.kP = kP;
        this.kI = kI;
        this.kD = kD;

        this.prev_error = createVector(0, 0);
        this.sum_error = createVector(0, 0);

    }

    update(current_pos, set_point) {
        let error = p5.Vector.sub(set_point, current_pos);
        this.sum_error.add(error);
        let deriv = p5.Vector.sub(error, this.prev_error);

        this.prev_error = error;
        let weighedP = p5.Vector.mult(error, this.kP);
        let weighedI = p5.Vector.mult(this.sum_error, this.kI);
        let weighedD = p5.Vector.mult(deriv, this.kD)

        let output = weighedP.add(weighedI.add(weighedD));
        return output;
    }
}