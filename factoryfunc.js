/*Write a factory function called createEmployee that generates an object representing an employee. Each employee
object should have the properties name, role, and salary, along with a method introduce() that prints a message
introducing the employee's name and role.

Steps:

Create the factory function createEmployee.
The function should accept name, role, and salary as parameters.
Return an object with properties name, role, salary, and a method introduce().
The introduce() method should print a string: "Hello, I am [name], working as a [role]."*/

function createEmployee(name,role,salary){
    return{
      name,
      role,
      salary,
      introduce(){
        console.log(`Hello,I am ${this.name},working as ${this.role}.`)
      }
    }
  }
  const employee1 = createEmployee("Alice", "Developer", 60000);
  employee1.introduce();
  
  