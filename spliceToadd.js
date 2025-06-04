/*Add a new student name at a specific position using splice.
Check if a student's name exists in the array using includes.
Convert the array of student names into a single string where names are separated by commas using join.
The existing code is as follows:*/


function manageStudents() {
    let students = ["Alice", "Bob", "Charlie"];

    
    students.splice(1, 0, "David");

    
    console.log(students.includes("Eve"));  

    
    console.log(students.join(","));  
}

manageStudents();
