//initially hide spoiler
$(".spoiler span").hide();
//append button to spoiler class
$(".spoiler").append("<button>Reveal Spoiler!</button>");
$("button").click(function() {
  $(".spoiler span").show();
  $(this).remove()
});
