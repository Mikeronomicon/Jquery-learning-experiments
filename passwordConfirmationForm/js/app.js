var $password = $("#password");
var $confirmPassword = $("#confirm_password");

//hide hints when password hits 8 characters
$("form span").hide();

function isPasswordValid() {
  return $password.val().length > 8
}

function arePasswordsMatching() {
  return $password.val() === $confirmPassword.val();
}

function passwordEvent() {
  if (isPasswordValid()) {
    $password.next().hide();
  } else {
    $password.next().show();
  }
}

function confirmPasswordEvent() {
  if (arePasswordsMatching()) {
    $confirmPassword.next().hide();
  } else {
    $confirmPassword.next().show();
  }
};

$password.focus(passwordEvent).keyup(passwordEvent).focus(confirmPasswordEvent)
  .keyup(confirmPasswordEvent);

$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent);
