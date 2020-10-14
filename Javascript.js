var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

 
// Countdown Timer
// Set the date we're counting down to
// Current not in use
var countDownDate = new Date("Sept 28, 2020 09:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  if(document.getElementById("demo")){
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }
    

}, 1000);

/* Warning for closed events */
$('#warning').click(function (e) {
  e.preventDefault()
  $('#messageWarning').html('<div class="alert alert-danger fade-in"><button type="button" class="close close-alert" data-dismiss="alert" aria-hidden="true">×</button><strong>Alert:</strong> This event has ended. Try another one! :)</div>');
  })

/* Warning for pending events */
$('#pending').click(function (e) {
  e.preventDefault()
  $('#messagePending').html('<div class="alert alert-success fade-in"><button type="button" class="close close-alert" data-dismiss="alert" aria-hidden="true">×</button><strong>Alert:</strong> Event details are pending. Try again later! :)</div>');
  })

  /* More events function */
  function moreFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      document.getElementById("myBtn").classList.remove('fa-arrow-up');
      document.getElementById("myBtn").classList.add('fa-arrow-down');
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      document.getElementById("myBtn").classList.remove('fa-arrow-down');
      document.getElementById("myBtn").classList.add('fa-arrow-up');
      moreText.style.display = "inline";
    }
  } 
