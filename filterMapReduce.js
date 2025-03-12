/*
const studentsProgress = [
  { name: "Ramesh", completedLessons: 40, totalLessons: 50 },
  { name: "Sita", completedLessons: 25, totalLessons: 50 },
  { name: "Manoj", completedLessons: 30, totalLessons: 60 },
  { name: "Pooja", completedLessons: 48, totalLessons: 50 },
  { name: "Anil", completedLessons: 15, totalLessons: 50 }
];
Step 1: Filter students who have completed at least 50% of the course
const activeStudents = studentsProgress.filter(student => 
  (student.completedLessons / student.totalLessons) >= 0.5
);

 Step 2: Map to calculate their completion percentage
const completionPercentages = activeStudents.map(student => 
  (student.completedLessons / student.totalLessons) * 100
);

Step 3: Reduce to find the average completion percentage of all active students
const averageCompletionPercentage = completionPercentages.reduce((acc, percentage) => 
  acc + percentage, 0) / completionPercentages.length;

 Step 4: Filter students who have more than 80% completion to get top learners
const topLearners = activeStudents.filter(student => 
  (student.completedLessons / student.totalLessons) > 0.8
);

console.log("Active Students:", activeStudents);
console.log("Completion Percentages:", completionPercentages);
console.log("Average Completion Percentage:", averageCompletionPercentage);
console.log("Top Learners:", topLearners);
*/



const studentsProgress = [
    { name: "Ramesh", completedLessons: 40, totalLessons: 50 },
    { name: "Sita", completedLessons: 25, totalLessons: 50 },
    { name: "Manoj", completedLessons: 30, totalLessons: 60 },
    { name: "Pooja", completedLessons: 48, totalLessons: 50 },
    { name: "Anil", completedLessons: 15, totalLessons: 50 }
];



let filtered = studentsProgress.filter(ele => (ele.completedLessons / ele.totalLessons) > 0.5
);
console.log(filtered);


let mapped = filtered.map(ele => (ele.completedLessons / ele.totalLessons) * 100
);
console.log(mapped);

let reduced = mapped.reduce((acc, curr) => (acc + curr), 0) / mapped.length;
console.log(reduced);

let finalFilter = filtered.filter(ele => (ele.completedLessons / ele.totalLessons) > 0.8,
    0);
console.log(finalFilter);