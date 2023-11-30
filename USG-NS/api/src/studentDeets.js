// Importing necessary dependencies
const express = require('express');

// Creating an Express application
const app = express();

// Setting the port on which the server will listen
const port = 4000;
app.use(express.json());

const students = [
    {
        "studentID": 1,
        "name": "John Doe",
        "age": 20,
        "grade": "A"
    },
    {
        "studentID": 2,
        "name": "Jane Smith",
        "age": 22,
        "grade": "B"
    },
    {
        "studentID": 3,
        "name": "Bob Johnson",
        "age": 21,
        "grade": "C"
    }
];
app.get('/students', (req, res) => {
    res.json(students);
});

// Student ID receiver
app.get('/students/:id', (req, res) => {
    const studentID = parseInt(req.params.id);
    const student = students.find((student) => student.studentID === studentID);

    if (!student) {
        return res.status(404).json({ error: 'Student not found' });
    }

    res.json(student);
})

app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}`);
});
/**
 * 1.write an api that posts student details.
 * 2.write an api that gets the details of a particular student based on the student id.
 * 3.write an api that posts the results of the student.
 * 4.write an api that posts the student courses.
 * 
 * add students, results, courses, student courses
 * api that returns the results and student courses based on the student id
 */