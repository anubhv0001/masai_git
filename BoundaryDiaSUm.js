function sumOfBoundaryAndDiagonal(matrix){
    //write code here
     const N = matrix.length;
    const M = matrix[0].length;
    let sum=0;
    let visited=new Set();
    
    for (let i=0;i<N;i++){
      for (let j=0;j<M;j++){
        const isBoundary=(i==0||i==N-1||j==0||j==M-1)
        const isprimaryDia=(i==j);
        const isSecondaryDia=i+j==M-1;
        if (isBoundary||isprimaryDia||isSecondaryDia){
          const key=`${i},${j}`
          if (!visited.has(key)){
            sum+=matrix[i][j];
            visited.add(key)
          }
        }
        
      }
    }
console.log(sum);
}