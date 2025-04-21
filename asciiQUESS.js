function password(str){
    //write code here
    let hasLowerCase=false;
    let hasUpperCase=false;
    let hasDigits=false;
    let specialChar=false;
    const normalChars="!@#$%^^&*()_/\[]";
    for (let i=0;i<str.length;i++){
      if (str[i]>="a"&&str[i]<="z"){
        hasLowerCase=true;
      }
      else if (str[i]>="A"&&str[i]<="Z"){
        hasUpperCase=true;
      }
      else if (str[i]>="0"&&str[i]<="9"){
        hasDigits=true;
      }
      else if(normalChars.includes(str[i])){
        specialChar=true;
      }
    }
    if (hasLowerCase&&hasUpperCase&&hasDigits&&specialChar){
      console.log("YES");
    }
    else{
      console.log("NO");
    }
   
 }