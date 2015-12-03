//create a select menu and append to #menu
var $select = $("<select></select>");

//create and append select menu
$("#menu").append($select);

//cycle over menu links
$("#menu a").each(function() {
  var $anchor = $(this);
  //create an option
  var $option = $("<option></option>");
  //option's value is the href
  $option.val($anchor.attr("href"));
  //option's text is title of link
  $option.text($anchor.text());
  //append option to select menu
  $select.append($option);
});
