document.addEventListener("DOMContentLoaded", () => {
  fetchTrending();
  fetchTopRated();
});

async function fetchTrending() {
  const container = document.getElementById("trending");

  try {
    const res = await fetch("https://api.jikan.moe/v4/seasons/now");
    const data = await res.json();

    container.innerHTML = "";

    data.data.slice(0, 10).forEach(anime => {
      container.innerHTML += createCard(anime);
    });

  } catch (err) {
    console.error(err);
  }
}

async function fetchTopRated() {
  const container = document.getElementById("top-rated");

  try {
    const res = await fetch("https://api.jikan.moe/v4/top/anime");
    const data = await res.json();

    container.innerHTML = "";

    data.data.slice(0, 10).forEach(anime => {
      container.innerHTML += createCard(anime);
    });

  } catch (err) {
    console.error(err);
  }
}

function createCard(anime) {
  return `
    <div class="anime-card">
      <img src="${anime.images.jpg.image_url}" alt="${anime.title}">
      <h3>${anime.title}</h3>
      <p>⭐ ${anime.score || "N/A"}</p>
    </div>
  `;
}
