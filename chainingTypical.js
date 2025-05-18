/*Using .map(), .filter(), .reduce(), .sort(), .trim(), .toLowerCase(), and .includes() for Advanced Data
Manipulation
Description:
Write a function processData() that:

Filters out students whose names do not include the word "Alice" (case-insensitive).
Filters out students who have scored below 50.
Sorts the remaining students by score in descending order.
Maps each student to include their rank (starting from 1) and a trimmed version of their name.
Returns an object with the total number of students who passed and a sorted list of students with ranks and their names in uppercase.
Requirements:
Use .filter() to:

Keep students whose names include the string "Alice" (case-insensitive).
Keep students who scored 50 or above.
Use .sort() to sort students by score in descending order.

Use .map() to:

Add a rank to each student based on their sorted position.
Trim any leading or trailing spaces from the names.
Convert the name to uppercase.
Use .reduce() to calculate the total number of students who passed.*/
const students = [
  { name: ' Alice Cooper ', score: 85 },
  { name: 'bob alice', score: 42 },
  { name: 'Alice Wonderland', score: 70 },
  { name: ' david', score: 30 }
];
function processData(student){
  const filtered=students.filter((student)=>student.name.toLowerCase().includes("alice")&&student.score>=50);
  
  const sorted=filtered.sort((a,b)=>b.score-a.score);
  const mapped = sorted.map((student, index) => ({
    name: student.name.trim().toUpperCase(),
    score: student.score,
    rank: index + 1
  }));
  const totalPassed=sorted.reduce((count)=>count+1,0);
  
  return {
    totalPassed,
    student:sorted
  }
}
console.log(processData(students));