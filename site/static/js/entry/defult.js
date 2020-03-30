document.onkeypress = submit_cancel;
function submit_cancel() {
	if (window.event.keyCode == 13) {
		return false;
	}
}