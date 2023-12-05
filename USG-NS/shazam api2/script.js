async function search() {
    const searchInput = document.getElementById("searchInput").value;
    const musicContainer = document.getElementById("musicContainer");
    const loadingIndicator = document.getElementById("loading");
    const errorMessage = document.getElementById("errorMessage");

    if (searchInput.trim() !== "") {
        try {
            loadingIndicator.style.display = "block";
            errorMessage.innerHTML = "";

            const response = await fetchShazamData(searchInput, 12);
            displayResults(response, musicContainer);
        } catch (error) {
            console.error("Error fetching data:", error);
            errorMessage.innerHTML = "An error occurred. Please try again.";
        } finally {
            loadingIndicator.style.display = "none";
        }
    } else {
        musicContainer.innerHTML = "";
        errorMessage.innerHTML = "Please enter a search term.";
    }
}

async function fetchShazamData(searchTerm, limit) {
    const url = `https://shazam.p.rapidapi.com/search?term=${searchTerm}&limit=${limit}`;
    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": "94d3a97391mshe78d56b4dc71a60p1ad06cjsnd0ac406731ff",
            "X-RapidAPI-Host": "shazam.p.rapidapi.com"
        }
    };

    const response = await fetch(url, options);
    return response.json();
}

function displayResults(response, container) {
    container.innerHTML = "";

    if (response.tracks && response.tracks.hits && response.tracks.hits.length > 0) {
        const tracks = response.tracks.hits;

        tracks.forEach((track, index) => {
            const musicCard = document.createElement("div");
            musicCard.className = "music-card";
            musicCard.innerHTML = `
                <img src="${track.track.images.coverart}" alt="Song Image" class="song-img">
                <h4>${track.track.title}</h4>
                <p class="artist-text">Artist: ${track.track.subtitle}</p>
                <a href="${track.track.url}" target="_blank">Shazam Link</a>
            `;

            container.appendChild(musicCard);

            // Add a line break after every 2 cards
            if ((index + 1) % 2 === 0) {
                container.appendChild(document.createElement("br"));
            }
        });
    } else {
        container.innerHTML = "<p>No results found.</p>";
    }
}
// Add this function to script.js for dark mode functionality
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}
