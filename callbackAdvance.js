/*Create a program that simulates API calls using nested callbacks:

fetchUserData(callback):
Logs "Fetching user data..."
After 1s, calls callback with "User data received"
Inside callback, fetchUserPosts(callback):
Logs "Fetching user posts..."
After 1.5s, calls callback with "User posts received"
Finally log "All data loaded successfully!"*/

function fetchUserData(callback){
  console.log("Fetching user");
  setTimeout(function() {
    const userData="User data recieved";
    console.log(userData);
    callback();
  }, 1000);
}

function fetchUserPosts(callback){
  console.log("Fetching user posts...");
  
  setTimeout(function() {
    const userData="User posts recieved";
    console.log(userData);
    callback();
  }, 1500);
}

fetchUserData(function(){
  fetchUserPosts(function(){
    console.log("All data successfully")
  });
});