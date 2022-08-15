  async function showSeason(item) {
    if (item) {
      document.getElementById("seasonDropDownMenu").innerHTML = item.innerHTML;
      clearEpisodes();
    }
    const season_number = getSelectedSeasonNumber();
    const episodeData = await getSeasonContent(season_number);
    displaySeasonContent(episodeData);
  }

  function clearEpisodes() {
    const episodes = document.getElementsByClassName("dnd-column");
    for (var i = episodes.length-1; i >= 0; i--) {
      episodes[i].remove();
    }
  }
  
  function getSelectedSeasonNumber() {
    const season_title = document.getElementById("seasonDropDownMenu").innerHTML
    const season_number = season_title.split(":")[0]
    return season_number.replace(/\s+/g, '')
  }
  
  async function getSeasonContent(season_number) {
    const path = "EpisodeData/" + season_number + ".json"
    const seasonContent = await fetch(path);
    return seasonContent.json();
  }
  
  function displaySeasonContent(episodeData){
    const container = document.getElementById("row-of-cards");
    episodeData.forEach(episode => {
      const column_div = document.createElement("div");
      column_div.className="card dnd-card col-xl-3 col-lg-4 col-md-6";
      column_div.innerHTML =
      `
      <div class="my-5">
        <img class="card-img-top" src="${episode.thumbnail}" alt="Episode ${episode.episodeNumber} thumbnail">
  
        <div class="card-body">
            <h5 class="card-title">${episode.episodeNumber}. ${episode.title}</h5>
            <p class="card-text">${episode.description} </p>
        </div>
        <a href="${episode.link}" class="stretched-link" target="_"></a>
      </div>
      `
      container.appendChild(column_div);
    });
  }