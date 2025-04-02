function fetchUser(){
    fetch("https://jsonplaceholder.typicode.com/users")
    
      .then(response=>response.json())
      .then(users=>{
        users.forEach(user=>console.log(user.name));
      })
      .catch(err=>console.log(err));
    }
    fetchUser();