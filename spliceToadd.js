/*Add a new student name at a specific position using splice.
Check if a student's name exists in the array using includes.
Convert the array of student names into a single string where names are separated by commas using join.
The existing code is as follows:*/


function manageStudents() {
    let students = ["Alice", "Bob", "Charlie"];

    // Add "David" at index 1
    students.splice(1, 0, "David");

    // Check if "Eve" is in the list
    console.log(students.includes("Eve"));  // Should return false

    // Convert the array to a string with names separated by commas
    console.log(students.join(","));  // Expected: "Alice,David,Bob,Charlie"
}

manageStudents();
