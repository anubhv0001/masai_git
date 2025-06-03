function Book(title,author,year){
  this.title=title,
  this.author=author,
  this.year=year
}
Book.prototype.getSummary=function(){
  return `${this.title}, by ${this.author},published in ${this.year}`
}
const books = [
  new Book("The Alchemist", "Paulo Coelho", 1988),
  new Book("To Kill a Mockingbird", "Harper Lee", 1960),
  new Book("1984", "George Orwell", 1949)
];
export { Book, books };