/*Create a closure that simulates a simple counter. Implement a function createCounter that has a private count variable. The function
should return two methods: increment to increase the count by 1 and getCount to return the current value of the counter. Ensure that
*count cannot be accessed directly from outside the closure.*/



function createCounter(){
    var count=0;
    return function increment(){
      count++;
      return function getCount(){
        console.log(count);
      }
    }
  }
  let counter=createCounter();
  let getCounts=counter();
  getCounts();