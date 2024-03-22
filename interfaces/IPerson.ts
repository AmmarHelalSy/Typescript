export interface IPerson{
    firstName: string;
    lastNmae: string;
    age: number;
}

export interface IFather extends IPerson
{
    //childern: List<IPerson> ;
}

export interface Combine{
    (part1:string,part2:string):string
}