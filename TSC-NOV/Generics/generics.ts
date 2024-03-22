const  createArrayPair = <T1,T2>(item1: T1,item2: T2): [T1, T2] =>
{
    return [item1,item2];
}

let x = createArrayPair('hello', 10);
console.log(x);