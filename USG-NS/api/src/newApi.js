// Importing necessary dependencies
const express = require('express');
// const bodyParser = require('body-parser');


// Creating an Express application
const app = express();

// Setting the port on which the server will listen
const port = 3001;
app.use(express.json());

app.get('/api/message', (req, res) => {
    res.send("hello world");
});

// student ID receiver
app.get('/api/students/:id', (req, res) => {
    const studentID = req.params.id;
    res.json(`the student is ${studentID}`);
});




app.listen(port, () => {

    console.log(`Server is listening on port ${port}`);
});
