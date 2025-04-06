/*Book Constructor:

Create a constructor function Book with the following properties:
title (string): the title of the book
author (string): the author of the book
year (number): the year the book was published
Book Prototype Method:

Add a method to Book.prototype called getSummary that returns a string: "[title] by [author], published in [year]". */
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  
  Book.prototype.getSummary = function() {
    return `${this.title} by ${this.author}, published in ${this.year}`;
  };
  
  const book1 = new Book("Atomic Habits", "James Clear", 2018);
  console.log(book1.getSummary());
  