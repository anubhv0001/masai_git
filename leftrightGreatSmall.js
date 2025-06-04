function elementInMiddle(N,arr){
// Write your code here!
let ans=-1;


for (let i=1;i<N-1;i++){
  let left=0;
   let right=0;
  for (let j=i-1;j>=0;j--){
    if (arr[j]>arr[i]){
      left=1;
      break;
    }
  }
  for (let j=i+1;j<N;j++){
    if (arr[j]<arr[i]){
      left=1;
      break;
    }
  }
  if (left==0&&right==0){
    ans=arr[i];
    break;
  }
}
console.log(ans);
}