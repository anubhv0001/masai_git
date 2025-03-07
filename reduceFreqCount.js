/*You are given an array of strings representing product categories. Your task is to use reduce() to create an object that counts 
the occurrences of each category in the array.*

Steps:

Use reduce() to group the categories and count how many times each category appears.
Return the resulting object.
Example:

Input: ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"]

Output: { electronics: 2, clothing: 2, toys: 3 }

Extra Challenge: After creating the object, use Object.entries() and sort() to sort the categories by their counts in descending 
order and return an array of sorted categories.
*/
const categories=["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"]

const categoryCount=categories.reduce((acc,currStr)=>{
  if (acc[currStr]){
    acc[currStr]++;
  }
  else{
    acc[currStr]=1;
  }
  return acc;
},{});

console.log(categoryCount);

/*currentString = "electronics"
accumulator = {} (empty object initially)
acc: The accumulator, which is an object where we are tracking the count of occurrences of each string.

currStr: The current string in the array, which is being processed in the current iteration of the reduce() function.

acc[currStr]: This refers to accessing the value associated with the key currStr in the accumulator object acc.
In other words, it's accessing the count of the current string.*/