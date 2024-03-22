import { DevideFunction,Person } from "./exports";

const myDevideFunction:DevideFunction = function(a:number,b:number)
{
     return a/b;
}

console.log(myDevideFunction(4,2));

const person1 : Person = new Person('Helal',37, "Ammar");

console.log(person1.name);