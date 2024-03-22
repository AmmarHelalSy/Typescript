"use strict";
//ohne Konstruktor
class Creature {
}
const newCreature = new Creature();
console.log(newCreature.age); // undefined
// const newCreature1 = new Creature(1);
//mit Konstruktor
class Creature1 {
    constructor(age, height, areal, existingNow) {
        this.age = age;
        this.height = height;
        this.areal = areal;
        this.existingNow = existingNow;
    }
}
const newCreature1_1 = new Creature1(23, 45, 'Europa');
const newCreature1_2 = new Creature1(13, 25, 'Afrika', true);
console.log(newCreature1_1.age);
// const newCreature1 = new Creature(1);
//# sourceMappingURL=classes.js.map