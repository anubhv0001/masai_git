function strongPassword(N,arr){
    //write code here
    let testcase=['@','#','*','$'];
    let bag="";
    for (let i=0;i<N;i++){
      if (testcase.some(char=>arr[i].includes(char))){
        bag+='strong '
      }
      else {
        bag+='weak ';
      }
    }
    console.log(bag);

}