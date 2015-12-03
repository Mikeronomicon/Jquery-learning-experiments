//create a select menu and append to #menu
var $select = $("<select></select>");

//create and append select menu
$("#menu").append($select);

//cycle over menu links
$("#menu a").each(function() {
  var $anchor = $(this);
  //create an option
  var $option = $("<option></option>");
  //deal with selected options
  if ($anchor.parent().hasClass("selected")) {
    $option.prop("selected", true);
  }
  //option's value is the href
  $option.val($anchor.attr("href"));
  //option's text is title of link
  $option.text($anchor.text());
  //append option to select menu
  $select.append($option);
});

//bind change listener to selection
$select.change(function() {
  window.location = $select.val();
})

// this is the dumb way to navigate
//create button
// var $button = $("<button>Go</button>");
// $("#menu").append($button);
// //bind click to button
// $button.click(function() {
//   //go to select's location
//   window.location = $select.val();
// });
