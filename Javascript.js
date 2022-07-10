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

function showData(){
  let data = [
    {title: 'Episode 1', description: 'Description of episode 1'},
    {title: 'Episode 2', description: 'Description of episode 2'},
    {title: 'Episode 3', description: 'Description of episode 3 but made longer to see how it effects the layout. This should be long enough.'},
  ]
  
  data.forEach(res => {
    let column_div = document.createElement("div");
    column_div.className="col-lg-3";

    let episode_card = document.createElement("div");
    episode_card.className="card";
    episode_card.innerHTML =
    `
      <img class="card-img-top" src="" alt="">

      <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
              ${res.title}
          </p>
          <p class="card-text">
            ${res.description}
          </p>
      </p>
      </div>/
  `
  column_div.appendChild(episode_card);
  
  let container = document.querySelector("#container");
  container.appendChild(column_div);
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
