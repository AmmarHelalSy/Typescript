//Interface als datatype

interface IPerson {
    age: number;
    firstName: string;
    lastName: string;
}

// 
const somePerson: IPerson = {age: 44, firstName: 'Peter' ,lastName: 'Schulz'};


interface ICreature4 {
    readonly birthdate: number;
    //isCloned: boolean;
    // public age: number;

    age: number;
    height: number;
    areal: string;

    existingNow?:boolean;
    getAHintAboutCloned(): "some University studied this" | undefined;

}

class Creature4 implements ICreature4{
    readonly birthdate: number;
    private isCloned: boolean;

    constructor(public age: number, public height: number, public areal: string, isCloned: boolean,public existingNow?:boolean)
    {
        this.birthdate = new Date().getFullYear() - age;
        this.isCloned = isCloned;
    }

    getAHintAboutCloned(): "some University studied this" | undefined {
        if(this.isCloned)
            return 'some University studied this';
    }

    
    private getAHintAboutCloned1(): "some University studied this" | undefined {
        if(this.isCloned)
            return 'some University studied this';
    }

    
    public getAHintAboutCloned2(): "some University studied this" | undefined {
        return this.getAHintAboutCloned1();
    }

    static idOfCreatureDefinition: number = 3;
    static readonly idOfCreatureDefinitionNotChangeable: number = 3;
}

let x = new Creature4(44,9,'Berlin',true,false);

console.log(x.getAHintAboutCloned());
console.log(x.getAHintAboutCloned2());

