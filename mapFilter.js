/*L1: Using .map() and .filter() Together
Description:
Write a function getEvenSquares() that:

Filters out the odd numbers from the given array.
Squares the remaining even numbers.
Requirements:
Use .filter() to keep only the even numbers.
Use .map() to square each even number.
Example:
const numbers = [1, 2, 3, 4, 5, 6];
const result = getEvenSquares(numbers);
console.log(result); // [4, 16, 36]*/


function getEvenSquares(numbers){
  let output=numbers.filter((ele)=>ele%2==0).map((ele)=>ele**2)
  return output;
}
const numbers = [1, 2, 3, 4, 5, 6];
console.log(getEvenSquares(numbers));