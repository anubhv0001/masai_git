function newYorkSkylines(n, arr) {
    // write your code here
    let score="";
    for (let i=0;i<n;i++){
      if (i==0){
        if (arr[i]>arr[i+1]){
          score+="1"+" ";
        }
        else if (arr[i]<arr[i+1]){
          score+="0"+" ";
        }
        else{
          score+="0"+" ";
        }
      }
      else if (i==n-1){
        if (arr[i]>arr[i-1]){
          score+="1"+" ";
        }
        else if (arr[i]<arr[i-1]){
          score+="0"+" ";
        }
        else{
          score+="0"+" ";
        }
      }
      else{
        if (arr[i]>arr[i+1]&&arr[i]>arr[i-1]){
          score+="2"+" ";
        }
        else if (arr[i]>arr[i+1]||arr[i]>arr[i-1]){
          score+="1"+" ";
        }
        else {
          score+="0"+" ";
        }
      }
    }
    console.log(score);
}




