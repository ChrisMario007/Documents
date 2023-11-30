document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('add-book-form');
    const adminTableBody = document.querySelector('#book-list-table tbody');
    const submissionTable = document.getElementById('data');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Capture form inputs
        const bookId = form.bookId.value;
        const title = form.bookTitle.value;
        const author = form.author.value;
        const pageCount = form.pageCount.value;

        // Create a new row in the admin table
        const newRowAdmin = document.createElement('tr');
        newRowAdmin.innerHTML = `<td>${bookId}</td><td>${title}</td><td>${author}</td><td>${pageCount}</td>`;

        // Append the new row to the admin table
        adminTableBody.appendChild(newRowAdmin);

        // Create a new row in the submission table
        const newRowSubmission = document.createElement('li');
        newRowSubmission.textContent = `${bookId} - ${title} - ${author} - ${pageCount}`;

        // Append the new row to the submission table
        submissionTable.appendChild(newRowSubmission);

        // Clear form inputs
        form.reset();

        // Display success message
        displayFeedback('Successfully added!', 'success');
    });

    // Function to display feedback message
    function displayFeedback(message, type) {
        const feedbackElement = document.getElementById('feedback');
        feedbackElement.textContent = message;

        if (type === 'success') {
            feedbackElement.style.color = '#27ae60'; // Green color for success
        } else {
            feedbackElement.style.color = '#e74c3c'; // Red color for error
        }

        // Clear feedback after 3 seconds
        setTimeout(() => {
            feedbackElement.textContent = '';
        }, 3000);
    }
});
