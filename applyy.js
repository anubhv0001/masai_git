/*Write a function called multiplyNumbers that accepts two numbers as arguments and uses the apply() method to
multiply them. The function should return the product.

Submission Guidelines:
Please submit your masai git directory link*/

function multiplyNumbers(a,b){
  function multiply(x,y){
    return x*y;
  }
  return multiply.apply(null,[a,b])
}
console.log(multiplyNumbers(5,4));

