/*You are developing a basic person management system. Implement this system using constructor functions and prototypical inheritance.

Create a constructor function Person with properties:

name (string): name of the person
age (number): age of the person
Add a method introduce to Person.prototype that logs:

"Hi, my name is [name] and I am [age] years old."
Create a constructor function Employee that inherits from Person and adds:

jobTitle (string): job title of the employee
Add a method work to Employee.prototype that logs:

"[name] is working as a [jobTitle]."
Demonstration
Create an instance of Person.
Create an instance of Employee.
Call introduce on both instances.
Call work on the Employee instance.*/

function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.introduce = function () {
    console.log(`Hi my name is ${this.name} and I am ${this.age} years old`);
  };
  
  function Employee(name, age, jobTitle) {
    Person.call(this, name, age);
    this.jobTitle = jobTitle;
  }
  
  Employee.prototype = Object.create(Person.prototype);
  Employee.prototype.constructor = Employee;
  
  Employee.prototype.work = function () {
    console.log(`${this.name} is working as a ${this.jobTitle}.`);
  };
  
  const person1 = new Person("Anubhav", 25);
  const employee1 = new Employee("Aman", 25, "Software Developer");
  
  person1.introduce();
  employee1.introduce();
  employee1.work();