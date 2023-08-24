// Declare empty array
let library = [];


// Constructor for the book
function Book (title, author, pages, status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }

// Adding a new book
function addBook (title, author, pages, status) {
    let book = new Book(title, author, pages, status)
    library.push(book);ddd
}



class Library {
    constructor() {
        this.books = [];
    }
    addBook (newBook) {
        this.books.push(newBook);
    }
    getBook(title) {
        return this.books.find((book) => book.title == title);
    }

}