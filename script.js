function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

const key = getQueryParam("key");
const expiry = parseInt(getQueryParam("expiry"));
const now = Date.now();

const firebaseBaseUrl = "https://pamais-server-default-rtdb.asia-southeast1.firebasedatabase.app/";

document.getElementById("regForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  if (!key || now > expiry) {
    alert("🔒 Link is invalid or expired.");
    return;
  }

  const formData = new FormData(e.target);
  const data = {
    kName: formData.get("txt_kName"),
    eName: formData.get("txt_eName"),
    gender: formData.get("sfComboBox_gender"),
    dob: formData.get("sfDateValue_dob"),
    studentPhone: formData.get("txt_student_phone"),
    previousSchool: formData.get("txt_previous_school"),

    fatherName: formData.get("txt_father_name"),
    fatherPhone: formData.get("txt_father_phone"),
    fatherJob: formData.get("txt_father_job"),
    motherName: formData.get("txt_mother_name"),
    motherPhone: formData.get("txt_mother_phone"),
    motherJob: formData.get("txt_mother_job"),

    province: formData.get("sfComboBox_parent_province"),
    district: formData.get("sfComboBox_parent_district"),
    commune: formData.get("sfComboBox_parent_commune"),
    village: formData.get("sfComboBox_parent_village"),
    email: formData.get("f_email"),

    timestamp: new Date().toISOString()
  };

  try {
    const response = await fetch(`${firebaseBaseUrl}${key}.json`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert("✅ Submitted successfully!");
      window.location.href = "https://facebook.com/pamainternationalschool";
    } else {
      alert("❌ Submission failed.");
    }
  } catch (err) {
    alert("⚠️ Error: " + err.message);
  }
});
