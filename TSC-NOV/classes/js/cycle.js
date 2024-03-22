"use strict";
class cycle {
    constructor(center, radius) {
        this.center = center;
        this.radius = radius;
    }
    area() {
        return this.radius ** 2 * Math.PI;
    }
}
let kreis1 = new cycle([1, 2], 3);
let area = kreis1.area();
console.log(area);
//# sourceMappingURL=cycle.js.map