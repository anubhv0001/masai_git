function findMatching(n,m,str,pat){
    // write code here
    for(let i=0;i<n-m;i++){
      let match=true;
      for (let j=0;j<m;j++){
        if (str[i+j]!=pat[j]){
          match=false;
          break;
        }
      }
      if (match){
        console.log("Yes");
        return;
      }
    }
    console.log("No");
    
}