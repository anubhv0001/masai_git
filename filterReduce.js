const movies = [
    { title: "Drishyam", genre: "Thriller", rating: 8.5, watchTime: 140 },
    { title: "Lagaan", genre: "Drama", rating: 8.1, watchTime: 180 },
    { title: "Dangal", genre: "Sports", rating: 8.3, watchTime: 161 },
    { title: "Gully Boy", genre: "Musical", rating: 7.4, watchTime: 130 },
    { title: "Kabir Singh", genre: "Romance", rating: 6.9, watchTime: 150 }
];
/*Implement the following logic:
Map to convert watchTime from minutes to hours./
Filter movies with a rating above 7.5./
Reduce to find the total watch time of all highly-rated movies./
Map to extract only the title and watch time of the best movies.*/


let convertedToHour = movies.map(ele => (ele.watchTime / 60).toFixed(2));
console.log(convertedToHour);

let filtered = movies.filter(ele => (ele.rating) > 7.5);
console.log(filtered);

let reduced = filtered.reduce((acc, watchtime) => acc + watchtime.watchTime, 0);
console.log(reduced);
//watchtime is refrence to array;

let mapped = filtered.map(ele => ({
    title: ele.title,
    watchTime: ele.watchTime
}));
console.log(mapped);


