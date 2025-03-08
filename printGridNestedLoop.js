let n=3;
let count=1;
for (let i=0;i<n;i++){
  let bag="";
  for (let j=0;j<n;j++){
    bag+=count+" ";
    count++;
  }
  console.log(bag);
}