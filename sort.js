/*Create a program that defines the following custom methods:

filterEvenNumbers(arr): This method takes an array of numbers and returns a new array with only the even numbers using filter.
sumOfArray(arr): This method calculates and returns the sum of all elements in an array using reduce.
sortAndConcat(arr1, arr2): This method takes two arrays of numbers, sorts each array in ascending order using sort, and then concatenates them into one array using concat. Return the sorted and concatenated array.
Your program should:

Take two input arrays of numbers.
Use the custom methods to filter, sum, sort, and concatenate the arrays.
Output the results of each operation.*/

function filteredNum(arr){
    return arr.filter(ele=>ele%2===0)
  }
  
  function reduced(arr){
    return arr.reduce((curr,acc)=>curr+acc,0);
  }
  
  function sortAndConcat(arr1,arr2){
    const sorted1=arr1.sort((a,b)=>a-b);
     const sorted2=arr2.sort((a,b)=>a-b);
     return sorted1.concat(sorted2);
  }
  arr=[3,1,2,4,7,8,9,2,6,4]
  arr1=[3,4,2,7,1,9,1];
  arr2=[8,7,4,9,8,2,7,5,9];
  
  console.log(filteredNum(arr));
  console.log(reduced(arr));
  console.log(sortAndConcat(arr1,arr2));
  