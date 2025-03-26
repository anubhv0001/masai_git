/*Create a function personInfo that logs the name and age of a person. Using the call() method, call
the function with a specific this context (an object with properties name and age).*/

function personInfo(){
    const info={
      name:"anshika",
      age:21
    }
        function print(){
        console.log(this.name);
        console.log(this.age);
      }
      print.call(info);
    }
    
    personInfo();
    