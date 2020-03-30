document.getElementById("button_back_input").onclick = function() {
  // ページ切り替え
  const title = document.getElementById("title");
  title.innerHTML = "エントリーホーム";

  const pager_input = document.getElementById("pager_input");
	const pager_verification = document.getElementById("pager_verification");
	pager_input.classList.remove("text-muted");
	pager_input.classList.add("font-weight-bold");
	pager_verification.classList.add("text-muted");
  pager_verification.classList.remove("font-weight-bold");

  const form_input = document.getElementById("form_input");
  const form_verification = document.getElementById("form_verification");
  form_input.classList.remove("d-none");
  form_verification.classList.add("d-none");
};