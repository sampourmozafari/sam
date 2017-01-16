$(document).ready(function() {

  $("a").click(function() {
    $(window).scrollTo(this.hash, 1000);
  });

  $("#hometitle").typeIt({
    speed: 75,
    autoStart: false,
  })
  .tiType("Hello world");

  $("#projectstitle").typeIt({
    speed: 75,
    autoStart: false,
  })
  .tiType("Projects");

  $("#learningtitle").typeIt({
    speed: 75,
    autoStart: false,
  })
  .tiType("Learning");

});
