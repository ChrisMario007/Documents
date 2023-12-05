const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Enable CORS
app.use(cors());
app.use(bodyParser.json());

// Create a MySQL connection pool
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'music_database',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Middleware to parse JSON requests
app.use(express.json());

// API endpoint to get songs by artist
app.get('/api/songs/:artistName', async (req, res) => {
    try {
        const artistName = req.params.artistName;

        // Use the connection pool to query the database
        const [rows, fields] = await pool.query(
            'SELECT songs.song_title, songs.album, songs.cover_art_link, artists.artist_name FROM songs JOIN artists ON songs.artist_id = artists.id WHERE artists.artist_name = ? LIMIT 5',
            [artistName]
        );

        // Send the data as JSON
        res.json({
            success: true,
            data: rows
        });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({
            success: false,
            error: 'Error fetching songs',
            details: error.message
        });

    }
});

// API endpoint to add a new song
app.post('/api/songs', async (req, res) => {
    try {
        const { songTitle, duration, album, coverArtLink, artistId } = req.body;

        // Use the connection pool to insert a new song into the database
        const [result] = await pool.query(
            'INSERT INTO songs (song_title, duration, album, cover_art_link, artist_id) VALUES (?, ?, ?, ?, ?)',
            [songTitle, duration, album, coverArtLink, artistId]
        );

        // Send a success response
        res.json({
            success: true,
            data: result.insertId
        });
    } catch (error) {
        console.error(error);
        // Send an error response
        res.status(500).json({
            success: false,
            error: 'Error adding the song',
            details: error.message
        });
    }
});



// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
