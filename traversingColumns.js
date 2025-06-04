function evenSumColumns(N,M,arr){
    //write code here
    for (let i=0;i<M;i++){
      let sum=0;
      for (let j=0;j<N;j++){
        const val=arr[j][i];  //iterated over columns keeping 
        //same row aand summing up values and then moving to next column
        //when move two next column row keep on changing
        if (val%2==0){
          sum+=val
        }
      }
      console.log(sum);
    }
}