var $password = $("#password");
var $confirmPassword = $("#confirm_password");

//hide hints when password hits 8 characters
$("form span").hide();

function passwordEvent() {
  if ($password.val().length > 8) {
    $password.next().hide();
  } else {
    $password.next().show();
  }
}

function confirmPasswordEvent() {
  if ($password.val() === $confirmPassword.val()) {
    $confirmPassword.next().hide();
  } else {
    $confirmPassword.next().show();
  }
};

$password.focus(passwordEvent).keyup(passwordEvent).focus(confirmPasswordEvent)
  .keyup(confirmPasswordEvent);

$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent);
