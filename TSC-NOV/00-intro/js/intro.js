"use strict";
console.log("tsc funktioniert");
function add(a, b) {
    return a + b;
}
console.log(add(10, 15));
let p1 = document.getElementById('p1');
console.log("p1: ", p1);
console.log("typeof: ", typeof p1);
console.log("p1 instanceof HTMLElement: ", p1 instanceof HTMLElement);
console.log("p1 === null: ", p1 === null);
function login() {
    let hi = document.getElementById("hi");
    let user = document.getElementById("user");
    let u = document.getElementById('user').value;
    let z;
    console.log(hi === null || hi === void 0 ? void 0 : hi.innerHTML);
    console.log(hi === null || hi === void 0 ? void 0 : hi.innerText);
    console.log(hi === null || hi === void 0 ? void 0 : hi.textContent);
    if (hi != null && user != null)
        hi.innerText += u;
}
//# sourceMappingURL=intro.js.map