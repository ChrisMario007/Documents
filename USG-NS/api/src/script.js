document.addEventListener('DOMContentLoaded', () => {
    // Fetch and display the list of drugs
    fetch('http://localhost:3000/api/drugs')
        .then(response => response.json())
        .then(data => displayDrugs(data))
        .catch(error => console.error('Error fetching drugs:', error));

    // Add event listener for the form submission
    document.getElementById('addDrugForm').addEventListener('submit', addOrUpdateDrug);
});

// Function to display the list of drugs
function displayDrugs(drugs) {
    const drugsList = document.getElementById('drugsList');
    drugsList.innerHTML = ''; // Clear previous list

    drugs.forEach(drug => {
        const listItem = document.createElement('li');
        listItem.textContent = `${drug.id}: ${drug.name} - Quantity: ${drug.quantity}`;
        drugsList.appendChild(listItem);
    });
}

// Function to add/update a drug
function addOrUpdateDrug(event) {
    event.preventDefault();

    const drugId = document.getElementById('drugId').value;
    const drugName = document.getElementById('drugName').value;
    const drugQuantity = document.getElementById('drugQuantity').value;

    const requestData = {
        name: drugName,
        quantity: parseInt(drugQuantity)
    };

    // If a drug ID is provided, update the drug; otherwise, add a new drug
    const apiUrl = drugId ? `http://localhost:3000/api/drugs/${drugId}` : 'http://localhost:3000/api/drugs';

    fetch(apiUrl, {
        method: drugId ? 'PUT' : 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestData)
    })
        .then(response => response.json())
        .then(data => {
            // Fetch and display the updated list of drugs
            fetch('http://localhost:3000/api/drugs')
                .then(response => response.json())
                .then(updatedData => displayDrugs(updatedData))
                .catch(error => console.error('Error fetching drugs:', error));
        })
        .catch(error => console.error('Error adding/updating drug:', error));

    // Clear the form fields after submitting
    document.getElementById('drugId').value = '';
    document.getElementById('drugName').value = '';
    document.getElementById('drugQuantity').value = '';
}
