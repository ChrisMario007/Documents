const express = require("express");
const fs = require("fs");
const app = express();
const chokidar = require("chokidar");
const cors = require("cors");
const path = require("path");

app.use(express.json());
app.use(cors());

const port = 3001;

const sourceFolder = "/Users/crismario/Desktop/untitled folder";
const destinationFolder = "/Users/crismario/Desktop/receiver";

let fileChanges = [];
let idCounter = 1;

// Flag to track if the file was consumed
let fileConsumed = false;

const watcher = chokidar.watch(sourceFolder, {
    ignored: /^\./,
    persistent: true,
});

watcher
    .on("add", (filePath) => {
        console.log(`File ${filePath} has been added.`);

        fs.readFile(filePath, "utf8", (err, content) => {
            if (err) {
                console.error("Error reading file content:", err);
                // Handle the error as needed
                return;
            } else {
                console.log(`File content:\n${content}`);
            }

            fileChanges = [
                ...fileChanges,
                {
                    content: content,
                    id: idCounter++,
                    type: "PENDING",
                    path: filePath,
                    timestamp: new Date().toLocaleTimeString(),
                    app: "file-upload-app",
                },
            ];

            // Set a timeout before moving the file
            setTimeout(() => {
                if (!fileConsumed) {
                    moveFile(filePath, destinationFolder);
                }
            }, 10000); // 10 seconds delay before moving the file
        });
    })

    .on("unlink", (filePath) => {
        // Check if the file was consumed before considering it as deleted
        if (!fileConsumed) {
            console.log(`File ${filePath} has been removed.`);
            // Update local variable with timestamp and third-party app
            fileChanges = [
                ...fileChanges,
                { id: idCounter++, type: "DELETED", path: filePath, timestamp: new Date().toISOString(), app: "file-upload-app" },
            ];
        }
    });

// Function to move a file from source to destination folder
function moveFile(sourcePath, destinationFolder) {
    const fileName = path.basename(sourcePath);
    const destinationPath = path.join(destinationFolder, fileName);

    console.log(`Attempting to move file from ${sourcePath} to ${destinationPath}`);

    // Set a timeout before moving the file
    setTimeout(() => {
        fs.rename(sourcePath, destinationPath, (err) => {
            if (err) {
                console.error("Error moving file:", err);
                // Add more detailed error logging
                fileChanges = [
                    ...fileChanges,
                    { id: idCounter++, type: "ERROR", path: sourcePath, timestamp: new Date().toLocaleTimeString(), app: "file-upload-app", error: err.message },
                ];
                return;
            }

            console.log(`File ${sourcePath} has been moved to ${destinationPath}.`);
            // Update file changes with consumption information
            fileChanges = [
                ...fileChanges,
                { id: idCounter++, type: "CONSUMED", path: sourcePath, timestamp: new Date().toLocaleTimeString(), app: "file-upload-app" },
            ];
            fileConsumed = true;
        });
    }, 10000); // 10 seconds delay before moving the file
}

// Schedule the file movement every day from 8 am to 1:59:59 pm
setInterval(() => {
    // Reset the consumed flag at the beginning of the interval
    fileConsumed = false;

    const now = new Date();
    const dayOfWeek = now.getDay(); // 0 is Sunday, 1 is Monday, etc.

    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        // Not a weekend
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();
        const currentSecond = now.getSeconds();

        if (currentHour >= 8 && currentHour < 20) {
            // Move files to destination folder during 8 am to 1:59:59 pm
            fs.readdir(sourceFolder, (err, files) => {
                if (err) {
                    console.error("Error reading source folder:", err);
                    return;
                }

                files.forEach((file) => {
                    const filePath = path.join(sourceFolder, file);
                    moveFile(filePath, destinationFolder);
                });
            });
        }
    }
}, 1000);

app.get("/fileChanges", (req, res) => {
    res.json({ fileChanges });
});

app.get("/fileContent", (req, res) => {
    const filePath = req.query.path;

    fs.readFile(filePath, "utf8", (err, content) => {
        if (err) {
            console.error("Error reading file content:", err);
            res.status(500).json({ error: "Error reading file content" });
        } else {
            res.status(200).json({ content });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
