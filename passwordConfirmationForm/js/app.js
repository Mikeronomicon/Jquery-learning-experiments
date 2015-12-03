//hide hints when password hits 8 characters
$("form span").hide();

function passwordEvent() {
  if ($(this).val().length > 8) {
    $(this).next().hide();
  } else {
    $(this).next().show();
  }
}

$("#password").focus(passwordEvent).keyup(function() {

})
