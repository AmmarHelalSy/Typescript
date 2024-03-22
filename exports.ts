import { IPerson,Combine } from "./interfaces/IPerson";

export interface DevideFunction
{
     (a:number,b:number):number
}

export class Person implements IPerson{
    firstName: string;
    lastNmae: string;
    name?: string;
    age:number;
    constructor(lastName:string,age:number,firstName:string)
    {
        this.firstName= firstName;
        this.lastNmae = lastName;
        this.name = this.CombineName(firstName,lastName);// `${firstName} ${lastName}`
        this.age = age;
    }

    private CombineName : Combine = function(part1:string,part2:string)
    {
        return `${part1} ${part2}`;
    }
}