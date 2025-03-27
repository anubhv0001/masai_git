function subString(N,S){
    //write code here
    function isVowel(char){
      return ['a','e','i','o','u'].includes(char.toLowerCase());
    }
    let count=0;
    
    for (let i=0;i<N;i++){
      let substr="";
      for (let j=i;j<N;j++){
        substr+=S[j];
        for (let k=0;k<substr.length-1;k++){
          if (isVowel(substr[k])&&isVowel(substr[k+1])){
            count++;
            break;
          }
        }
      }
    }
    console.log(count);
}