const library = {

    books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],
    
    addBook(book) {
    
    if (!book.title || !book.author || !book.year) {
    
    console.log("Book information is incomplete.");
    
    return;
    
    }
    this.books.push(book);
    
    },
    
    findBookByTitle(title) {
    
    return this.books.find(book => book.title === title);
    
    },
    
    removeBook(title) {
    
    const index = this.books.findIndex(book => book.title === title);
    
    if (index !== -1) {
    
    this.books.splice(index, 1);
    
    } else {
    
    console.log("Book not found.");
    
    } } };
    
    library.addBook({ title:"snow white",author: "George Orwell", year: 1949 });
    
    console.log(library.books.length);
    console.log(library.books);
    
    /*Steps:
    
    Debug and improve the addBook method to ensure all books added are valid and fully specified.
    Read about the methods provided above in MDN
    Review and correct the output of the system based on operations performed.
    Refactor the code for better error handling and data integrity.*/