document.getElementById("button_back_input").onclick = function() {
  // ページ切り替え
  const title = document.getElementById("title");
  title.innerHTML = "エントリーホーム";

  const pager_verification = document.getElementById("pager_verification");
  pager_verification.classList.remove("circle");
	pager_verification.classList.add("line-circle");


  const form_input = document.getElementById("form_input");
  const form_verification = document.getElementById("form_verification");
  form_input.classList.remove("d-none");
  form_verification.classList.add("d-none");
};