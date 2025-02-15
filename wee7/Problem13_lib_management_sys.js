function Book (title, author) {
    let book = {};
    book.title = title;
    book.author = author;
    book.details = function () {
        console.log(`Title: ${this.title}, Author: ${this.author}`);
    };

    return book;
}

function createLibrary () {
    return {
        books: [],

        addBook: function(book) {
            this.books.push(book)
        },
        removeBook: function (title) {
            const idx = this.books.findIndex((book) => book.title === title)
            this.books[idx] = this.books[this.books.length-1];
            this.books.pop();
        },
        listBooks: function () {
            this.books.forEach((book) => {
                console.log(`Title: ${book.title}, Author: ${book.author}`)
            })
        }
    }
}

const library = createLibrary();

const book1 = Book("To Kill a Mockingbird", "Harper Lee");
const book2 = Book("1984", "George Orwell");

library.addBook(book1);
library.addBook(book2);

library.listBooks();
// Output:
// Title: To Kill a Mockingbird, Author: Harper Lee
// Title: 1984, Author: George Orwell

library.removeBook("1984");
library.listBooks();
// Output:
// Title: To Kill a Mockingbird, Author: Harper Lee

