function masaiPalSubString(S){
    //write code here
    let max=-Infinity;
    for (let i=0;i<S.length;i++){
      let substr="";
    for (let j=i;j<S.length;j++){
      substr+=S[j];
      if (isPalindrome(substr)){
        if (substr.length>max){
          max=substr.length
        }
      
      }
    }
    }
    console.log(max);
}
function isPalindrome(str){
      let palin="";
      for (let k=str.length-1;k>=0;k--){
        palin+=str[k];
      }
    if (palin==str){
      return true;
    }
    else {
      return false;
    }
    }
