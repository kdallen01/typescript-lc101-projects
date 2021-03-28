"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        for (var i = 0; i < items.length; i++) {
            var sumMassKg = void 0;
            sumMassKg = items[i].massKg + sumMassKg;
            console.log(sumMassKg);
            return sumMassKg;
        }
    };
    Rocket.prototype.currentMassKg = function () {
        //let currentMass: number;
        //currentMass = this.sumMass;
        return sumMassKg;
        //return currentMass;
    };
    Rocket.prototype.canAdd = function (item) {
        if (this.currentMassKg + item.massKg <= this.totalCapacityKg) {
            return true;
        }
        else
            return false;
    };
    Rocket.prototype.addCargo = function (cargo) {
        if (this.canAdd(cargo) === true) {
            this.cargoItems.push(cargo.material);
            return true;
        }
        else
            return false;
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        if (this.canAdd(astronaut) === true) {
            this.astronauts.push(astronaut.name);
            return true;
        }
        else
            return false;
    };
    return Rocket;
}());
exports.Rocket = Rocket;
