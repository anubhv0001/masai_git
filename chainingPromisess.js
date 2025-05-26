

function taskA(){
  return new Promise((resolve)=>{
    setTimeout(function() {
      resolve("Task A completed")
    }, 1000);
  })
}
function taskB(){
  return new Promise((resolve)=>{
    setTimeout(function() {
      resolve("Task B completed")
    }, 1000);
  })
}
function taskC(){
  return new Promise((resolve)=>{
    setTimeout(function() {
      resolve("Task C completed")
    }, 1000);
  })
}
taskA()
.then((resultA)=>{
  console.log(resultA)
  return taskB(resultA);
})
.then((resultB)=>{
  console.log(resultB)
  return taskC(resultB);
})
.then((resultC)=>{
  console.log(resultC)
})
.catch((error)=>{
  console.log(error);
})