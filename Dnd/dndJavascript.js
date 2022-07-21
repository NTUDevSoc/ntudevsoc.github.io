function showSeason(item) {
    document.getElementById("seasonDropDownMenu").innerHTML = item.innerHTML;
    clearEpisodes();
    displaySeasonContent();
  }
  
  function getSelectedSeasonNumber() {
    const season_title = document.getElementById("seasonDropDownMenu").innerHTML
    const season_number = season_title.split(":")[0]
    return season_number.replace(/\s+/g, '')
  }
  
  function getSeasonContent() {
    const season_number = getSelectedSeasonNumber();
    const path = "EpisodeData/" + season_number + ".json"
    return fetch(path).then(function(response) {
      return response.json();
    });
  }
  
  function clearEpisodes() {
    const episodes = document.querySelectorAll('[id=dnd-episode]');
    episodes.forEach(episode => episode.remove())
  }
  
  async function displaySeasonContent(){
    const data = await getSeasonContent();
    data.forEach(res => {
      const column_div = document.createElement("div");
      column_div.className="col-xl-3 col-lg-4 col-md-6";
      column_div.innerHTML =
      `
      <div class="dnd-card my-5" id="dnd-episode">
        <img class="card-img-top" src="${res.thumbnail}" alt="thumbnail">
  
        <div class="card-body">
            <h5 class="card-title">${res.episodeNumber}. ${res.title}</h5>
            <p class="card-text">${res.description} </p>
        </div>
        <a href="${res.link}" class="stretched-link" target="_"></a>
      </div>
      `
      const container = document.getElementById("row-of-cards");
      container.appendChild(column_div);
    });
  }