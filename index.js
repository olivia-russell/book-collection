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
    let book = new Book(title, author, pages, status);
    library.push(book);
}

// Display books on page

function displayBooks() {
    const books = document.querySelector(".books");
    console.log(books);

    // loop over library array
    library.forEach(library => {
        const card = document.createElement("div");
        console.log(card);
        card.classList.add("card");
        books.appendChild(card);
        for(let key in library) {
            console.log(`${key}: ${library[key]}`);
            const para = document.createElement("p");
            para.textContent = (`${key}: ${library[key]}`);
            card.appendChild(para);

        }
    })
        
}

addBook('A title', 'An author', "321", "true");
addBook('Title two', 'Author two', '534', 'false');
displayBooks();



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