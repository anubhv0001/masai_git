function maximumOccurences(n,str){
  // Write code here
  let freq={};
  for (let char of str){
    if (freq[char]){
      freq[char]++;
    }
    else{
      freq[char]=1
    }
  }
    let maxChar = '';
  let maxCount = 0;
    for (let char in freq) {
    if (freq[char] > maxCount) {
      maxChar = char;
      maxCount = freq[char];
    }
  }
  console.log(maxChar);
}