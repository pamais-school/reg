let isNewStudent = false;
let currentLang = "en";

const translations = {
    en: {
        regFormTitle: "QUICK REGISTRATION",
        headerSubtitle: "Please enter student and parent details.",
        welcome: "🎓 Welcome to Our School!",
        timeRemaining: "Time Remaining:",
        alreadyRegistered: "Have you already registered with us before?",
        yes: "Yes",
        no: "No",
        followUs: "Follow Us On:",
        studentInfo: "Student Information",
        studentPobInfo: "Student Place of Birth",
        fatherInfo: "Father Information",
        motherInfo: "Mother Information",
        addressInfo: "Address Information",
        khmerName: "Name in Khmer",
        englishName: "Name in English",
        gender: "Gender",
        selectGender: "Select Gender",
        male: "Male",
        female: "Female",
        dob: "Date of Birth",
        studentPhone: "Phone number",
        previousSchool: "Previous School",
        sameAsParentAddress: "Student's place of birth is the same as the parent's address.",
        fatherName: "Father's Name",
        fatherPhone: "Father's Phone",
        fatherJob: "Father's Job",
        motherName: "Mother's Name",
        motherPhone: "Mother's Phone",
        motherJob: "Mother's Job",
        province: "Province",
        district: "District",
        commune: "Commune",
        village: "Village",
        email: "Email",
        agreeToTerms: 'I agree to all the term and condition of PAMAIS <a href="https://sites.google.com/view/pamais-student-internal-rule" target="_blank">Student Internal Rule</a> and <a href="https://sites.google.com/view/pamais-parent-handbook" target="_blank">PAMAIS Parent Handbook</a>',
        submit: "Submit Registration",
        linkInvalidHeading: "Link Invalid or Expired",
        linkInvalidText: "This registration link is invalid, expired, or has already been used. Please contact us if you believe this is an error.",
        kNamePlaceholder: "Enter student name",
        eNamePlaceholder: "Enter student name",
        phonePlaceholder: "Enter phone number",
        schoolPlaceholder: "Enter school name",
        namePlaceholder: "Enter full name",
        jobPlaceholder: "Enter job title",
        provincePlaceholder: "Enter province",
        districtPlaceholder: "Enter district",
        communePlaceholder: "Enter commune",
        villagePlaceholder: "Enter village",
        emailPlaceholder: "Enter email address",
        kNameInvalid: "Must be Khmer letters with at least one space.",
        eNameInvalid: "Must be English letters with at least one space.",
        requiredField: "This field is required.",
        parentInfoMissing: "Please provide complete info (Name and Phone) for at least one parent.",
        addressInfoMissing: "Please enter Province, District, and Commune.",
        studentPobInfoMissing: "Please enter student's POB Province, District, and Commune.",
        submitSuccess: "Your registration was submitted successfully.",
        submitError: "There was an error submitting the form: ",
        successTitle: "Success!",
        redirecting: "You will be redirected to our Facebook page shortly...",
        linkUsed: "This registration link has already been used.",
        linkCheckError: "Could not validate the link. Please try again later.",
        submitting: "Submitting...",
    },
    km: {
        regFormTitle: "សំណុំបែបបទចុះឈ្មោះរហ័ស",
        headerSubtitle: "សូមបញ្ចូលព័ត៌មានសិស្ស និងប៉ាម៉ាក់/អាពាព្យាបាល។",
        welcome: "🎓 សូមស្វាគមន៍មកកាន់សាលារបស់យើង!",
        timeRemaining: "រយៈពេលនៅសល់៖",
        alreadyRegistered: "តើអ្នកធ្លាប់បានចុះឈ្មោះជាមួយយើងពីមុនទេ?",
        yes: "បាទ/ចាស",
        no: "ទេ",
        followUs: "តាមដានពួកយើងតាមរយៈ",
        studentInfo: "ព័ត៌មានសិស្ស",
        studentPobInfo: "ទីកន្លែងកំណើតសិស្ស",
        fatherInfo: "ព័ត៌មានឪពុក",
        motherInfo: "ព័ត៌មានម្ដាយ",
        addressInfo: "ព័ត៌មានអាសយដ្ឋាន",
        khmerName: "ឈ្មោះជាភាសាខ្មែរ",
        englishName: "ឈ្មោះ​ជាភាសាអង់គ្លេស",
        gender: "ភេទ",
        selectGender: "រើសភេទ",
        male: "ប្រុស",
        female: "ស្រី",
        dob: "ថ្ងៃ​ខែ​ឆ្នាំ​កំណើត",
        studentPhone: "លេខទូរស័ព្ទសិស្ស",
        previousSchool: "ជាសិស្សមកពីសាលា",
        sameAsParentAddress: "ទីកន្លែងកំណើតរបស់សិស្សដូចគ្នានឹងអាសយដ្ឋានឪពុកម្តាយដែរ។",
        fatherName: "ឈ្មោះឪពុក",
        fatherPhone: "លេខទូរស័ព្ទឪពុក",
        fatherJob: "មុខរបរឪពុក",
        motherName: "ឈ្មោះម្ដាយ",
        motherPhone: "លេខទូរស័ព្ទម្ដាយ",
        motherJob: "មុខរបរម្ដាយ",
        province: "ខេត្ត",
        district: "ស្រុក/ខណ្ឌ",
        commune: "ឃុំ/សង្កាត់",
        village: "ភូមិ",
        email: "អ៊ីមែល",
        agreeToTerms: 'ខ្ខ្ញុំយល់ព្រមគ្រប់លក្ខខណ្ឌដែលបានចែងក្នុង <a href="https://sites.google.com/view/pamais-student-internal-rule" target="_blank">បទបញ្ជាផ្ទៃក្នុងសិស្ស</a> និង <a href="https://sites.google.com/view/pamais-parent-handbook" target="_blank">សម្រាប់មាតាបិតាសិស្ស</a> នៃសាលាប៉ាម៉ាអន្តរជាតិ',
        submit: "បញ្ជូនការចុះឈ្មោះ",
        linkInvalidHeading: "តំណភ្ជាប់មិនត្រឹមត្រូវ ឬផុតកំណត់",
        linkInvalidText: "តំណភ្ជាប់ចុះឈ្មោះនេះមិនត្រឹមត្រូវ ផុតកំណត់ ឬត្រូវបានប្រើប្រាស់រួចហើយ។ សូមទាក់ទងមកយើងខ្ញុំ ប្រសិនបើលោកអ្នកជឿថានេះជាកំហុស។",
        kNamePlaceholder: "បញ្ចូលឈ្មោះសិស្សជាភាសាខ្មែររ។",
        eNamePlaceholder: "បញ្ចូលឈ្មោះសិស្សជាភាសាអង់គ្លេស។",
        phonePlaceholder: "បញ្ចូលលេខទូរស័ព្ទសិស្ស",
        schoolPlaceholder: "បញ្ចូលឈ្មោះសាលា",
        namePlaceholder: "បញ្ចូលឈ្មោះពេញ",
        jobPlaceholder: "បញ្ចូលមុខរបរ",
        provincePlaceholder: "បញ្ចូលខេត្ត",
        districtPlaceholder: "បញ្ចូលស្រុក/ខណ្ឌ",
        communePlaceholder: "បញ្ចូលឃុំ/សង្កាត់",
        villagePlaceholder: "បញ្ចូលភូមិ",
        emailPlaceholder: "បញ្ចូលអាសយដ្ឋានអ៊ីមែល",
        kNameInvalid: "ត្រូវតែជាអក្សរខ្មែរ ហើយមានដកឃ្លាយ៉ាងតិចមួយ។",
        eNameInvalid: "ត្រូវតែជាអក្សរអង់គ្លេស ហើយមានដកឃ្លាយ៉ាងតិចមួយ។",
        requiredField: "សូមបំពេញប្រអប់នេះ។",
        parentInfoMissing: "សូមផ្ដល់ព័ត៌មានពេញលេញ (ឈ្មោះ និងទូរស័ព្ទ) សម្រាប់ឪពុក ឬម្តាយយ៉ាងតិចម្នាក់។",
        addressInfoMissing: "សូមបញ្ចូល ខេត្ត/ក្រុង, ស្រុក/ខណ្ឌ, និង ឃុំ/សង្កាត់។",
        studentPobInfoMissing: "សូមបញ្ចូល ទីកន្លែងកំណើតសិស្ស៖ ខេត្ត/ក្រុង, ស្រុក/ខណ្ឌ, និង ឃុំ/សង្កាត់។",
        submitSuccess: "✅ ការចុះឈ្មោះរបស់អ្នកត្រូវបានបញ្ជូនដោយជោគជ័យ។",
        submitError: "មានបញ្ហាក្នុងការបញ្ជូនទម្រង់៖ ",
        successTitle: "ជោគជ័យ!",
        redirecting: "លោកអ្នកនឹងបញ្ជូនទៅកាន់ទំព័រហ្វេសប៊ុករបស់យើងក្នុងពេលបន្តិចទៀត...",
        linkUsed: "តំណភ្ជាប់ចុះឈ្មោះនេះត្រូវបានប្រើប្រាស់រួចហើយ។",
        linkCheckError: "មិនអាចផ្ទៀងផ្ទាត់តំណបានទេ។ សូម​ព្យាយាម​ម្តង​ទៀត​នៅ​ពេល​ក្រោយ។",
        submitting: "កំពុងបញ្ជូន...",
    },
};

const setLanguage = (lang) => {
    currentLang = lang;
    document.querySelectorAll("[data-lang-key]").forEach(elem => {
        const key = elem.getAttribute("data-lang-key");
        const type = elem.getAttribute("data-type");
        if (translations[lang]?.[key]) {
            if (type === 'html') elem.innerHTML = translations[lang][key];
            else if (elem.tagName === 'BUTTON' && elem.querySelector('i')) elem.innerHTML = `${elem.querySelector('i').outerHTML} ${translations[lang][key]}`;
            else elem.textContent = translations[lang][key];
        }
    });
    document.querySelectorAll("[data-placeholder]").forEach(elem => {
        const key = elem.getAttribute("data-placeholder");
        if (translations[lang]?.[key]) elem.placeholder = translations[lang][key];
    });
    document.documentElement.lang = lang;
    document.getElementById("lang-en").classList.toggle("active", lang === "en");
    document.getElementById("lang-km").classList.toggle("active", lang === "km");
};

const showError = (input, messageKey) => {
    const formControl = input.parentElement;
    const errorDisplay = formControl.querySelector(".error-message");
    if (errorDisplay) {
        errorDisplay.textContent = translations[currentLang][messageKey] || messageKey;
        errorDisplay.classList.add("visible");
    }
    input.classList.add("input-error");
};

const clearError = (input) => {
    const formControl = input.parentElement;
    const errorDisplay = formControl.querySelector(".error-message");
    if (errorDisplay) {
        errorDisplay.classList.remove("visible");
    }
    input.classList.remove("input-error");
};

document.addEventListener("DOMContentLoaded", async () => {
    const regForm = document.getElementById("regForm");
    const kNameInput = document.getElementById("txt_kName");
    const eNameInput = document.getElementById("txt_eName");
    const genderSelect = document.getElementById("sfComboBox_gender");
    const dobInput = document.getElementById("sfDateValue_dob");
    
    const studentPobSection = document.getElementById("studentPobInfo");
    const pobCheckboxContainer = document.getElementById("pob-checkbox-container");
    const studentPobCheckbox = document.getElementById("student_pob_same_as_parent");
    const studentPobFieldsContainer = document.getElementById("student-pob-fields");
    const studentProvinceInput = document.getElementById("sfComboBox_student_province");
    const studentDistrictInput = document.getElementById("sfComboBox_student_district");
    const studentCommuneInput = document.getElementById("sfComboBox_student_commune");
    const studentVillageInput = document.getElementById("sfComboBox_student_village");

    const fatherInfoSection = document.getElementById("fatherInfo");
    const motherInfoSection = document.getElementById("motherInfo");
    const addressInfoSection = document.getElementById("addressInfo");
    const provinceInput = document.getElementById("sfComboBox_parent_province");
    const districtInput = document.getElementById("sfComboBox_parent_district");
    const communeInput = document.getElementById("sfComboBox_parent_commune");
    const villageInput = document.getElementById("sfComboBox_parent_village");

    const fatherNameInput = document.getElementById("txt_father_name");
    const fatherPhoneInput = document.getElementById("txt_father_phone");
    const motherNameInput = document.getElementById("txt_mother_name");
    const motherPhoneInput = document.getElementById("txt_mother_phone");

    const parentErrorDiv = document.getElementById("parent-error-message");
    const termsCheckbox = document.getElementById("terms-agree");
    const submitBtn = document.getElementById("submit-btn");
    const mainContainer = document.querySelector(".container");
    const expiredOverlay = document.getElementById("expired-link-overlay");
    const successDialog = document.getElementById("success-dialog-overlay");

    const showExpiredPage = (reasonKey) => {
        console.error("Link validation FAILED. Reason:", reasonKey);
        const reasonTextElement = expiredOverlay.querySelector('p[data-lang-key="linkInvalidText"]');
        if (reasonTextElement) {
            reasonTextElement.textContent = translations[currentLang][reasonKey] || reasonKey;
        }
        mainContainer.style.display = 'none';
        expiredOverlay.style.display = 'flex';
        setLanguage(currentLang);
    };

    const key = new URLSearchParams(window.location.search).get("key");
    const expiryInSeconds = parseInt(new URLSearchParams(window.location.search).get("expiry"));
    const nowInSeconds = Math.floor(Date.now() / 1000);
    const firebaseBaseUrl = "https://pamais-server-default-rtdb.asia-southeast1.firebasedatabase.app/";

    if (!key || !expiryInSeconds) {
        showExpiredPage("linkInvalidText");
        return;
    }
    if (nowInSeconds > expiryInSeconds) {
        showExpiredPage("linkInvalidHeading");
        return;
    }

    try {
        const keyCheckUrl = `${firebaseBaseUrl}${key}.json`;
        const response = await fetch(keyCheckUrl);
        if (!response.ok) throw new Error(`Firebase check failed with status ${response.status}`);
        const data = await response.json();
        if (data) {
            showExpiredPage("linkUsed");
            return;
        }
    } catch (error) {
        console.error("Error checking key status:", error);
        showExpiredPage("linkCheckError");
        return;
    }
    
    const countdownElement = document.getElementById("countdown");
    const registrationPrompt = document.querySelector(".registration-prompt");
    
    const timerInterval = setInterval(() => {
        const distance = expiryInSeconds - Math.floor(Date.now() / 1000);
        if (distance <= 0) {
            clearInterval(timerInterval);
            showExpiredPage("linkInvalidHeading");
            return;
        }
        const hours = Math.floor(distance / 3600);
        const minutes = Math.floor((distance % 3600) / 60);
        const seconds = Math.floor(distance % 60);
        countdownElement.textContent = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }, 1000);

    const khmerRegex = /^(?=.* )[\u1780-\u17FF\s]+$/;
    const englishRegex = /^(?=.* )[a-zA-Z\s]+$/;
    const validateRequired = (input) => input.value.trim() !== '';

    const updateProgress = () => {
        const progressFill = document.getElementById("progressFill");
        const progressText = document.getElementById("progressText");
        let filledCount = 0;

        const baseFields = [kNameInput, eNameInput, genderSelect, dobInput];
        let totalRequiredCount = baseFields.length;
        filledCount += baseFields.filter(input => validateRequired(input)).length;

        const studentPobFields = [studentProvinceInput, studentDistrictInput, studentCommuneInput];
        if (!isNewStudent || (isNewStudent && !studentPobCheckbox.checked)) {
            totalRequiredCount += studentPobFields.length;
            filledCount += studentPobFields.filter(input => validateRequired(input)).length;
        }
        
        if (isNewStudent) {
            const addressFields = [provinceInput, districtInput, communeInput];
            totalRequiredCount += addressFields.length;
            filledCount += addressFields.filter(input => validateRequired(input)).length;
            
            totalRequiredCount++;
            if ((validateRequired(fatherNameInput) && validateRequired(fatherPhoneInput)) || (validateRequired(motherNameInput) && validateRequired(motherPhoneInput))) {
                filledCount++;
            }
        }
        
        const progress = totalRequiredCount > 0 ? (filledCount / totalRequiredCount) * 100 : 0;
        progressFill.style.width = `${progress}%`;
        progressText.textContent = `${Math.round(progress)}% Complete`;
    };

    function runFinalValidation() {
        let isValid = true;
        let firstErrorElement = null;
        
        const allInputs = [
            kNameInput, eNameInput, genderSelect, dobInput,
            studentProvinceInput, studentDistrictInput, studentCommuneInput,
            provinceInput, districtInput, communeInput,
            fatherNameInput, fatherPhoneInput, motherNameInput, motherPhoneInput
        ];
        allInputs.forEach(clearError);
        parentErrorDiv.classList.remove("visible");

        const checks = [
            { input: kNameInput, validator: () => khmerRegex.test(kNameInput.value), msg: "kNameInvalid" },
            { input: eNameInput, validator: () => englishRegex.test(eNameInput.value), msg: "eNameInvalid" },
            { input: genderSelect, validator: () => validateRequired(genderSelect), msg: "requiredField" },
            { input: dobInput, validator: () => validateRequired(dobInput), msg: "requiredField" },
        ];
        
        if (!isNewStudent || (isNewStudent && !studentPobCheckbox.checked)) {
             checks.push(
                { input: studentProvinceInput, validator: () => validateRequired(studentProvinceInput), msg: "requiredField" },
                { input: studentDistrictInput, validator: () => validateRequired(studentDistrictInput), msg: "requiredField" },
                { input: studentCommuneInput, validator: () => validateRequired(studentCommuneInput), msg: "requiredField" }
            );
        }

        if (isNewStudent) {
            checks.push(
                { input: provinceInput, validator: () => validateRequired(provinceInput), msg: "requiredField" },
                { input: districtInput, validator: () => validateRequired(districtInput), msg: "requiredField" },
                { input: communeInput, validator: () => validateRequired(communeInput), msg: "requiredField" }
            );

            const isFatherInfo = validateRequired(fatherNameInput) && validateRequired(fatherPhoneInput);
            const isMotherInfo = validateRequired(motherNameInput) && validateRequired(motherPhoneInput);
            if (!isFatherInfo && !isMotherInfo) {
                isValid = false;
                parentErrorDiv.textContent = translations[currentLang].parentInfoMissing;
                parentErrorDiv.classList.add("visible");
                if (!firstErrorElement) firstErrorElement = fatherNameInput;
            }
        }

        for (const check of checks) {
            if (!check.validator()) {
                isValid = false;
                showError(check.input, check.msg);
                if (!firstErrorElement) firstErrorElement = check.input;
            }
        }

        if (!isValid && firstErrorElement) {
            firstErrorElement.focus();
        }
        return isValid;
    }

    setLanguage("en");
    document.getElementById("lang-en").addEventListener("click", () => setLanguage("en"));
    document.getElementById("lang-km").addEventListener("click", () => setLanguage("km"));

    document.getElementById("btnYes").addEventListener("click", () => {
        isNewStudent = false; 
        registrationPrompt.style.display = "none";
        regForm.style.display = "block";
        studentPobSection.style.display = "block";
        pobCheckboxContainer.style.display = "none";
        studentPobFieldsContainer.style.display = "grid";
        studentPobCheckbox.checked = false;
        fatherInfoSection.style.display = "none";
        motherInfoSection.style.display = "none";
        addressInfoSection.style.display = "none";
        updateProgress();
    });

    document.getElementById("btnNo").addEventListener("click", () => {
        isNewStudent = true; 
        registrationPrompt.style.display = "none";
        regForm.style.display = "block";
        studentPobSection.style.display = "block";
        pobCheckboxContainer.style.display = "flex";
        fatherInfoSection.style.display = "block";
        motherInfoSection.style.display = "block";
        addressInfoSection.style.display = "block";
        updateProgress();
    });
    
    kNameInput.addEventListener('input', () => {
        khmerRegex.test(kNameInput.value) ? clearError(kNameInput) : showError(kNameInput, "kNameInvalid");
        updateProgress();
    });

    eNameInput.addEventListener('input', () => {
        englishRegex.test(eNameInput.value) ? clearError(eNameInput) : showError(eNameInput, "eNameInvalid");
        updateProgress();
    });
    
    const requiredInputs = [genderSelect, dobInput, provinceInput, districtInput, communeInput, studentProvinceInput, studentDistrictInput, studentCommuneInput];
    requiredInputs.forEach(input => {
        input.addEventListener('input', () => {
            validateRequired(input) ? clearError(input) : showError(input, "requiredField");
            updateProgress();
        });
    });

    const validateParentPair = (nameInput, phoneInput) => {
        const nameValue = nameInput.value.trim();
        const phoneValue = phoneInput.value.trim();

        if (nameValue && !phoneValue) {
            showError(phoneInput, "requiredField");
            clearError(nameInput);
        } else if (phoneValue && !nameValue) {
            showError(nameInput, "requiredField");
            clearError(phoneInput);
        } else {
            clearError(nameInput);
            clearError(phoneInput);
        }
    };

    fatherNameInput.addEventListener('input', () => {
        validateParentPair(fatherNameInput, fatherPhoneInput);
        updateProgress();
    });

    fatherPhoneInput.addEventListener('input', () => {
        validateParentPair(fatherNameInput, fatherPhoneInput);
        updateProgress();
    });

    motherNameInput.addEventListener('input', () => {
        validateParentPair(motherNameInput, motherPhoneInput);
        updateProgress();
    });

    motherPhoneInput.addEventListener('input', () => {
        validateParentPair(motherNameInput, motherPhoneInput);
        updateProgress();
    });

    studentPobCheckbox.addEventListener('change', (e) => {
        studentPobFieldsContainer.style.display = e.target.checked ? 'none' : 'grid';
        if (e.target.checked) {
            [studentProvinceInput, studentDistrictInput, studentCommuneInput].forEach(clearError);
        }
        updateProgress();
    });

    termsCheckbox.addEventListener('change', () => {
        submitBtn.disabled = !termsCheckbox.checked;
    });

    regForm.addEventListener("submit", async function (e) {
        e.preventDefault();
        if (!runFinalValidation()) return;
        
        submitBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> ${translations[currentLang].submitting}`;
        submitBtn.disabled = true;
        
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        data.timestamp = new Date().toISOString();

        if (data.student_pob_same_as_parent) {
            data.sfComboBox_student_province = data.sfComboBox_parent_province || "";
            data.sfComboBox_student_district = data.sfComboBox_parent_district || "";
            data.sfComboBox_student_commune = data.sfComboBox_parent_commune || "";
            data.sfComboBox_student_village = data.sfComboBox_parent_village || "";
        }
        
        try {
            const response = await fetch(`${firebaseBaseUrl}${key}.json`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                document.querySelector('.content').style.display = 'none';
                document.querySelector('.controls').style.display = 'none';
                
                successDialog.style.display = 'flex';

                setTimeout(() => {
                    window.location.href = "https://facebook.com/pamainternationalschool";
                }, 3500);
            } else {
                throw new Error(`Submission failed: ${response.statusText}`);
            }
        } catch (err) {
            alert(translations[currentLang].submitError + err.message);
            submitBtn.innerHTML = `<i class="fa-solid fa-paper-plane"></i> ${translations[currentLang].submit}`;
            submitBtn.disabled = !termsCheckbox.checked;
        }
    });
});