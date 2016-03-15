$(document).ready(function() {

  var date = new Date(2016, 11, 07);
  var now = new Date();
  var diff = (date.getTime() / 1000) - (now.getTime() / 1000);

  var clock = $('#countDown').FlipClock(diff, {
    clockFace: 'DailyCounter',
    countdown: true,
    language: 'fr',
  });
  var subject = "";
  $("a[href=#sponsor]").on("click", function(e) {
    e.preventDefault();
    $(".formContact").removeClass("hide");
    subject = "Sponsor Devops-Day";
  });

  $(".cancel").on("click", function(e) {
    e.preventDefault();
    $(".formContact").addClass("hide");
  });

  $(".formContact form").submit(function(event) {
    event.preventDefault();
    var name = $("input[name=name]").val();
    var prenom = $("input[name=prenom]").val();
    var message = $("textarea").val();
    console.log(message);
    var reply = $("input[name=email]").val();
    $("input[type=text]").val("");
    $("textarea").val("");
    $(".formContact").addClass("hide");

    $.ajax({
        method: "POST",
        url: "https://formspree.io/l.bernard@treeptik.fr",
        data: {
          name: name,
          prenom: prenom,
          _subject: subject,
          _replyto: reply,
          message: message
        },
        dataType: "json"
      })
      .done(function() {
        alert("Votre e-mail à bien était envoyé !");
        submenu.fadeOut();

      });
  });


  $('.my-slider').unslider({
    animation: 'fade',
    autoplay: true,
    arrows: false,
    speed: 2000, //  The speed to animate each slide (in milliseconds)
    delay: 3000, //  The delay between slide animations (in milliseconds)
    complete: function() {}, //  A function that gets called after every slide animation
    keys: true, //  Enable keyboard (left, right) arrow shortcuts
    dots: true, //  Display dot navigation
    fluid: true //
  });


});
