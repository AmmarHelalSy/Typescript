console.log("tsc funktioniert");

function add(a: number,b: number): number
{
    return a + b;
}

console.log(add(10,15));

let p1 = document.getElementById('p1');
console.log("p1: ",p1);
console.log("typeof: ", typeof p1);
console.log("p1 instanceof HTMLElement: ",p1 instanceof HTMLElement);
console.log("p1 === null: ",p1 === null);

function login(): void
{
    let hi = document.getElementById("hi") ;
    let user = document.getElementById("user") as HTMLInputElement;
    let u: string = (<HTMLInputElement> document.getElementById('user')!).value;
    
    let z!: string;

    console.log(hi?.innerHTML);
    console.log(hi?.innerText);
    console.log(hi?.textContent);
    if(hi != null && user != null)
        hi.innerText += u;
}