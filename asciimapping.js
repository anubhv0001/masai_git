
let str="abc";
let sum=0;
for (let i=0;i<str.length;i++){
   sum+=str[i].charCodeAt()-96;
}
console.log(sum);