"use strict";
console.log('\n ARRAYS');
let myArray1 = [];
// myArray1 = [4,5,6];
// myArray1 = ['a','b','c'];
let myNumbers = [5, 5.2, 654];
// myNumbers = ['s'];
let myStrings = ['r', 't'];
let myStrings2 = myStrings;
console.log("myStrings2 == myStrings ? 'gleich' : 'ungleich' >> ", myStrings2 == myStrings ? 'gleich' : 'ungleich');
console.log("myStrings2 == myStrings ? 'gleich' : 'ungleich' >> ", myStrings2 == myStrings ? 'gleich' : 'ungleich');
//copy
let myStringsCopy = [...myStrings2];
//comypre values
var s = JSON.stringify(myStrings);
console.log(s);
