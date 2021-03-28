import {Payload} from './Payload';
import {Astronaut} from './Astronaut';
import {Cargo} from './Cargo';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    constructor (name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    cargoItems: string[] = [];
    astronauts: string[] = [];


    sumMass(items: Payload[]): number {
        for(let i = 0; i < items.length; i++) {
            let sumMassKg: number;
            sumMassKg = items[i].massKg + sumMassKg;
            console.log(sumMassKg);
            return sumMassKg;
        }
    }

    currentMassKg(): number {
        //let currentMass: number;
        //currentMass = this.sumMass;
        return sumMassKg;
        //return currentMass;
    }

    canAdd(item: Payload): boolean {
        if (this.currentMassKg + item.massKg <= this.totalCapacityKg) {
            return true;
        } else return false;
    }

    addCargo(cargo: Cargo): boolean {
        if(this.canAdd(cargo) === true) {
            this.cargoItems.push(cargo.material);
            return true;
        } else return false;
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if(this.canAdd(astronaut) === true) {
            this.astronauts.push(astronaut.name);
            return true;
        } else return false;
    }


}