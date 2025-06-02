function transposeTheMatrix(N, M, matrix){
    //write code here
    for (let j=0;j<M;j++){
      let row="";
      for (let i=0;i<N;i++){
        row+=matrix[i][j]+' ';
      }
      console.log(row.trim());
    }
  
}
