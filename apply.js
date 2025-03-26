/*Write a function called multiplyNumbers that accepts two numbers as arguments and uses 
the apply() method to multiply them. The function should return the product.*/


function product(a,b){
    function multiply(a,b){
      console.log(a*b);
      
    }
    return multiply.apply(null,[a,b]);
  }
  
  let result=product(3,4);
  console.log(result);