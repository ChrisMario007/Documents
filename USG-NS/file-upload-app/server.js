// server.js

const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "http://localhost:3000", // Update this to match your React app's origin
        methods: ["GET", "POST"],
    },
});
const port = 3001;

// Enable CORS for all routes
app.use(cors());

const folderPath = "/Users/crismario/Desktop/untitled folder";
const filesData = [];

const sendUpdatedFilesData = () => {
    io.emit("updateFiles", filesData.map(file => ({ ...file, isGenerated: true })));
};

// Watcher setup
const chokidar = require("chokidar");
const watcher = chokidar.watch(folderPath);

// Watch for file additions
watcher.on("add", (filePath) => {
    console.log(`File added: ${filePath}`);

    const fileName = path.basename(filePath);
    const stats = fs.statSync(filePath);

    const existingFile = filesData.find((file) => file.name === fileName);

    if (!existingFile) {
        filesData.push({
            name: fileName,
            size: stats.size,
            lastModified: stats.mtime,
            isDeleted: false,
            isGenerated: true, // Add this property
        });

        sendUpdatedFilesData();
    }
});

// Watch for file deletions
watcher.on("unlink", (filePath) => {
    console.log(`File deleted: ${filePath}`);

    const fileName = path.basename(filePath);

    filesData.forEach((file) => {
        if (file.name === fileName) {
            file.isDeleted = true;
        }
    });

    sendUpdatedFilesData();
});

// Serve file content
app.get("/files/:fileName/content", (req, res) => {
    const fileName = req.params.fileName;
    const filePath = path.join(folderPath, fileName);

    try {
        const fileContent = fs.readFileSync(filePath, "utf-8");
        res.json({ content: fileContent });
    } catch (error) {
        console.error("Error reading file content:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.get("/files", (req, res) => {
    res.json(filesData.map(file => ({ ...file, isGenerated: true })));
});

io.on("connection", (socket) => {
    console.log("A client connected");

    // Emit the initial data when a client connects
    socket.emit("updateFiles", filesData.map(file => ({ ...file, isGenerated: true })));
});

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
