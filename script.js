async function fetchAnime() {
  const container = document.getElementById("anime-container");

  if (!container) {
    console.error("Container not found!");
    return;
  }

  try {
    const res = await fetch("https://api.jikan.moe/v4/top/anime");
    const data = await res.json();

    container.innerHTML = "";

    data.data.slice(0, 12).forEach(anime => {
      const card = document.createElement("div");
      card.classList.add("anime-card");

      card.innerHTML = `
        <img src="${anime.images.jpg.image_url}" />
        <h3>${anime.title}</h3>
        <p>⭐ ${anime.score || "N/A"}</p>
      `;

      container.appendChild(card);
    });

  } catch (error) {
    console.error(error);
  }
}

fetchAnime();
