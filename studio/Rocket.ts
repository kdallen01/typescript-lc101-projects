import {Payload} from './Payload';
import {Astronaut} from './Astronaut';
import {Cargo} from './Cargo';

export class Rocket implements Payload {
    name: string;
    massKg: number;
    totalCapacityKg: number;
    constructor (name: string, totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];


    sumMass(items: Payload[]): number {
        let sumMassKg: number = 0;
        for(let i = 0; i < items.length; i++) {
            sumMassKg += items[i].massKg;
        }
        return sumMassKg;
    }

    currentMassKg(): number {
        let currentMassKg: number;
        currentMassKg = this.sumMass(this.astronauts) + this.sumMass(this.cargoItems)
        return currentMassKg;
        
    }

    canAdd(item: Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        } else {
            return false;
        }
    }

    addCargo(cargo: Cargo): boolean {
        if(this.canAdd(cargo) === true) {
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if(this.canAdd(astronaut) === true) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }


}