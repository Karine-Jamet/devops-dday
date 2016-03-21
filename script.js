$(document).ready(function() {

  var date = new Date(2016, 10, 07);
  var now = new Date();
  var diff = (date.getTime() / 1000) - (now.getTime() / 1000);

  var clock = $('#countDown').FlipClock(diff, {
    clockFace: 'DailyCounter',
    countdown: true,
    language: 'fr',
  });
  var subject = "";

$("a[href=contact]").on("click", function(e) {
  e.preventDefault();
  $(".formContact").removeClass("hide");
  subject = "Inscription Docker";
});


  $(".cancel").on("click", function(e) {
    e.preventDefault();
    $(".formContact").addClass("hide");
  });

  $(".formContact form").submit(function(event) {
    event.preventDefault();
    var name = $("input[name=name]").val();
    var prenom = $("input[name=prenom]").val();
    var dateFrom = $("input[name=date]").val();
    var message = $("textarea").val();
    var entreprise = $("input[name=entreprise]").val();
    var reply = $("input[name=email]").val();


    $("input[type=text]").val("");
    $("input[name=email]").val("");
    $("textarea").val("");
    $("input[name=date]").val("");
    $("input[name=entreprise]").val("");
    $(".formContact").addClass("hide");


    $.ajax({
        method: "POST",
        url: "https://formspree.io/contact@treeptik.fr",
        data: {
          name: name,
          prenom: prenom,
          entreprise : entreprise,
          date : dateFrom,
          _subject: subject,
          _replyto: reply,
          message: message
        },
        dataType: "json"
      })
      .done(function() {
        alert("Votre e-mail à bien était envoyé !");
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
