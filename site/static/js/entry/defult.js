$(function() {
	$(document).on("keypress", "input:not(.allow_submit)", function(event) {
		return event.which !== 13;
	});
});


document.getElementById("email").onkeyup = function() {
	ConfiremEmail();
};

document.getElementById("email_confirem").onkeyup = function() {
	ConfiremEmail();
};

function ConfiremEmail() {
	const email = document.entry.email.value;
	const email_confirem = document.entry.email_confirem.value;
	const feedback_email = document.getElementById("feedback_email");
	const feedback_email_message = document.getElementById(
		"feedback_email_message"
	);

	if (email_confirem && email !== email_confirem) {
		feedback_email_message.innerHTML = "メールアドレスが一致していません";
		feedback_email.classList.remove("d-none");
	} else {
		feedback_email_message.innerHTML = "メールアドレスは必須です";
		feedback_email.classList.add("d-none");
	}
}