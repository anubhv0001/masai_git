/*Create a factory function createCar that returns an object representing a car. Each car should have make, model, 
and year as properties. Add a method describeCar() to the object that outputs a description of the car's make, model,
and year.

Steps:

Define the factory function createCar.
The function should accept make, model, and year as parameters.
Return an object with the properties make, model, and year.
The describeCar() method should print "This car is a [year] [make] [model]."*/


function createcar(make,model,year){
    return {
     make,
     model,
     year,
     describeCar:function(){
       console.log(`This car is a ${this.make} ${this.model} ${this.model}.`)
     }
    }
  }
  let myCar=createcar("toyota","camry",2022);
  myCar.describeCar();