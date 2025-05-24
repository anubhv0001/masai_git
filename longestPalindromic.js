function masaiPalSubString(S){
    //write code here
    let maxlength=0;
     function isPalindrome(str) {
        let left = 0;
        let right = str.length - 1;

        while (left < right) {
            if (str[left] !== str[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
    
    for (let i=0;i<S.length;i++){
      let substr="";
      for (let j=i;j<S.length;j++){
        substr+=S[j];
        if(isPalindrome(substr)&&substr.length>maxlength){
          maxlength=substr.length
        }
      }
    }
    
    console.log(maxlength);
}

//longestPalindromicSubstring length