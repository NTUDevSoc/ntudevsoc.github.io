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


async function useJsonData() {
    fetch("ImageData.json")
        .then(response => response.json())
        .then(json => {
            // Committee
            json.Committee.forEach(member => {
                //creates html elements with classes and etc
                console.log(`${member.Name} - ${member.About}`);
                const MainUserContainer = document.getElementById("imageContainer");

                const ImageContainer = document.createElement("div");
                ImageContainer.classList.add("col-lg-3", "my-2")

                const PersonBox = document.createElement("div");
                PersonBox.classList.add("bg-custom", "p-3", "text-center", "rounded", "box");

                const Picture = document.createElement("img");
                Picture.classList.add("img-responsive", "rounded-circle");
                Picture.src = member.Image;
                Picture.width = "90";
                Picture.height = "90";

                const Name = document.createElement("h2");
                Name.classList.add("mt-3", "name");
                Name.textContent = member.Name;

                const Course = document.createElement("span");
                Course.classList.add("work", "d-block");
                Course.textContent = member.Course;

                const br = document.createElement("br");

                const About = document.createElement("div")
                About.classList.add("mt-4", "about");

                const span = document.createElement("span");
                const strong = document.createElement("strong");
                strong.textContent = "About & Interests:";
                const br2 = document.createElement("br");

                span.append(strong);
                span.append(br2);
                span.append(member.About);

                const LinkBox = document.createElement("div");
                LinkBox.classList.add("mt-4");

                const link = document.createElement("a");
                link.href = member.Link;
                link.target = "_blank";

                const ProfileLinkText = document.createElement("h6");
                ProfileLinkText.textContent = "View Profile";

                //append all elements together to display
                link.appendChild(ProfileLinkText);
                LinkBox.appendChild(link);

                About.appendChild(span);

                PersonBox.appendChild(Picture);
                PersonBox.appendChild(Name);
                PersonBox.appendChild(Course);
                PersonBox.appendChild(br);
                PersonBox.appendChild(About);
                PersonBox.appendChild(LinkBox);

                ImageContainer.appendChild(PersonBox);

                MainUserContainer.appendChild(ImageContainer)
            });

            // Events
            json.Events.forEach(event => {
                console.log(`${event.Name} @ ${event.Time} in ${event.Place}`);
                const MainEventContainer = document.getElementById("imageContainer2");

                const ImageContainer = document.createElement("div");
                ImageContainer.classList.add("row", "mt-4", "mb-4", "mx-4", "justify-content-center");

                const ImageContainer2 = document.createElement("div");
                ImageContainer2.classList.add("col-lg-4", "my-2")

                const ImageContainer3 = document.createElement("div");
                ImageContainer3.classList.add("card", "card-shadow");

                const Picture = document.createElement("img");
                Picture.classList.add("img-responsive", "rounded-circle");
                Picture.src = Event.Image;

                const CardContainer = document.createElement("div");
                CardContainer.classList.add("card-body");

                const Title = document.createElement("h5");
                Title.classList.add("card-title");
                Title.textContent = event.Name;

                const Description = document.createElement("p");
                Description.classList.add("card-text");
                Description.textContent = event.About;

                const Time = document.createElement("p");
                Time.classList.add("card-text", "text-right");
                Time.textContent = event.Time;

                const Place = document.createElement("p");
                Place.classList.add("card-text", "text-right");
                Place.textContent = event.Place;

                const link = document.createElement("a");
                link.href = event.Link;
                link.target = "_blank";

                CardContainer.appendChild(Title);
                CardContainer.appendChild(Description);
                CardContainer.appendChild(Time);
                CardContainer.appendChild(Place);
                CardContainer.appendChild(link);

                ImageContainer.appendChild(Picture);
                ImageContainer3.appendChild(CardContainer);

                ImageContainer2.appendChild(ImageContainer3);

                ImageContainer.appendChild(ImageContainer2);

                MainEventContainer.appendChild(ImageContainer);
            });
        })
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
        field.innerHTML += (curDate-1) + "-" + curDate;
    }
    // If after september then current year then next year
    else
        field.innerHTML += curDate + "-" + (parseInt(curDate)+1);

    useJsonData();
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