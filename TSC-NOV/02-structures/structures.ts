console.log('\n ARRAYS');

let myArray1 = [];
// myArray1 = [4,5,6];
// myArray1 = ['a','b','c'];

let myNumbers: number[] = [5, 5.2,654]
// myNumbers = ['s'];

let myStrings: Array<string> = ['r', 't'];

let myStrings2 = myStrings;

console.log("myStrings2 == myStrings ? 'gleich' : 'ungleich' >> ", myStrings2 == myStrings ? 'gleich' : 'ungleich' );


console.log("myStrings2 == myStrings ? 'gleich' : 'ungleich' >> ", myStrings2 == myStrings ? 'gleich' : 'ungleich' );

//copy
let myStringsCopy = [...myStrings2];

//comypre values
var s = JSON.stringify(myStrings);
console.log(s);

function draw()
{
    type coordinate2D = [number,number];

    let x1 = (<HTMLInputElement> document.getElementById('x1')!).value;
    let y1 = (<HTMLInputElement> document.getElementById('y1')!).value;


    let point1: coordinate2D  = [+x1,+y1];
    let x2 = (<HTMLInputElement> document.getElementById('x2')!).value;
    let y2 = (<HTMLInputElement> document.getElementById('y2')!).value;

    let point2: coordinate2D  = [+x2,+y2];
    let x3 = (<HTMLInputElement> document.getElementById('x3')!).value;
    let y3 = (<HTMLInputElement> document.getElementById('y3')!).value;

    let point3: coordinate2D  = [+x3,+y3];

    let polygon1:SVGPolygonElement  = <any>document.getElementById("polygon1");
    

    let svg:SVGElement = <any>document.getElementById("svg");

}