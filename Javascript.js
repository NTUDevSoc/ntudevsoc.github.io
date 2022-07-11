// [}EVSOC_ logo on index.html animation 
const codeStrings = [
  `[}EVSOC_`,
  `Code`,
  `Chat`,
  `Game`,
]

function showSeason(item) {
  document.getElementById("dropdownMenu1").innerHTML = item.innerHTML;
  showData();
}

function getSelectedSeason() {
  const season_title = document.getElementById("dropdownMenu1").innerHTML
  let season_number = season_title.split(":")[0]
  season_number = season_number.replace(/\s+/g, '')
  return season_number
}

function readData(){
  const season_number = getSelectedSeason();
  const path = "EpisodeData/" + season_number + ".json"
  return fetch(path).then(function(response) {
    return response.json();
  }).then(function(json) {
    return json;
  });
}

async function showData(){

  let data = await readData() // This returns what looks to be a JSON array

  const row = document.getElementById('row-of-cards');
    if (row !== null) row.remove();
  
  let row_div = document.createElement("div");
  row_div.className="row";
  row_div.id = "row-of-cards" 
  row_div.style.cssText="color: black;"

  data.forEach(res => {
    let column_div = document.createElement("div");
    column_div.className="col-lg-3";

    let episode_card = document.createElement("div");
    episode_card.className="card dnd-card my-5";
    episode_card.innerHTML =
    `
      <img class="card-img-top" src="${res.thumbnail}" alt="">

      <div class="card-body">
          <h5 class="card-title">${res.episodeNumber}. ${res.title}</h5>
          <p class="card-text">
            ${res.description}
          </p>
      </div>
  `
  row_div.appendChild(column_div);
  column_div.appendChild(episode_card);

  let container = document.querySelector("#container");
  container.appendChild(row_div);
  });
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function initRotate(spanElement, period, strings = codeStrings) {
  while(true) {
      for (string of strings) {
          let viewedStr = ""

          // Repeatedly add a char onto the displayed string
          for (char of string.split("")) {
              viewedStr += char
              spanElement.innerHTML = `<span class="wrap">${viewedStr}<span>`;
              await sleep(200 - Math.random() * 100);
          }
          
          await sleep(period);
          
          // Repeatedly "delete" the rightmost char
          for (let i = string.length; i > 0; i--) { 
              spanElement.innerHTML = `<span class="wrap">${string.substring(0, i)}<span>`;
              await sleep(100 - Math.random() * 50);
          }
      }
  }
}

window.onload = function() {
  for (element of document.getElementsByClassName('typewrite')) {
    var period = element.getAttribute('data-period');
    initRotate(element, period);
  }
  
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};


// Warning for closed events 
$('#warning').click(function (e) {
  e.preventDefault()
  $('#messageWarning').html('<div class="alert alert-danger fade-in"><button type="button" class="close close-alert" data-dismiss="alert" aria-hidden="true">×</button><strong>Alert:</strong> This event has ended. Try another one! :)</div>');
  })

// Warning for pending events 
$('#pending').click(function (e) {
  e.preventDefault()
  $('#messagePending').html('<div class="alert alert-success fade-in"><button type="button" class="close close-alert" data-dismiss="alert" aria-hidden="true">×</button><strong>Alert:</strong> Event details are pending. Try again later! :)</div>');
  })
