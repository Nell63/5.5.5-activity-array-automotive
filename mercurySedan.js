//this includes the vehicle class as a module
const VehicleModule = require('./vehicle').Vehicle;

//this shows how to call from this module...
let Dodge = new VehicleModule.Vehicle("Dodge", "Challenger", "1965", "Black", "mileage");
console.log(v.make)


//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...

class Car extends VehicleModule.Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.wheels = 4;
        this.fuel = 10;
        this.maxSpeed = 210;
        this.serviceAppointment = true;
        this.mileage = 30000;
    }


    checkService() {
        if (this.mileage > 30000) {
            this.serviceAppointment = true

            return this.serviceAppointment;
        }
    }


    start() {
        if (this.fuel > 0) {
            console.log("engine has started.");
            return this.started = true
        } else {
            console.log("no fuel");
            return this.started = false;
        }

    }

    uploadPassenger(num) {

        if (this.passenger < this.maxPassengers) {
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;
            } else {
                console.log(this.model + " " + this.make + " not have enough space to take all passengers.");
            }
        } else {
            console.log(this.model + " " + this.make + "is full");
        }

    }

    
}






//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
let challenger = new Car('Dodge', 'Challenger', '1965', 'Black', 3000);

challenger.uploadPassenger()
challenger.start()
challenger.checkService()
challenger.stop()

console.log(challenger)

