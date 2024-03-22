//ohne Konstruktor
class Creature{
    age!: number;
    height!: number;
    areal!: string;
    existingNow!: boolean;
}

const newCreature = new Creature();

console.log(newCreature.age);// undefined

// const newCreature1 = new Creature(1);

//mit Konstruktor
class Creature1{
    constructor(public age: number, public height: number, public areal: string,public existingNow?:boolean){}
    
}

const newCreature1_1 = new Creature1(23,45,'Europa');
const newCreature1_2 = new Creature1(13,25,'Afrika', true);

console.log(newCreature1_1.age);

// const newCreature1 = new Creature(1);

// Modifier
class Creature3{
    birthdate: number;
    private isCloned: boolean;
    constructor(public age: number, public height: number, public areal: string, isCloned: boolean,public existingNow?:boolean)
    {
        this.birthdate = new Date().getFullYear() - age;
        this.isCloned = isCloned;
    }

    //Methode
    giveAHintAboutCloned() {
        if(this.isCloned)
            return 'some University studied this'
    }

    static idOfCreatureDefinition: number = 3;
    static readonly idOfCreatureDefinitionNotChangeable: number = 3;
    
}

const newCreature3_1 = new Creature3(13, 25, 'Australie',true,false);

console.log(Creature3.idOfCreatureDefinition);


