"use strict";
//Interface als datatype
// 
const somePerson = { age: 44, firstName: 'Peter', lastName: 'Schulz' };
class Creature4 {
    constructor(age, height, areal, isCloned, existingNow) {
        this.age = age;
        this.height = height;
        this.areal = areal;
        this.existingNow = existingNow;
        this.birthdate = new Date().getFullYear() - age;
        this.isCloned = isCloned;
    }
    getAHintAboutCloned() {
        if (this.isCloned)
            return 'some University studied this';
    }
    getAHintAboutCloned1() {
        if (this.isCloned)
            return 'some University studied this';
    }
    getAHintAboutCloned2() {
        return this.getAHintAboutCloned1();
    }
}
Creature4.idOfCreatureDefinition = 3;
Creature4.idOfCreatureDefinitionNotChangeable = 3;
let x = new Creature4(44, 9, 'Berlin', true, false);
console.log(x.getAHintAboutCloned());
console.log(x.getAHintAboutCloned2());
