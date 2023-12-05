const express = require('express');
const axios = require('axios');

const app = express();
const port = 3001;

app.get('/shazam-events', async (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://shazam.p.rapidapi.com/shazam-events/list',
        params: {
            artistId: '73406786',
            l: 'en-US',
            from: '2022-12-31',
            limit: '50',
            offset: '0'
        },
        headers: {
            'X-RapidAPI-Key': '94d3a97391mshe78d56b4dc71a60p1ad06cjsnd0ac406731ff',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
