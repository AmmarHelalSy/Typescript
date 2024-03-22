"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(lastName, age, firstName) {
        this.CombineName = function (part1, part2) {
            return "".concat(part1, " ").concat(part2);
        };
        this.firstName = firstName;
        this.lastNmae = lastName;
        this.name = this.CombineName(firstName, lastName); // `${firstName} ${lastName}`
        this.age = age;
    }
    return Person;
}());
exports.Person = Person;
