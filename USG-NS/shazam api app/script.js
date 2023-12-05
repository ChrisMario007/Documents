const inputKeywords = document.getElementById("input-keywords");
const submitButton = document.getElementById("submit");
const musicContainer = document.querySelector(".music-container");

submitButton.addEventListener("click", () => {
    getsongData();
});

async function getsongData() {
    const url = `https://shazam.p.rapidapi.com/search?term=${inputKeywords.value}&locale=en-US&offset=0&limit=5`;

    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": "688268f4d0msh69176cddbc5ed7bp1008d5jsn1f6367d6afe9",
            "X-RapidAPI-Host": "shazam.p.rapidapi.com"
        }
    };

    const response = await fetch(url, options);
    const results = await response.json();

    setSongDataDisplay(results);
}

function setSongDataDisplay(results) {
    musicContainer.innerHTML = `
        <div class="container music-card">
            <div class="col">
                <img src="${results.tracks.hits[0].track.images.coverart}" alt="Song Image" class="song-img" id="song-img">
                <h4 id="title">${results.tracks.hits[0].track.title}</h4>
                <a href="${results.tracks.hits[0].track.url}" id="url">${results.tracks.hits[0].track.url}</a>
            </div>
            <hr>
            <div>
                <img src="${results.tracks.hits[0].track.images.background}" alt="Artist Image" class="artist-img" id="artist-img">
                <p id="artist-text">${results.tracks.hits[0].track.subtitle}</p>
            </div>
        </div>
    `;
}
