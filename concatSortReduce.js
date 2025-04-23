/*Create a program that defines the following custom methods:

filterEvenNumbers(arr): This method takes an array of numbers and returns a new array with only the even numbers using
filter.
sumOfArray(arr): This method calculates and returns the sum of all elements in an array using reduce.
sortAndConcat(arr1, arr2): This method takes two arrays of numbers, sorts each array in ascending order using sort, and 
then concatenates them into one array using concat. Return the sorted and concatenated array.*/

function filterEvenNumbers(arr1){
    return arr1.filter(ele=>ele%2==0);
  }
  function sumOfArray(arr1){
    return arr1.reduce((acc,curr)=>
      acc+curr,0)
  }
  
  function sortAndConcat(arr1,arr2){
    let sorted1=[...arr1].sort((a,b)=>a-b);
      let sorted2=[...arr2].sort((a,b)=>a-b);
      let concatenated=sorted1.concat(sorted2);
      return concatenated;
  }
  
  let arr1=[2,3,4,5,6,7,8];
  let arr2=[9,10,11,12,13,14];
  
  console.log("Even numbers:", filterEvenNumbers(arr1));           
  console.log("Sum of arr1:", sumOfArray(arr1));                   
  console.log("Sorted & concatenated:", sortAndConcat(arr1, arr2)); 