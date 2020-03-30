document.getElementById("button_go_verification").onclick = function() {
	const name = document.entry.name.value;
	const name_kn = document.entry.name_kn.value;
	const birth_y = document.entry.birth_y.value;
	const birth_m = document.entry.birth_m.value;
	const birth_d = document.entry.birth_d.value;
	const gender = document.entry.gender.value;
	const address_code = document.entry.address_code.value;
	const address_ken = document.entry.address_ken.value;
	const address_city = document.entry.address_city.value;
	const address_building = document.entry.address_building.value;
	const phone_number = document.entry.phone_number.value;
	const email = document.entry.email.value;
	const school_name = document.entry.school_name.value;
	const shcool_faculty = document.entry.shcool_faculty.value;
	const school_graduate_y = document.entry.school_graduate_y.value;
	const school_graduate_m = document.entry.school_graduate_m.value;
	const qualification = document.entry.qualification.value;
	const motivation = document.entry.motivation.value;
	const question = document.entry.question.value;

	const t_name = document.getElementById("t_name");
	const t_name_kn = document.getElementById("t_name_kn");
	const t_birth_ymd = document.getElementById("t_birth_ymd");
	const t_gender = document.getElementById("t_gender");
	const t_address_code = document.getElementById("t_address_code");
	const t_address_ken = document.getElementById("t_address_ken");
	const t_address_city = document.getElementById("t_address_city");
	const t_address_building = document.getElementById("t_address_building");
	const t_phone_number = document.getElementById("t_phone_number");
	const t_email = document.getElementById("t_email");
	const t_school_name = document.getElementById("t_school_name");
	const t_shcool_faculty = document.getElementById("t_shcool_faculty");
	const t_school_graduate_ym = document.getElementById("t_school_graduate_ym");
	const t_qualification = document.getElementById("t_qualification");
	const t_motivation = document.getElementById("t_motivation");
	const t_question = document.getElementById("t_question");

	t_name.innerHTML = name;
	t_name_kn.innerHTML = name_kn;
	t_birth_ymd.innerHTML = birth_y + "/" + birth_m + "/" + birth_d;
	t_gender.innerHTML = gender;
	t_address_code.innerHTML = address_code;
	t_address_ken.innerHTML = address_ken;
	t_address_city.innerHTML = address_city;
	t_address_building.innerHTML = address_building;
	t_phone_number.innerHTML = phone_number;
	t_email.innerHTML = email;
	t_school_name.innerHTML = school_name;
	t_shcool_faculty.innerHTML = shcool_faculty;
	t_school_graduate_ym.innerHTML = school_graduate_y + "/" + school_graduate_m;
	t_qualification.innerHTML = qualification;
	t_motivation.innerHTML = motivation;
  t_question.innerHTML = question;
  
  const form_input = document.getElementById("form_input");
  const form_verification = document.getElementById("form_verification");

  form_input.classList.add("d-none");
  form_verification.classList.remove("d-none");

};
