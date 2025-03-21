function fetchData(){
    return new Promise((resolve,reject)=>{
      const isSuccess=true;
      if(isSuccess){
        resolve("Data fetched successfully")
      }
      else{
        reject("Error fetching Data")
      }
    }, 1000);
  }
  
  // Async function to handle the fetching and error handling
  async function FetchHander(){
    try{
      const result=await fetchData();
      console.log("Fetched data successfully");
    }
    catch{
       console.log("Error fetching data:", error);
    }
  }
  FetchHander();