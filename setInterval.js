console.log("Try programiz.pro");
let count = 1;

const intervalId = setInterval(() => {
  console.log("Loading...");
  count++;
  if (count > 5) {  // Stop after 5 "Loading" messages
    clearInterval(intervalId);
    console.log("Loaded successfully");
  }
}, 1000);
