function zTraversal(N,arr){
    //write code here
    let bag="";
    for (let i=0;i<N;i++){
      bag+=(arr[0][i])+" "
    }
    for (let i=1;i<N-1;i++){
      bag+=(arr[i][N-i-1])+" "
    }
    if (N>1){
    for (let i=0;i<N;i++){
      bag+=(arr[N-1][i])+' '
    }
    }
  console.log(bag);
}