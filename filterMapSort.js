/*You are given an array of student objects. Each student object contains a name and marks. Write a function processStudents 
that performs the following steps:
Filter the students to create a new array of students who scored above 60 marks.
Sort the filtered array in descending order of marks.
Map the sorted array to extract only the names of the students.
Return the array of sorted names.*/


studentsData=[
    {name:"Anubhav",marks:60},
    {name:"Charu",marks:50},
    {name:"Anshika",marks:70}
    ]
    
    function processStudents(){
      let filteredStudents=studentsData.filter(student=>student.marks>60);
      
      let sortedStudents=filteredStudents.sort((a,b)=>b.marks-a.marks);
      
      let mapStudents=sortedStudents.map(student=>student.name)
     
     return sortedStudents;
      
    }
    
   console.log(processStudents(studentsData));