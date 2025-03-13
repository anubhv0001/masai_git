const athletes = [
    { name: "Virat", sport: "Cricket", scores: [89, 75, 102], age: 35 },
    { name: "Sindhu", sport: "Badminton", scores: [21, 19, 25], age: 29 },
    { name: "Neeraj", sport: "Javelin", scores: [88, 90, 85], age: 26 }
  ];
  /*Tasks:
  1️⃣ Extract the first athlete's name and sport using destructuring./
  
  2️⃣ Destructure the scores of Neeraj, storing the first two separately and the rest in another variable.
  
  3️⃣ Create a new object for Neeraj using the spread operator, updating his age to 27 and adding worldChampion: true.
  
  4️⃣ Merge all scores from all athletes into a single array using the spread operator.*/
  
  const [{name,sport}]=athletes;
  console.log(name,sport);
  
  const {scores:[score1,score2,...restScores]}=athletes[2];
  console.log(score1,score2,restScores);
  
  const neerajUpdated={...athletes[2],age:27,worldChampion:true};
  console.log(neerajUpdated);
  
  const merged={
    ...athletes[0].scores,
     ...athletes[1].scores,
     ...athletes[2].scores,
    
  }
  console.log(merged);