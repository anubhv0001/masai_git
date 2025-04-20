/*Given a lowercase alphabetic string S, where each character has a value corresponding to its position in the English 
alphabet (i.e., 'a' = 1, 'b' = 2, ..., 'z' = 26),write a function to calculate and print the total sum of the values of all 
characters in the string. */
function stringValue(S) {
    //write code here
  let count=0;
  let sum=0;
  for (let i=0;i<S.length;i++){
    val=S.charCodeAt(i);
      sum+=val-96
  }
  console.log(sum);
  }
  