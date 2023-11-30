// Book class
class Book {
    constructor(title, author, numPages, bookId) {
        this.title = title;
        this.author = author;
        this.numPages = numPages;
        this.bookId = bookId;
        this.checkedOut = false;
    }
}

// DVD class
class DVD {
    constructor(title, director, duration, dvdId) {
        this.title = title;
        this.director = director;
        this.duration = duration;
        this.dvdId = dvdId;
        this.checkedOut = false;
    }
}

// Library class
class Library {
    constructor() {
        this.books = JSON.parse(localStorage.getItem('books')) || [];
        this.dvds = JSON.parse(localStorage.getItem('dvds')) || [];
    }

    addBook() {
        const title = document.getElementById('bookTitle').value;
        const author = document.getElementById('author').value;
        const numPages = document.getElementById('numPages').value;
        const bookId = document.getElementById('bookId').value;

        if (title && author && numPages && bookId) {
            const book = new Book(title, author, numPages, bookId);
            this.books.push(book);
            this.saveToLocalStorage();
            this.displayBooks();
            this.clearForm('addBookForm');
        }
    }

    addDVD() {
        const title = document.getElementById('dvdTitle').value;
        const director = document.getElementById('director').value;
        const duration = document.getElementById('duration').value;
        const dvdId = document.getElementById('dvdId').value;

        if (title && director && duration && dvdId) {
            const dvd = new DVD(title, director, duration, dvdId);
            this.dvds.push(dvd);
            this.saveToLocalStorage();
            this.displayDVDs();
            this.clearForm('addDvdForm');
        }
    }

    checkoutItem() {
        const checkoutId = document.getElementById('checkoutId').value;

        const bookIndex = this.books.findIndex(book => book.bookId === checkoutId);
        const dvdIndex = this.dvds.findIndex(dvd => dvd.dvdId === checkoutId);

        if (bookIndex !== -1 && !this.books[bookIndex].checkedOut) {
            this.books[bookIndex].checkedOut = true;
        } else if (dvdIndex !== -1 && !this.dvds[dvdIndex].checkedOut) {
            this.dvds[dvdIndex].checkedOut = true;
        } else {
            alert('Item not found or already checked out.');
        }

        this.saveToLocalStorage();
        this.displayBooks();
        this.displayDVDs();
        this.clearForm('checkoutForm');
    }

    displayBooks() {
        const bookListDiv = document.getElementById('bookList');
        bookListDiv.innerHTML = '';
        this.books.forEach(book => this.createItemDiv(book, bookListDiv, 'book'));
        this.applyTableStyles(bookListDiv);
    }

    displayDVDs() {
        const dvdListDiv = document.getElementById('dvdList');
        dvdListDiv.innerHTML = '';
        this.dvds.forEach(dvd => this.createItemDiv(dvd, dvdListDiv, 'dvd'));
        this.applyTableStyles(dvdListDiv);
    }

    createItemDiv(item, listDiv, itemType) {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add(itemType);
    
        const status = item.checkedOut ? 'Checked Out' : 'Available';
        const statusColor = item.checkedOut ? 'red' : 'green';
    
        itemDiv.innerHTML = `<strong>${item.title}</strong> - ${itemType === 'book' ? `by ${item.author}, ${item.numPages} pages` : `directed by ${item.director}, Duration: ${item.duration}`} - ID: ${itemType === 'book' ? item.bookId : item.dvdId} - <span class="${statusColor}">${status}</span>`;
        listDiv.appendChild(itemDiv);
    }
    

    applyTableStyles(listDiv) {
        const table = document.createElement('table');
        table.classList.add('item-table');

        if (listDiv.children.length > 0) {
            const headerRow = document.createElement('tr');
            const headers = ['Title', 'Details', 'ID', 'Status'];

            headers.forEach(headerText => {
                const header = document.createElement('th');
                header.textContent = headerText;
                headerRow.appendChild(header);
            });

            table.appendChild(headerRow);
        }

        Array.from(listDiv.children).forEach(itemDiv => {
            const row = document.createElement('tr');
            const itemDetails = itemDiv.textContent.split(' - ');

            itemDetails.forEach(detail => {
                const cell = document.createElement('td');
                cell.textContent = detail.trim();
                row.appendChild(cell);
            });

            table.appendChild(row);
        });

        listDiv.appendChild(table);
    }

    saveToLocalStorage() {
        localStorage.setItem('books', JSON.stringify(this.books));
        localStorage.setItem('dvds', JSON.stringify(this.dvds));
    }

    clearForm(formId) {
        const form = document.getElementById(formId);

        Array.from(form.elements)
            .filter(element => element.tagName === 'INPUT')
            .forEach(input => {
                input.value = '';
            });
    }
}

const library = new Library();

// Initial display of books
library.displayBooks();
library.displayDVDs();

function toggleFormVisibility(formId) {
    const form = document.getElementById(formId);
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
}
