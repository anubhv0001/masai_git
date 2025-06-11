/*


Tasks
Get a list of movie titles sorted by rating (descending).
Filter movies by genre "Sci-Fi".
Map movies to strings like "Interstellar (2014) - 169 mins".
Calculate the average movie duration.
Find the highest rated movie title.
Use only HOFs (map, filter, reduce, sort). No loops*/

const movies = [
  { title: "Inception", year: 2010, genre: "Sci-Fi", rating: 8.8, duration: 148 }, 
  { title: "The Dark Knight", year: 2008, genre: "Action", rating: 9.0, duration: 152 },
  { title: "Interstellar", year: 2014, genre: "Sci-Fi", rating: 8.6, duration: 169 },
  { title: "Tenet", year: 2020, genre: "Sci-Fi", rating: 7.4, duration: 150 },
  { title: "Dunkirk", year: 2017, genre: "War", rating: 7.9, duration: 106 },
  { title: "The Prestige", year: 2006, genre: "Drama", rating: 8.5, duration: 130 },
];

let sorted=movies.sort((a,b)=>b.rating-a.rating);
console.log(sorted)
console.log('Highest rated movie title:'+sorted[0].title)

const totalMovieDuration=movies.reduce((acc,curr)=>acc+curr.duration,0)
console.log('Average movies duration:'+Math.floor(totalMovieDuration/movies.length));

const filtered=movies.filter(movie=>movie.genre==='Sci-Fi');
console.log('Filtered based on genre Sci fi:')
console.log(filtered);

const mapped=movies.map((movie)=>`${movie.title}  ${movie.year}  Duration:${movie.duration}`)
console.log(mapped);


/*https://fakestoreapi.com/products
Filter products priced above $100.

Map filtered products to strings:

"Product Title - $Price - Category"

Sort these products by price descending.

Calculate the average rating (from rating.rate property) of filtered products.

Show a loading indicator during fetch (in console , show …loading).

Show a message(alert) if no products match.*/


const url='https://fakestoreapi.com/products'

async function fetchAndFilterProducts(minPrice){
  try{
  const response=await fetch(url);
  const products=await response.josn();
 
 
 const result=products
 .filter(product=>product.price>minPrice)
 .sort((a,b)=>b.price-a.price)
 .map(product=>`${product.Title} ${product.Category}`)

  result.forEach(item=>console.log(item));
}
catch(error){
  console.log(error);
}
}
fetchAndFilterProducts(100);