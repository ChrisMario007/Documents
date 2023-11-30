// Importing necessary dependencies
const express = require('express');
const bodyParser = require('body-parser');

// Creating an Express application
const app = express();

// Setting the port on which the server will listen
const port = 3000;

// Adding middleware to parse incoming JSON requests
app.use(bodyParser.json());

// In-memory array to store the list of drugs
let drugs = [
    { id: 1, name: 'Aspirin', quantity: 100 },
    { id: 2, name: 'Ibuprofen', quantity: 50 },
    // Add more drugs as needed
];

// Endpoint to retrieve the list of drugs
app.get('/api/drugs', (req, res) => {
    res.json(drugs);
});

// Endpoint to retrieve a specific drug based on its ID
app.get('/api/drugs/:id', (req, res) => {
    const drugId = parseInt(req.params.id);
    const drug = drugs.find((d) => d.id === drugId);

    if (drug) {
        res.json(drug);
    } else {
        res.status(404).json({ message: 'Drug not found' });
    }
});

// Endpoint to create a new drug
app.post('/api/drugs', (req, res) => {
    const newDrug = req.body;
    const newId = drugs.length + 1;

    // Generate a new ID and add the new drug to the array
    newDrug.id = newId;
    drugs.push(newDrug);

    // Respond with a success message and the created drug
    res.json({ message: 'Drug created successfully', drug: newDrug });
});

// Endpoint to update a specific drug based on its ID
app.put('/api/drugs/:id', (req, res) => {
    const drugId = parseInt(req.params.id);
    const updatedDrug = req.body;
    const drugIndex = drugs.findIndex((drug) => drug.id === drugId);

    if (drugIndex !== -1) {
        // If the drug is found, update its information
        drugs[drugIndex] = { ...drugs[drugIndex], ...updatedDrug };
        res.json({ message: 'Drug updated successfully', drug: drugs[drugIndex] });
    } else {
        // If the drug is not found, respond with a 404 status
        res.status(404).json({ message: 'Drug not found' });
    }
});

// Endpoint to delete a specific drug based on its ID
app.delete('/api/drugs/:id', (req, res) => {
    const drugId = parseInt(req.params.id);
    const initialLength = drugs.length;

    // Filter out the drug with the specified ID
    drugs = drugs.filter((drug) => drug.id !== drugId);

    if (drugs.length < initialLength) {
        // If the drug is deleted, respond with a success message
        res.json({ message: 'Drug deleted successfully' });
    } else {
        // If the drug is not found, respond with a 404 status
        res.status(404).json({ message: 'Drug not found' });
    }
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
