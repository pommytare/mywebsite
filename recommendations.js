// Function to filter movies based on the genre
function filterMovies(genre) {
    // Get all the movie elements
    const movies = document.querySelectorAll('.movie');
    
    // Loop through each movie and hide or show based on the selected genre
    movies.forEach(movie => {
        // Get the genre of the current movie
        const movieGenre = movie.getAttribute('data-genre');
        
        if (genre === 'all' || genre === movieGenre) {
            // If 'all' is selected or the movie's genre matches, show the movie
            movie.style.display = 'block';
        } else {
            // Otherwise, hide the movie
            movie.style.display = 'none';
        }
    });
}
