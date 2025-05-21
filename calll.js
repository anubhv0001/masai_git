/*Create a function personInfo that logs the name and age of a person. Using the call() method, call the function 
with a specific this context (an object with properties name and age).*/

function personInfo(){
 
  console.log(this.name+this.age);
}
let person={
  name:"anshika",
  age:21
}
personInfo.call(person)