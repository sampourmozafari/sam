$(document).ready(function() {

  $("a").click(function() {
    $(window).scrollTo(this.hash, 1000);
  });

  $("#text1").typeIt({
    speed: 50,
    autoStart: false,
    lifeLike: true,
    deleteSpeed: 100,
  })
  .tiType("hello world")
  .tiPause(1000)
  .tiType(", my name is <strong>sam pour mozafari</strong>")
  .tiPause(1000)
  // .tiBreak()
  // .tiPause(250)
  .tiBreak()
  .tiPause(250)
  .tiType("a frontend developer ")
  .tiPause(250)
  .tiType("and ")
  .tiBreak()
  .tiType("graphic designer ")
  .tiPause(250)
  .tiType("from copenhagen")
  .tiPause(300)
  .tiType(".")
  .tiPause(300)
  .tiType(".")
  .tiPause(300)
  .tiType(".");
  // .tiPause(250)
  // .tiBreak()
  // .tiType("<a href='index.html#about'>...read more</a>");

});
