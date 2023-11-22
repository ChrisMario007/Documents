// Book.js
import LibraryItem from './LibraryItem.js';

class Book extends LibraryItem {
    constructor(bookId, title, author, pageCount) {
        super(bookId, title, author, pageCount);
    }

    displayDetails() {
        super.displayDetails();
        console.log(`Type: Book`);
    }
}

export default Book;
