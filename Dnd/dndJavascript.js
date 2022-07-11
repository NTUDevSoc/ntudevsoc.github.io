function showSeason(item) {
    document.getElementById("dropdownMenu1").innerHTML = item.innerHTML;
    displaySeasonContent();
  }
  
  function getSelectedSeasonNumber() {
    const season_title = document.getElementById("dropdownMenu1").innerHTML
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
    const row = document.getElementById('row-of-cards');
    if (row !== null) row.remove();  
  }
  
  async function displaySeasonContent(){
    clearEpisodes();
    const row_div = document.createElement("div");
    row_div.className="row";
    row_div.id = "row-of-cards" 
    row_div.style.cssText="color: black;"
  
    const data = await getSeasonContent();
    data.forEach(res => {
      const column_div = document.createElement("div");
      column_div.className="col-lg-3 col-md-6";
      column_div.innerHTML =
      `
      <div class="dnd-card my-5">
        <img class="card-img-top" src="${res.thumbnail}" alt="thumbnail">
  
        <div class="card-body">
            <h5 class="card-title">${res.episodeNumber}. ${res.title}</h5>
            <p class="card-text">${res.description} </p>
        </div>
      </div>
      `
      row_div.appendChild(column_div);
  
      const container = document.querySelector("#container");
      container.appendChild(row_div);
    });
  }