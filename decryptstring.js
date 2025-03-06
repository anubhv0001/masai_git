function encryptIt(S,K) {
    // write code here
    let res="";
    for (let i=0;i<S.length;i++)
    {
      let char=S.charCodeAt(i);
      if (char>=48&&char<=57){
        res+=String.fromCharCode((char-48+K)%10+48);
      }
      else if (char>=65&&char<=90){
        res+=String.fromCharCode((char-65+K)%26+65);
      }
      else if (char>=97&&char<=122){
        res+=String.fromCharCode((char-97+K)%26+97);
      }
      else{
      res+=S[i]
      }
    }
    console.log(res);
    
}