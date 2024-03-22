

interface ITransportMittle {
    transportMittles: ITransportMittle[];

    AddTransportMittle(transportMittle:ITransportMittle): void
    BeschreibMich(): void;
}

class Schiff implements ITransportMittle{
    transportMittles: ITransportMittle[];
    description: string;
    AddTransportMittle(transportMittle: ITransportMittle): void {
        this.transportMittles.push(transportMittle);
    }
    BeschreibMich(): void {
        for (let i = 0; i < this.transportMittles.length; i++) {
            this.description += this.transportMittles[i] + "<br>";
          }
    }

}

class Flugzeug implements ITransportMittle{
    transportMittles: ITransportMittle[];
    description: string;
    AddTransportMittle(transportMittle: ITransportMittle): void {
        this.transportMittles.push(transportMittle);
    }
    BeschreibMich(): void {
        for (let i = 0; i < this.transportMittles.length; i++) {
            this.description += this.transportMittles[i] + "<br>";
          }
    }

}

class Auto implements ITransportMittle{
    transportMittles: ITransportMittle[];
    description: string;
    AddTransportMittle(transportMittle: ITransportMittle) {
        this.transportMittles.push(transportMittle);
    }
    BeschreibMich(): void {
        for (let i = 0; i < this.transportMittles.length; i++) {
            this.description += this.transportMittles[i] + "<br>";
          }
    }
}

let auto1 = new Auto();

let Schiff1 = new Schiff();

let flugzeug1 = new Flugzeug();

Schiff1.AddTransportMittle(auto1);
Schiff1.AddTransportMittle(flugzeug1);
flugzeug1.AddTransportMittle(auto1);

console.log(Schiff1.BeschreibMich());
console.log(flugzeug1.BeschreibMich());
console.log(auto1.BeschreibMich());

