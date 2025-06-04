function goInZigZag(N, M, matrix){
    //write code here
    let bag="";
  for (let i=0;i<N;i++){
    if (i%2==0){
      for (let j=M-1;j>=0;j--){
        bag+=matrix[i][j]+" ";
      }
    }
    else{
      for (let j=0;j<M;j++){
        bag+=matrix[i][j]+" ";
      }
    }
    
  }
  console.log(bag);
}
//if even row then reverse else straight zigzag
