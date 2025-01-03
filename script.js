
// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Select the form element
  const movieForm = document.getElementById("movie-form");

  // Event listener for form submission
  movieForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get input values
    const title = document.getElementById("movie-title").value.trim();
    const description = document.getElementById("movie-description").value.trim();
    const rating = document.getElementById("movie-rating").value;
    const imageUrl = document.getElementById("movie-image").value.trim();

    // Validate input
    if (!title || !description || !rating || !imageUrl) {
      alert("Please fill out all fields.");
      return;
    }

    // Create a new movie card element
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");

    movieCard.innerHTML = `
      <img src="${imageUrl}" alt="${title}">
      <h3>${title}</h3>
      <p>${description}</p>
      <p>Rating: ${"★".repeat(rating)}${"☆".repeat(5 - rating)}</p>
    `;

    // Append the movie card to the page
    const movieList = document.getElementById("movie-list");
    if (!movieList) {
      const newSection = document.createElement("section");
      newSection.id = "movie-list";
      newSection.innerHTML = `<h2>Your Movies</h2>`;
      document.body.appendChild(newSection);
      newSection.appendChild(movieCard);
    } else {
      movieList.appendChild(movieCard);
    }

    // Reset the form
    movieForm.reset();
  });
});
