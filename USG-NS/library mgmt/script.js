// Class representing a generic library item
class LibraryItem {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.isCheckedOut = false;
    }

    checkOut() {
        if (!this.isCheckedOut) {
            this.isCheckedOut = true;
        } else {
            console.error(`${this.title} is already checked out.`);
        }
    }

    returnItem() {
        if (this.isCheckedOut) {
            this.isCheckedOut = false;
        } else {
            console.error(`${this.title} is not checked out.`);
        }
    }

    displayDetails() {
        // To be implemented in subclasses
    }
}

// Class representing a book, inheriting from LibraryItem
class Book extends LibraryItem {
    constructor(id, title, author, pageNumber) {
        super(id, title);
        this.author = author;
        this.pageNumber = pageNumber;
    }

    displayDetails() {
        return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pageNumber}`;
    }
}

// Class representing a DVD, inheriting from LibraryItem
class DVD extends LibraryItem {
    constructor(id, title, director, duration) {
        super(id, title);
        this.director = director;
        this.duration = duration;
    }

    displayDetails() {
        return `Title: ${this.title}, Director: ${this.director}, Duration: ${this.duration} minutes`;
    }
}

// Class representing a library
class Library {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push(item);
    }

    getItemById(id) {
        return this.items.find(item => item.id === id);
    }
}

// Class managing user interface interactions
class UserInterface {
    constructor(library) {
        this.library = library;
        this.feedbackDiv = document.getElementById('feedback');
        this.selectedBookDetails = document.getElementById('selected-book-details');
        this.bookDetailsParagraph = document.getElementById('book-details');

        const checkoutForm = document.getElementById('checkout-form');
        checkoutForm.addEventListener('submit', this.handleCheckout.bind(this));
    }

    handleCheckout(event) {
        event.preventDefault();

        const itemType = document.getElementById('item-type').value;
        const itemId = parseInt(document.getElementById('item-id').value);

        const selectedItem = this.library.getItemById(itemId);

        if (selectedItem) {
            selectedItem.checkOut();
            this.updateDisplay();
            this.displayFeedback(`${selectedItem.title} checked out successfully.`);

            // Display checked-out item information
            this.selectedBookDetails.style.display = 'block';

            // Check the type of the selected item and display details accordingly
            if (selectedItem instanceof Book) {
                this.bookDetailsParagraph.textContent = selectedItem.displayDetails();
            } else if (selectedItem instanceof DVD) {
                this.bookDetailsParagraph.textContent = selectedItem.displayDetails();
            }
        } else {
            this.displayFeedback(`Error: Item with ID ${itemId} not found.`);
            this.selectedBookDetails.style.display = 'none'; // Hide details on error
        }
    }

    updateDisplay() {
        // Clear previous content
        this.bookDetailsParagraph.textContent = '';
    }

    displayFeedback(message) {
        this.feedbackDiv.textContent = message;
        setTimeout(() => {
            this.feedbackDiv.textContent = '';
        }, 3000);
    }
}

// Event listener when the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    // Create a new instance of the Library class
    const library = new Library();

    // Dummy data for demonstration
    library.addItem(new Book(1, "The Great Gatsby", "F. Scott Fitzgerald", 180));
    library.addItem(new Book(2, "To Kill a Mockingbird", "Harper Lee", 281));
    library.addItem(new Book(3, "1984", "George Orwell", 328));

    library.addItem(new DVD(4, "Inception", "Christopher Nolan", 150));
    library.addItem(new DVD(5, "The Matrix", "The Wachowskis", 136));
    library.addItem(new DVD(6, "The Shawshank Redemption", "Frank Darabont", 142));

    // Create an instance of the UserInterface class
    const ui = new UserInterface(library);
});
