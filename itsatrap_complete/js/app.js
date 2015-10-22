//long winded version
function showButton() {
	$(".warning").hide().show("slow");
}

$(document).ready(showButton);

//anonymous function version

$(function() {
	$(".warning").hide().show("slow");
});