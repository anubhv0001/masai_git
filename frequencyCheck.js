/*L2: Using .reduce() to Create a Frequency Count from a String with Additional String Methods
Description:
Write a function getCharacterFrequency() that takes a string as input, trims any leading/trailing spaces, 
converts it to lowercase, and returns an object that contains the frequency count of each character, excluding spaces.

Requirements:
Use .trim() to remove any extra spaces from the beginning and end of the string.
Use .toLowerCase() to make all characters lowercase.
Use .reduce() to accumulate the frequency of each character in the string, excluding spaces.*/
function getCharacterFrequency(str){
  return str
    .trim()
    .toLowerCase()
     .split("")
     .reduce((acc,curr)=>{
    if (curr!==' '){
      acc[curr]=(acc[curr]||0)+1
    }
    return acc;
  },{})
  
}

const str = " Hello World! ";
console.log(getCharacterFrequency(str));