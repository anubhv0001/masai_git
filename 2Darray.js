let arr=[
    [1,2],
    [4,5],
    [7,8]
    ]
    let M=arr.length;
    let N=arr[0].length;
    
    for (let i=0;i<M;i++){
      let bag="";
      for (let j=0;j<N;j++){
      bag+=arr[i][j]+" ";
      }
      console.log(bag);
    }
    