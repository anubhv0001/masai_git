/*Create a factory function createLibrary that manages a collection of books in a library.
Each library should allow for adding new books, removing books by title, and displaying all
available books. Implement helper factory functions for creating Book objects, which include
properties title and author, and a method details() to print the book’s details.

Steps:

Define the Book factory function with title, author, and a details() method.
Define the createLibrary factory function that returns an object with methods to:
Add a book to the collection.
Remove a book by title.
List all books by calling each book’s details() method.
Implement createLibrary to store books in an internal array.*/

function createBook(tittle,author){
    return{
      tittle,
      author,
      details(){
        console.log(`Tittle:${this.tittle},Author:${this.author}`);
      }
    }
  }
  function createLibrary(){
    const books=[];
    return{
    addBook(book){
      books.push(book);
      console.log(`Added:${book.tittle}`)
    },
    
    removeBook(tittle){
      const index=books.findIndex(book=>book.tittle==tittle);
      if (index!=-1){
        const removed=books.splice(index,1)[0];
        console.log(`Removed:${tittle}`)
      }
      else{
        console.log(`Book with ${tittle} not found`)
      }
    },
    listBooks(){
      if (books.length===0){
        console.log("No books in the library")
      }
      else{
        console.log("Books in the library");
        books.forEach(book=>book.details());
      }
    }
  }
  }
  
  
  
  
  const library=createLibrary();
  const book1=createBook("1984","GeorgeWell orwell");
  const book2=createBook("1985","anshika singh");
  
  
  library.addBook(book1);
  library.addBook(book2);
  library.listBooks();
  library.removeBook("1984");
  library.listBooks();