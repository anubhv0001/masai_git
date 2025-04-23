/*Write a function called multiplyNumbers that accepts two numbers as arguments and uses the apply() method to
multiply them. The function should return the product.*/

function multiplyNumbers(a,b){
    const multiplier={
      product:function(x,y){
       return x*y;
      }
    }
    return multiplier.product.apply(a,b);
    }
    console.log(multiplyNumbers(null,[3,4]));