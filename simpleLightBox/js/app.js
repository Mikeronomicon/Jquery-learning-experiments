var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $caption = $('<p></p>');

//add image to overlay
$overlay.append($image);

//show img alt text in overlay
$overlay.append($caption);

//append overlay
$("body").append($overlay);

//capture click event on a link to an image
$("#imageGallery a").click(function(event) {
  event.preventDefault();
  var imagePath = $(this).attr("href");
  //update overlay with the selected image
  $image.attr("src", imagePath);

  $overlay.show();
});

//hide overlay when you click again
$overlay.click(function() {
  $overlay.hide();
})
