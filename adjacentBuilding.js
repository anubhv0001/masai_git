

function newYorkSkylines(n, arr) {
    // write your code here
    let res=[];
    for (let i=0;i<n;i++){
      //first
      if (i==0){
        if(arr[i]>arr[i+1]){
          res.push(1);
        }
        else{
          res.push(0);
        }
      }
      else if(i==n-1){
        if (arr[i]>arr[i-1]){
          res.push(1);
        }
        else{
          res.push(0);
        }
      }
      else{
        if (arr[i]>arr[i+1]&&arr[i]>arr[i-1]){
          res.push(2);
        }
        else if(arr[i]>arr[i+1]||arr[i]>arr[i-1]){
          res.push(1)
        }
        else{
          res.push(0);
        }
      }
    }
    console.log(res.join(" "));
}