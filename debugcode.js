/*You are given a program that manipulates an array of student names. However, there are several bugs in the code that need to be fixed. Your task is to debug the program and make sure it works correctly. The program should perform the following:

Add a new student name at a specific position using splice.
Check if a student's name exists in the array using includes.
Convert the array of student names into a single string where names are separated by commas using join.
Add a new student name at a specific position using splice.
Check if a student's name exists in the array using includes.
Convert the array of student names into a single string where names are separated by commas using join.*/



function manageStudents() {
    let students = ["Alice", "Bob", "Charlie"];

    
    students.splice(1, 0, "David");

   
    console.log(students.includes("Eve"));  

    
    console.log(students.join(","));  
}

manageStudents();



