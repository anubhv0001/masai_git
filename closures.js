/*Create a closure that simulates a simple counter. Implement a function createCounter that has a private count 
variable. The function should return two methods: increment to increase the count by 1 and getCount to return the 
current value of the counter. Ensure that count cannot be accessed directly from outside the closure.*/

const counter = createCounter();



function createCounter() {
  let count = 0; // private variable

  return {
    increment: function() {
      count++;
      return count;
    },
    getCount: function() {
      return count;
    }
  };
}
console.log(counter.increment()); 

console.log(counter.increment()); 

console.log(counter.getCount()); 

