function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

function searchSongs() {
    const searchInput = document.getElementById("searchInput").value;
    const musicContainer = document.getElementById("musicContainer");
    const loading = document.getElementById("loading");
    const errorMessage = document.getElementById("errorMessage");

    // Reset previous results and messages
    musicContainer.innerHTML = "";
    errorMessage.innerHTML = "";
    loading.style.display = "block";

    // Fetch songs by artist from the API
    fetch(`http://localhost:3000/api/songs/${searchInput}`)
        .then(response => response.json())
        .then(data => {
            loading.style.display = "none";

            if (data.success) {
                // Display songs
                data.data.forEach(song => {
                    const card = document.createElement("div");
                    card.className = "container music-card";

                    card.innerHTML = `
                        <div class="col">
                            <img src="${song.cover_art_link}" alt="Song Image" class="song-img">
                            <h4 id="title">${song.song_title}</h4>
                            <p>${song.album}</p>
                            <p class="artist-text">${song.artist_name}</p>
                        </div>
                    `;

                    musicContainer.appendChild(card);
                });
            } else {
                // Display error message
                errorMessage.innerHTML = "Error fetching songs. Please try again.";
            }
        })
        .catch(error => {
            console.error(error);
            loading.style.display = "none";
            errorMessage.innerHTML = "Error fetching songs. Please try again.";
        });
}
