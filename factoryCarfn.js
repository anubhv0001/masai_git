/*Create a factory function createCar that returns an object representing a car. 
Each car should have make, model, and year as properties. Add a method describeCar() to 
the object that outputs a description of the car's make, model, and year.

Steps:

Define the factory function createCar.
The function should accept make, model, and year as parameters.
Return an object with the properties make, model, and year.
The describeCar() method should print "This car is a [year] [make] [model]."*/

function createCar(make,model,year){
    return {
      make:make,
      model:model,
      year:year,
      describeCar:function(){
        console.log(`This is ${this.make} model ${this.model} of year ${this.year}`)
      }
    }
  }
  const car1=createCar("Mahindra","Scorpio","2022");
  car1.describeCar();
  