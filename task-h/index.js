// Author: Chinemerem Adilike
// Date: 2025-11-12

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    clearErrors();

    let isValid = true;

    // Full Name
    const fullName = document.getElementById("fullName");
    const nameError = document.getElementById("nameError");
    if (fullName.value.trim() === "") {
      nameError.textContent = "Full name is required.";
      nameError.classList.add("text-red-600", "text-sm", "mt-1", "block");
      isValid = false;
    }

    // Email
    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");
    if (!email.value.includes("@")) {
      emailError.textContent = "Please enter a valid email.";
      emailError.classList.add("text-red-600", "text-sm", "mt-1", "block");
      isValid = false;
    }

    // Phone
    const phone = document.getElementById("phone");
    const phoneError = document.getElementById("phoneError");
    if (!phone.value.startsWith("+358")) {
      phoneError.textContent = "Phone must start with +358.";
      phoneError.classList.add("text-red-600", "text-sm", "mt-1", "block");
      isValid = false;
    }

    // Birth Date
    const birthDate = document.getElementById("birthDate");
    const birthError = document.getElementById("birthError");
    if (birthDate.value === "") {
      birthError.textContent = "Birth date is required.";
      birthError.classList.add("text-red-600", "text-sm", "mt-1", "block");
      isValid = false;
    }

    // Terms
    const terms = document.getElementById("terms");
    const termsError = document.getElementById("termsError");
    if (!terms.checked) {
      termsError.textContent = "You must accept the terms.";
      termsError.classList.add("text-red-600", "text-sm", "mt-1", "block");
      isValid = false;
    }

    if (isValid) {
      const formData = {
        timestamp: new Date().toLocaleString(),
        fullName: fullName.value.trim(),
        email: email.value.trim(),
        phone: phone.value.trim(),
        birthDate: birthDate.value
      };

      addRowToTable(formData);
      form.reset();
    }
  });

  function clearErrors() {
    const errors = document.querySelectorAll("span[id$='Error']");
    errors.forEach((el) => {
      el.textContent = "";
      el.classList.remove("text-red-600", "text-sm", "mt-1", "block");
    });
  }

  function addRowToTable(data) {
    const tableBody = document.querySelector("#timetable tbody");
    const row = document.createElement("tr");
    row.classList.add("even:bg-[#eef3ff]");

    row.innerHTML = `
      <td class="px-4 py-2 border-b border-[#d0d7e2]">${data.timestamp}</td>
      <td class="px-4 py-2 border-b border-[#d0d7e2] text-center">${data.fullName}</td>
      <td class="px-4 py-2 border-b border-[#d0d7e2] text-center">${data.email}</td>
      <td class="px-4 py-2 border-b border-[#d0d7e2] text-center">${data.phone}</td>
      <td class="px-4 py-2 border-b border-[#d0d7e2] text-center">${data.birthDate}</td>
    `;

    tableBody.appendChild(row);
  }
});