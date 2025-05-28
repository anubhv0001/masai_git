


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
  if (!response.ok){
    throw new Error('Network response was not okay');
    
  }
  return response.json();
})


.then(users=>{users.forEach(user=>{
  console.log(user.name);
})
})

.catch(error=>{
  console.log('Fetch error',error);
});