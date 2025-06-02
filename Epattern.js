function endOfUnit(N){
    //write code here
    for (let i=0;i<N;i++){
      if (i==0||i==N-1){
      let line="";
      for (let j=0;j<N;j++){
        line+='* '
      }
      console.log(line);
      }
      else if (i==Math.floor(N/2)){
        let line='';
        for (let j=0;j<N;j++){
          line+='*'
        }
        console.log(line);
      }
      else {
        console.log('*')
      }
    }
    
}