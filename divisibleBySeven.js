/*You're given an array A of size N. You must remove only one element, such that the sum of the 
remainingelements is divisible by 7.Among all valid removals, return the index of the smallest such element.
  If no such removal is possible, print -1. */



function applyBasicMaths(N,A){
    //write code here
let totalSum=A.reduce((a,b)=>a+b,0);
let minIndex=-1;
let minVal=Infinity;

for (let i=0;i<N;i++){
  let remainingSum=totalSum-A[i];
  if (remainingSum%7==0){
    if (A[i]<minVal){
      minVal=A[i];
      minIndex=i;
    }
  }
}
console.log(minIndex);
}