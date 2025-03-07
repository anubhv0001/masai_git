/*You are tasked with building an Employee Performance Evaluation System. You have an array of employee objects, where each employee
has the following properties: name, tasksCompleted, and rating. Your task is to perform the following steps using higher-order *
functions:*

Filter the employees who have completed more than 5 tasks.
Map the filtered employees to a new array that contains only the employee's name and their performance level. The performance level
is determined by the following criteria:
If rating is above 4.5, their performance level is "Excellent".
If rating is between 3 and 4.5 (inclusive), their performance level is "Good".
Otherwise, their performance level is "Needs Improvement".
Sort the final array of employees in descending order based on their performance level, prioritizing "Excellent", then "Good", and 
finally "Needs Improvement".
Return the final sorted array containing the employee names and their performance levels.*/

const employee= [


    { name: "Alice", tasksCompleted: 8, rating: 4.7 },
    
    { name: "Bob", tasksCompleted: 4, rating: 4.0 },
    
    { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
    
    { name: "David", tasksCompleted: 10, rating: 4.9 },
    
    { name: "Eve", tasksCompleted: 7, rating: 2.8 }
    
    ]
    function Evaluate(){
      let filterEmp=employee.filter((ele=>ele.tasksCompleted>5));
      let mappedEmployee=filterEmp.map((element)=>{
        let performanceLevel="";
        if (element.rating>4.5){
          performanceLevel="Excellent";
        }
        else if (element.rating>3&&element.rating<4.5){
          performanceLevel="Good";
        }
        else{
          performanceLevel="Needs Improvement"
        }
        return {name:element.name,PerformanceLevel:performanceLevel}
      });
       const performanceOrder = {
        "Excellent": 3,
        "Good": 2,
        "Needs Improvement": 1
      };
    
    
    const sortedEmployees=mappedEmployee.sort((a,b)=>{
      return performanceOrder[b.performanceLevel]- performanceOrder[a.performanceLevel]
    })
}
    return sortedEmployees;