/*Write JavaScript code to achieve the following tasks:

Define a constructor function Animal with a property type set to "Animal".
Add a method sound to Animal.prototype that logs "Animal sound".
Define a constructor function Dog that inherits from Animal.
Ensure that Dog.prototype inherits from Animal.prototype.
Override the sound method in Dog.prototype to log "Bark" instead of "Animal sound".
Create an instance of Dog called myDog.
Call the sound method on myDog.*/

function Animal(type){
  this.type=type;
}
Animal.prototype.sound=function(){
  console.log('Animal sound')
}
function Dog(){
  Animal.call(this);
  this.type='Dog';
}
Dog.prototype=Object.create(Animal.prototype);
Dog.prototype.constructor=Dog;

Dog.prototype.sound=function(){
  console.log('Bark')
}
const myDog=new Dog();
myDog.sound();