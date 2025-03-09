const tasks={};

tasks.task1=[
  {completeQuiz:"pending"},
   ];
   
  tasks.task2=[
  {completeTheory:"pending"},
   ]
   
   tasks.task3=[
  {completeDsa:"pending"},
   ]
      
   tasks.task4=[
  {completeSubmission:"pending"},
   ]
   
let mapEle=tasks.map((ele)=>{
  ele.status="completed";
  })
  
  function processEle(tasks){
    let mapEle=tasks.map(ele)=>{
      ele=`${complete}`;
    }
    let filterTasks=tasks.filter((ele)=>{
      ele:"completed";
    })
    let listTask=tasks.forEach((ele)=>{
      return ele;
    })
  }