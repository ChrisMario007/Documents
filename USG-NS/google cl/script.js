// Sample array of suggestions (replace this with your dynamic data)
const suggestionsArray = ["Google", "Gmail", "Google Maps", "Google Drive", "Google Calendar"];

document.getElementById("settingsLink").addEventListener("click", function () {
    var popup = document.getElementById("popupContainer");
    if (popup.style.display === "block") {
        popup.style.display = "none";
    } else {
        popup.style.display = "block";
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.querySelector(".search-bar");
    const searchInput = document.getElementById("searchInput");
    const dropdownContent = document.getElementById("dropdownContent");
    const suggestionList = document.getElementById("suggestionList");
    const darkModeToggle = document.getElementById("darkModeToggle");
    const buttonsContainer = document.querySelector(".buttons-container");

    // Variable to track the dropdown state
    let isDropdownOpen = false;

    // Function to generate suggestion list
    function generateSuggestions(input) {
        const filteredSuggestions = suggestionsArray.filter(suggestion =>
            suggestion.toLowerCase().includes(input.toLowerCase())
        );

        // Clear previous suggestions
        suggestionList.innerHTML = "";

        // Add new suggestions to the list
        filteredSuggestions.forEach(suggestion => {
            const li = document.createElement("li");
            li.textContent = suggestion;
            suggestionList.appendChild(li);
        });

        // Show the dropdown if there are suggestions
        dropdownContent.style.display = filteredSuggestions.length > 0 ? "block" : "none";
        // Update the dropdown state
        isDropdownOpen = filteredSuggestions.length > 0;

        // Update the border-radius based on the dropdown state
        updateBorderRadius();
    }

    // Function to update border-radius based on dropdown state
    function updateBorderRadius() {
        searchBar.style.borderRadius = isDropdownOpen ? "24px 24px 0 0" : "24px";
    }

    // Event listeners
    searchInput.addEventListener("input", function () {
        const inputValue = searchInput.value.trim();
        generateSuggestions(inputValue);
    });

    searchInput.addEventListener("focus", function () {
        // Update the border-radius based on the dropdown state
        updateBorderRadius();
    });

    searchInput.addEventListener("blur", function () {
        // Delay hiding the dropdown to allow for click events on suggestions
        setTimeout(() => {
            dropdownContent.style.display = "none";
            searchBar.style.borderRadius = "24px";
            // Update the dropdown state
            isDropdownOpen = false;
        }, 200);
    });

    // Event delegation for handling suggestion clicks
    suggestionList.addEventListener("click", function (event) {
        if (event.target.tagName === "LI") {
            searchInput.value = event.target.textContent;
            dropdownContent.style.display = "none";
            // Update the dropdown state
            isDropdownOpen = false;
        }
    });

    // Dark mode toggle functionality
    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        buttonsContainer.classList.toggle("dark-mode");
    });
});
