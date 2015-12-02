var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
//append overlay
$("body").append($overlay);

//capture click event on a link to an image
$("#imageGallery a").click(function(event) {
  event.preventDefault();
  var href = $(this).attr("href");
  $overlay.show();
});
