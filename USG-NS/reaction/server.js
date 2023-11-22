const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const storage = multer.diskStorage({
    destination: '/Users/crismario/Desktop/untitled folder',
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const upload = multer({ storage: storage });

const files = [];

app.post('/upload', upload.single('file'), (req, res) => {
    try {
        if (!req.file) {
            throw new Error('No file provided');
        }

        const fileName = req.file.originalname;
        const fileExtension = fileName.split('.').pop().toLowerCase();

        if (fileExtension !== 'ini' && fileExtension !== 'bat') {
            throw new Error('Invalid file type. Only INI and BAT files are allowed.');
        }

        const fileInfo = {
            name: fileName,
            timestamp: new Date(),
            status: 'Pending',
        };
        files.push(fileInfo);

        res.json(fileInfo);
    } catch (error) {
        console.error('Error uploading file:', error.message);
        res.status(400).json({ error: error.message });
    }
});

app.get('/files', (req, res) => {
    res.json(files);
});

app.get('/files/:fileName', (req, res) => {
    const fileName = req.params.fileName;
    const file = files.find(f => f.name === fileName);

    if (file) {
        res.json(file);
    } else {
        res.status(404).json({ error: 'File not found' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
