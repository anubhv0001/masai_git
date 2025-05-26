
Call fetchDataHandler to demonstrate the workflow.
Observe both success and failure cases when running the program multiple times.*/
function fetchData(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      const success=Math.random();
      if (success){
        resolve("Data fetched")
      }
      else {
        reject("Server down")
      }
      
    },1000)
  })
}


async function fetchDataHandler(){
  try{
    const result=await fetchData();
   console.log("Fetch data successfully");
   console.log("result:",result);
  }
  catch(error){
    console.log("Error:",error)
  }
}
fetchDataHandler();