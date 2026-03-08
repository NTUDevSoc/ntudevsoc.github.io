// [}EVSOC_ logo on index.html animation 
const codeStrings = [
  `[}EVSOC_`,
  `Code`,
  `Chat`,
  `Game`,
]

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


  // Auto change current date based on year and month
  const field = document.getElementById("curAcademicYr");
  const curDate = (((new Date()).getFullYear()).toString()).slice(-2);
  // If below september then last year and current year
  if (new Date().getMonth() < 9) {
      field.innerHTML += (curDate-1) + " " + curDate;
  }
  // If after september then current year then next year
  else
      field.innerHTML += curDate + " " + (parseInt(curDate)+1);
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




async function putCurAcademicYr(){
    const field = document.getElementById("curAcademicYr");
    field.innerHTML = (new Date()).slice(-2);
}