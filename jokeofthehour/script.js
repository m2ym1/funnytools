const jokeElement = document.getElementById("joke");

function fetchJoke() {
  const apiKey = "YOUR_API_KEY"; // Înlocuiți cu cheia API reală
  const apiUrl = `https://v2.jokeapi.dev/joke/Any?format=txt&blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single&lang=en&apiKey=${apiKey}`;

  fetch(apiUrl)
    .then((response) => response.text())
    .then((joke) => {
      jokeElement.textContent = joke;
    })
    .catch((error) => {
      console.error("Error fetching joke:", error);
    });
}

// Afiseaza o gluma la inceput
fetchJoke();

// Actualizeaza gluma la fiecare ora
setInterval(fetchJoke, 3600000); // 3600000 milisecunde = 1 ora
