// LibraryItem.js
class LibraryItem {
    constructor(bookId, title, author, pageCount) {
        this.bookId = bookId;
        this.title = title;
        this.author = author;
        this.pageCount = pageCount;
    }

    displayDetails() {
        console.log(`${this.bookId}: ${this.title} by ${this.author}, ${this.pageCount} pages`);
    }
}

export default LibraryItem;
