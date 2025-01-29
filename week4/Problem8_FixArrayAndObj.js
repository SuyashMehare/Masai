const library = {

    books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],
  
    addBook(book = {}) {
    
      if (!book.title || !book.author || !book.year) {
        console.log("Book information is incomplete.");
        return;
      }

      this.books.push(book);
    },
    
    findBookByTitle(title = "") {
      return this.books.find(book => book.title.toLocaleLowerCase() === title.toLocaleLowerCase());
    },
    
    removeBook(title) {
      if(typeof title != "string") {
        console.log("Expected 'string' type");
        return;
      }

      const index = this.books.findIndex(book => book.title.toLocaleLowerCase() === title.toLocaleLowerCase());
      
      if (index !== -1) {
        this.books.splice(index, 1);
      } else {
        console.log("Book not found.");
      }  
    } 
  }
  
  library.addBook({ title: "Vectors of achivements", author: "George Orwell", year: 1949 }); 
  library.addBook({ title: "dassdaf", author: "fasdf", year: 677 }); 
  console.log(library.findBookByTitle("vectors of achivements"))
  library.removeBook({})
  console.log(library.books);
  