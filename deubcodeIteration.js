function manageStudents() {
    let students = ["Alice", "Bob", "Charlie"];

    students.splice(1, 0, "David");


    console.log("Contains Eve?", students.includes("Eve"));  
    
    console.log("Joined string:", students.join(","));  
}


function testManageStudents() {
    let testResults = [];
    let students1 = ["A", "B", "C"];
    students1.splice(0, 0, "X"); 
    testResults.push(students1.join(",") === "X,A,B,C");

    let students2 = ["A", "B", "C"];
    students2.splice(2, 0, "Y"); 
    testResults.push(students2.join(",") === "A,B,Y,C");

    
    let students3 = ["Alice", "Bob", "Charlie"];
    testResults.push(students3.includes("Alice") === true);
    testResults.push(students3.includes("Zoe") === false);


    let students4 = ["One", "Two", "Three"];
    testResults.push(students4.join(",") === "One,Two,Three");


    testResults.forEach((result, index) => {
        console.log(`Test ${index + 1}: ${result ? "Passed " : "Failed "}`);
    });
}

manageStudents();
console.log("Running Tests...");
testManageStudents();
