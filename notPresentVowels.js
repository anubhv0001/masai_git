function runProgram(input) {
  // Take input,then write logic
  input=input.split('\n')
  var size=+input[0];
  var arr=input[1]
  
  let vowels=['a','e','i','o','u'];
  let missing=[];
  
  for (let vowel of vowels){
    if (!arr.includes(vowel)){
      missing.push(vowel)
    }
  }
  if (missing.length==0){
    console.log('-1');
  }
  else{
    console.log(missing.join(''))
  }
  
}