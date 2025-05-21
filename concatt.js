/*L1 - Implementing Multiple Custom Methods for Array Operations

Problem Statement:
Create a program that defines the following custom methods:

filterEvenNumbers(arr): This method takes an array of numbers and returns a new array with only the even numbers
using filter.
sumOfArray(arr): This method calculates and returns the sum of all elements in an array using reduce.
sortAndConcat(arr1, arr2): This method takes two arrays of numbers, sorts each array in ascending order using
sort, and then concatenates them into one array using concat. Return the sorted and concatenated array.
Your program should:

Take two input arrays of numbers.
Use the custom methods to filter, sum, sort, and concatenate the arrays.
Output the results of each operation.
Submission Guidelines:
Please submit your Masai Git directory link.*/

const str=[2,4,5,6,7,8,9];
const str2=[11,12,13,14,15,16];
let evenNums=str.filter((ele)=>ele%2==0);
console.log(evenNums);
let reduced=str.reduce((acc,curr)=>{
  return acc+=curr;
},0);
console.log(reduced);
let sort=str.sort((a,b)=>a-b);
let sort2=str2.sort((a,b)=>a-b);
console.log(str.concat(str2));

