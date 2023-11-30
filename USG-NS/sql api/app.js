const express = require("express");
const app = express();
const port = 8080;

app.use(express.json());

const learners = [
    { id: 1010, firstName: "Java", lastName: "Mushroom", age: 25, email: "java@example.com" },
    { id: 1011, firstName: "Maroon", lastName: "Five", age: 28, email: "maroon@example.com" },
    { id: 1012, firstName: "Josh", lastName: "Apelles", age: 23, email: "josh@example.com" },
    { id: 1013, firstName: "MP", lastName: "Cruel", age: 22, email: "mp@example.com" },
    { id: 1014, firstName: "Shack", lastName: "Adjei", age: 26, email: "shack@example.com" },
    { id: 1015, firstName: "Ivan", lastName: "Mackerel", age: 24, email: "ivan@example.com" },
    { id: 1016, firstName: "Mario", lastName: "Christian", age: 27, email: "mario@example.com" },
    { id: 1017, firstName: "Alice", lastName: "Wonderland", age: 21, email: "alice@example.com" },
    { id: 1018, firstName: "Bob", lastName: "Builder", age: 30, email: "bob@example.com" },
    { id: 1019, firstName: "Eva", lastName: "Green", age: 26, email: "eva@example.com" },
    { id: 1020, firstName: "Charlie", lastName: "Brown", age: 22, email: "charlie@example.com" },
];

const coursesArray = [
    { "course_id": 4, "course_name": "Geography" },
    { "course_id": 5, "course_name": "InterScience" },
    { "course_id": 6, "course_name": "Elective Mathematics" },
    { "course_id": 1, "course_name": "Math" },
    { "course_id": 2, "course_name": "Science" },
    { "course_id": 3, "course_name": "History" },
    { "course_id": 7, "course_name": "Sociology" },
    { "course_id": 8, "course_name": "Computer Science" },
    { "course_id": 9, "course_name": "Principles of Coding" }
];

const coursesData = [
    {
        learner_id: 1010, courses: [
            { "course_id": 1, "course_name": "Math" },
            { "course_id": 2, "course_name": "Science" },
            { "course_id": 3, "course_name": "History" }
        ]
    },
    {
        learner_id: 1011, courses: [
            { "course_id": 4, "course_name": "Geography" },
            { "course_id": 5, "course_name": "InterScience" },
            { "course_id": 6, "course_name": "Elective Mathematics" }
        ]
    },
    {
        learner_id: 1012, courses: [
            { "course_id": 7, "course_name": "Sociology" },
            { "course_id": 8, "course_name": "Computer Science" },
            { "course_id": 9, "course_name": "Principles of Coding" }
        ]
    },
];

const testResults = [];
const learnerCourses = [];

app.post("/api/add_learner", (req, res) => {
    const newLearner = req.body;
    learners.push(newLearner);
    res.json({ message: "Learner added successfully" });
});

app.get("/api/get_learner/:id", (req, res) => {
    const learnerId = req.params.id;
    const learner = learners.find((l) => l.id === parseInt(learnerId));
    if (learner) {
        res.json(learner);
    } else {
        res.status(404).json({ message: "Learner not found" });
    }
});

app.get("/api/get_all_learners", (req, res) => {
    res.json(learners);
});

app.post("/api/add_test_results", (req, res) => {
    const newTestResult = req.body;
    testResults.push(newTestResult);
    res.json({ message: "Result has been added" });
});

app.post("/api/add_learner_courses", (req, res) => {
    const { learner_id, courses } = req.body;
    learnerCourses.push({ learner_id, courses });
    res.json({ message: "Learner courses added successfully" });
});

app.get("/api/get_courses/:learner_id", (req, res) => {
    const learnerId = req.params.learner_id;
    const learnerCoursesData = coursesData.find((lc) => lc.learner_id === parseInt(learnerId));

    if (learnerCoursesData) {
        res.json({ courses: learnerCoursesData.courses });
    } else {
        res.status(404).json({ message: "Courses not found for the learner" });
    }
});

app.get("/api/get_all_courses", (req, res) => {
    res.json({ courses: coursesArray });
});

app.get("/api/get_course/:course_id", (req, res) => {
    const courseId = parseInt(req.params.course_id);
    const course = coursesArray.find((c) => c.course_id === courseId);

    if (course) {
        res.json({ course });
    } else {
        res.status(404).json({ message: "Course not found" });
    }
});
app.get("/api/get_student_courses/:learner_id", (req, res) => {
    const learnerId = req.params.learner_id;

    // Find the courses associated with the learner in coursesData
    const learnerCoursesData = coursesData.find((lc) => lc.learner_id === parseInt(learnerId));

    if (learnerCoursesData) {
        res.json({ courses: learnerCoursesData.courses });
    } else {
        res.status(404).json({ message: "Courses not found for the student" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
