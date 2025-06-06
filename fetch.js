/*Create a webpage that fetches a list of users from the JSONPlaceholder API (https://jsonplaceholder.typicode.com/users) and displays their names in console.

Key Requirements:
Fetch the user data
Display the names in console.*/

fetch('https://jsonplaceholder.typicode.com/users')
.then(response=>response.json())
.then(users=>{
  users.forEach(user=>{
    console.log(user.name)
  })
})
.catch(error=>{
  console.log("Error fetching users:",error)
})