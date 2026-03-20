async function fetchAnime() {
  try {
    const res = await fetch("https://api.jikan.moe/v4/top/anime");
    const data = await res.json();

    const container = document.getElementById("anime-container");
    container.innerHTML = "";

    data.data.slice(0, 12).forEach(anime => {
      const card = `
        <div class="anime-card">
          <img src="${anime.images.jpg.image_url}" alt="${anime.title}">
          <h3>${anime.title}</h3>
          <p>⭐ ${anime.score || "N/A"}</p>
        </div>
      `;
      container.innerHTML += card;
    });

  } catch (error) {
    console.error("Error fetching anime:", error);
  }
}

fetchAnime();
