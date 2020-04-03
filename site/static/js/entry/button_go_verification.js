document.getElementById("button_go_verification").onclick = function () {
	const name = document.entry.name.value;
	const name_kn = document.entry.name_kn.value;
	const birth_date = document.entry.birth_date.value;
	const gender = document.entry.gender.value;
	const zip01 = document.entry.zip01.value;
	const pref01 = document.entry.pref01.value;
	const addr01 = document.entry.addr01.value;
	const address_building = document.entry.address_building.value;
	const tel = document.entry.tel.value;
  const email = document.entry.email.value;
  const email_confirem = document.entry.email_confirem.value;  
	const school_name = document.entry.school_name.value;
	const shcool_faculty = document.entry.shcool_faculty.value;
	const school_graduate_month = document.entry.school_graduate_month.value;
	const qualification = document.entry.qualification.value;
	const motivation = document.entry.motivation.value;
	const question = document.entry.question.value;
	const privacy_consent = document.entry.privacy_consent.value;

  const feedback_name = document.getElementById("feedback_name")
  const feedback_name_kn = document.getElementById("feedback_name_kn");
  const feedback_birth_date = document.getElementById("feedback_birth_date");
  const feedback_gender = document.getElementById("feedback_gender");
  const feedback_address = document.getElementById("feedback_address");
  const feedback_tel = document.getElementById("feedback_tel");
  const feedback_email = document.getElementById("feedback_email");
  const feedback_school_name = document.getElementById("feedback_school_name");
  const feedback_shcool_faculty = document.getElementById("feedback_shcool_faculty");
  const feedback_school_graduate_month = document.getElementById("feedback_school_graduate_month");

  // 入力チェック
  let verification_flg = true
  
  if (!name) {
    feedback_name.classList.remove("d-none");
    verification_flg = false;
  } else {
    feedback_name.classList.add("d-none");
  };
  if (!name_kn) {
    feedback_name_kn.classList.remove("d-none");
    verification_flg = false;
  } else {
    feedback_name_kn.classList.add("d-none");
  };
  if (!birth_date) {
    feedback_birth_date.classList.remove("d-none");
    verification_flg = false;
  } else {
    feedback_birth_date.classList.add("d-none");
  };
  if (!gender) {
    feedback_gender.classList.remove("d-none");
    verification_flg = false;
  } else {
    feedback_gender.classList.add("d-none");
  };
  if (!zip01 || !pref01 || !addr01) {
    feedback_address.classList.remove("d-none");
    verification_flg = false;
  } else {
    feedback_address.classList.add("d-none");
  };
  if (!tel) {
    feedback_tel.classList.remove("d-none");
    verification_flg = false;
  } else {
    feedback_tel.classList.add("d-none");
  };
  if (!email || !email_confirem || email !== email_confirem) {
    feedback_email.classList.remove("d-none");
    verification_flg = false;
  } else {
    feedback_email.classList.add("d-none");
  };
  if (!school_name) {
    feedback_school_name.classList.remove("d-none");
    verification_flg = false;
  } else {
    feedback_school_name.classList.add("d-none");
  };
  if (!shcool_faculty) {
    feedback_shcool_faculty.classList.remove("d-none");
    verification_flg = false;
  } else {
    feedback_shcool_faculty.classList.add("d-none");
  };
  if (!school_graduate_month) {
    feedback_school_graduate_month.classList.remove("d-none");
    verification_flg = false;
  } else {
    feedback_school_graduate_month.classList.add("d-none");
  };

  // 確認画面
  if (verification_flg) {
    const t_name = document.getElementById("t_name");
    const t_name_kn = document.getElementById("t_name_kn");
    const t_birth_date = document.getElementById("t_birth_date");
    const t_gender = document.getElementById("t_gender");
    const t_zip01 = document.getElementById("t_zip01");
    const t_pref01 = document.getElementById("t_pref01");
    const t_addr01 = document.getElementById("t_addr01");
    const t_address_building = document.getElementById("t_address_building");
    const t_tel = document.getElementById("t_tel");
    const t_email = document.getElementById("t_email");
    const t_school_name = document.getElementById("t_school_name");
    const t_shcool_faculty = document.getElementById("t_shcool_faculty");
    const t_school_graduate_month = document.getElementById("t_school_graduate_month");
    const t_qualification = document.getElementById("t_qualification");
    const t_motivation = document.getElementById("t_motivation");
		const t_question = document.getElementById("t_question");
		const t_privacy_consent = document.getElementById("t_privacy_consent");

    if (name) t_name.innerHTML = name;
    if (name_kn) t_name_kn.innerHTML = name_kn;
    if (birth_date) t_birth_date.innerHTML = birth_date;
    if (gender) t_gender.innerHTML = gender;
    if (zip01) t_zip01.innerHTML = "&#12306;" + zip01;
    if (pref01) t_pref01.innerHTML = pref01;
    if (addr01) t_addr01.innerHTML = addr01;
    if (address_building) t_address_building.innerHTML = address_building;
    if (tel) t_tel.innerHTML = tel;
    if (email) t_email.innerHTML = email;
    if (school_name) t_school_name.innerHTML = school_name;
    if (shcool_faculty) t_shcool_faculty.innerHTML = shcool_faculty;
    if (school_graduate_month) t_school_graduate_month.innerHTML = school_graduate_month;
    if (qualification) t_qualification.innerHTML = qualification;
    if (motivation) t_motivation.innerHTML = motivation;
		if (question) t_question.innerHTML = question;
		if (privacy_consent) t_privacy_consent.innerHTML = privacy_consent;
  
    // ページ切り替え
    const title = document.getElementById("title");
    title.innerHTML = "確認"

    const pager_input = document.getElementById("pager_input");
		const pager_verification = document.getElementById("pager_verification");
    pager_input.classList.add("text-muted");
    pager_input.classList.remove("font-weight-bold");
    pager_verification.classList.remove("text-muted");    
    pager_verification.classList.add("font-weight-bold");

    const form_input = document.getElementById("form_input");
    const form_verification = document.getElementById("form_verification");
    form_input.classList.add("d-none");
    form_verification.classList.remove("d-none");

    // 後処理
    document.getElementById("feedback_message").classList.add("d-none");
  } else {
    document.getElementById("feedback_message").classList.remove("d-none");
  };
};

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