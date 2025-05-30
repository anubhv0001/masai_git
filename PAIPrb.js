/*roblem 3: Country Analytics Dashboard (HOF Edition)
Objective
Given the dataset of 25 countries below, write a function that analyses the data and returns key insights using only higher-order functions—no for, while, or for…of.
Instructions
Use only map, filter, reduce, and sort.
Do not mutate the original countries array (clone before sorting if needed).
No loops (for, while, for…of) allowed.
Return the analytics in a single object exactly as specified.
Sample Function Signature
function analyzeCountries(data) {
  // return analytics object
} */

const countries = [
  { name: "India",         region: "Asia",     population: 1380004385, area: 3287263,  capital: "New Delhi" },
  { name: "China",         region: "Asia",     population: 1444216107, area: 9596961,  capital: "Beijing" },
  { name: "USA",           region: "Americas", population: 331002651,  area: 9372610,  capital: "Washington, D.C." },
  { name: "Brazil",        region: "Americas", population: 212559417,  area: 8515767,  capital: "Brasília" },
  { name: "Russia",        region: "Europe",   population: 145934462,  area: 17098242, capital: "Moscow" },
  { name: "Bangladesh",    region: "Asia",     population: 164689383,  area: 147570,   capital: "Dhaka" },
  { name: "Japan",         region: "Asia",     population: 126476461,  area: 377975,   capital: "Tokyo" },
  { name: "Nigeria",       region: "Africa",   population: 206139589,  area: 923768,   capital: "Abuja" },
  { name: "Pakistan",      region: "Asia",     population: 220892340,  area: 881912,   capital: "Islamabad" },
  { name: "Germany",       region: "Europe",   population: 83783942,   area: 357114,   capital: "Berlin" },
  { name: "UK",            region: "Europe",   population: 67886011,   area: 243610,   capital: "London" },
  { name: "France",        region: "Europe",   population: 65273511,   area: 551695,   capital: "Paris" },
  { name: "Italy",         region: "Europe",   population: 60461826,   area: 301340,   capital: "Rome" },
  { name: "South Africa",  region: "Africa",   population: 59308690,   area: 1221037,  capital: "Pretoria" },
  { name: "Egypt",         region: "Africa",   population: 102334404,  area: 1002450,  capital: "Cairo" },
  { name: "Mexico",        region: "Americas", population: 128932753,  area: 1964375,  capital: "Mexico City" },
  { name: "Vietnam",       region: "Asia",     population: 97338579,   area: 331212,   capital: "Hanoi" },
  { name: "Philippines",   region: "Asia",     population: 109581078,  area: 300000,   capital: "Manila" },
  { name: "Turkey",        region: "Asia",     population: 84339067,   area: 783562,   capital: "Ankara" },
  { name: "Iran",          region: "Asia",     population: 83992949,   area: 1648195,  capital: "Tehran" },
  { name: "Spain",         region: "Europe",   population: 46754778,   area: 505992,   capital: "Madrid" },
  { name: "Thailand",      region: "Asia",     population: 69799978,   area: 513120,   capital: "Bangkok" },
  { name: "Argentina",     region: "Americas", population: 45195774,   area: 2780400,  capital: "Buenos Aires" },
  { name: "Colombia",      region: "Americas", population: 50882891,   area: 1141748,  capital: "Bogotá" },
  { name: "Canada",        region: "Americas", population: 37742154,   area: 9984670,  capital: "Ottawa" }
];

function analyzeCountries(countries) {
 const totalCountries=countries.length;
 console.log('totalCountries:',totalCountries);
 
 const averagePopulation=countries.reduce((sum,country)=>
   sum+country.population,0)
 
 console.log('averagePopulation:',Math.floor(averagePopulation/(totalCountries)));
 
 const top5MostPopulated=countries.sort((a,b)=>b.population-a.population).slice(0,5).map((ele)=>ele.name);
 console.log('top5MostPopulated:',top5MostPopulated);
 
 const smallCountries=countries.sort((a,b)=>a.area-b.area).slice(0,4).map((ele)=>ele.name);
 console.log('smallCountries:',smallCountries);
 const highestDensityCountries=countries.sort((a,b)=>b.population/b.area-a.population/a.area).slice(0,5)
.map((ele)=>ele.name); 
console.log('highestDensityCountries:',highestDensityCountries);
}

analyzeCountries(countries);
// second ques
/*Simulate a task-scheduler system that allows tasks to be delayed or repeated with clean callback / promise handling.

Requirements
Implement scheduleTask(taskName, delay, repeat = false)

If repeat is false, run once after delay ms.
If repeat is true, run every delay ms until cancelled.
Return the timer ID (setTimeout ID for one-shot, setInterval ID for repeating) so it can be cancelled later.
Use arrow functions and template literals to log, e.g.

Task "Backup User Data" started after 3000 ms

Implement cancelRepeatingTask(id) that stops a repeating task by calling clearInterval(id).

Bonus: scheduleTaskPromise(taskName, delay) returns a Promise that resolves after the delay with

Task "Sync Inventory" completed after 2000 ms

Sample Usage
scheduleTask("Log Session", 1000);                     // one-time
const intervalId = scheduleTask("Check Notifications", 2000, true); // repeating
setTimeout(() => cancelRepeatingTask(intervalId), 8000);            // cancel after 8 s

scheduleTaskPromise("Data Export", 1500).then(console.log);*/

function scheduleTask(taskName,delay,repeat=true){
  const pro=  new Promise((resolve,reject)=>{
    let count=
    setTimeout(()=>{
       if (repeat){
        console.log('Sync Inventory')
      }
    },delay);
  })
}


let taskName=console.log('Sync Inventory');
scheduleTask(taskName,1000)
