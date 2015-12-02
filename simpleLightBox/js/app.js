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
  //show overlay
  $overlay.show();
  //show img alt text
  var altText = $(this).children("img").attr("alt");
  $caption.text(altText);
});

//hide overlay when you click again
$overlay.click(function() {
  $overlay.hide();
})
