/*create a function checkEvenNumber that takes a number and returns a Promise:

If the number is even, resolve with: "<number> is even"
If odd or not a number, reject with: "<number> is odd or invalid"*/

function checkEvenNumber(num){
  return new Promise((resolve,reject)=>{
    if (num%2==0){
      resolve(`${num} :is even`)
    }
    else{
      reject(`${num} :is odd`)
    }
  })
  
}
checkEvenNumber(18)
.then((message)=>{
  console.log(message);
})

.catch((error)=>{
  console.log(error);
})
