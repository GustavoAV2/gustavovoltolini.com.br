// Retrieve DOM elements
const movieTitleInput = document.getElementById("movieTitle");
const listTypeSelect = document.getElementById("listType");
const toWatchList = document.getElementById("toWatchList");
const watchedList = document.getElementById("watchedList");

// Initialize arrays to store movies
let moviesToWatch = [];
let watchedMovies = [];

// Add movie to appropriate list based on selection
function addMovieToList() {
  const movieTitle = movieTitleInput.value;
  const listType = listTypeSelect.value;
  
  if (movieTitle.length > 1){
    if (listType === "toWatch") {
      moviesToWatch.push(movieTitle);
      updateToWatchList();
    } else if (listType === "watched") {
      watchedMovies.push(movieTitle);
      updateWatchedList();
    }
  }
  
  // Clear input field
  movieTitleInput.value = "";
}

// Update "To be watched" list in DOM and localStorage
function updateToWatchList() {
  // Clear current list in DOM
  toWatchList.innerHTML = "";
  
  // Loop through movies and create list item for each
  for (let i = 0; i < moviesToWatch.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = moviesToWatch[i];
    toWatchList.appendChild(listItem);
  }
  
  // Store updated list in localStorage
  localStorage.setItem("moviesToWatch", JSON.stringify(moviesToWatch));
}

// Update "Watched" list in DOM
function updateWatchedList() {
  // Clear current list in DOM
  watchedList.innerHTML = "";
  
  // Loop through movies and create list item for each
  for (let i = 0; i < watchedMovies.length; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = watchedMovies[i];
    watchedList.appendChild(listItem);
  }
}

// Load movies from localStorage on page load
function loadMovieList() {
  const moviesToWatchFromStorage = localStorage.getItem("moviesToWatch");
  if (moviesToWatchFromStorage) {
    moviesToWatch = JSON.parse(moviesToWatchFromStorage);
    updateToWatchList();
  }
}

// Attach event listener to "Add" button
const addButton = document.getElementById("addButton");
addButton.addEventListener("click", addMovieToList);

// Load movie list on page load
window.addEventListener("load", loadMovieList);