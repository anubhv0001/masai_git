function cipherString(n, str) {
    // write your code here
    let count=1;
    let result="";
    for (let i=0;i<n;i++){
     if (str[i]==str[i+1]){
       count++;
     }
     else{
      result+=str[i]+count;
      count=1;
     }
    }
  
    console.log(result);
}
// aabbbc=>a2b3c1