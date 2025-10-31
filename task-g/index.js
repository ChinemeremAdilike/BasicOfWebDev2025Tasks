// Author: Chinemerem Adilike
// Date: 2025-10-31

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");
  const tableBody = document.querySelector("#timetable tbody");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Clear previous errors
    document.querySelectorAll(".error").forEach(el => el.textContent = "");

    const timestamp = new Date().toLocaleString();
    document.getElementById("timestamp").value = timestamp;

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const birthDate = document.getElementById("birthDate").value;
    const termsAccepted = document.getElementById("terms").checked;

    let valid = true;

    // Full name: at least 2 words, each ≥ 2 chars
    const nameParts = fullName.split(" ");
    if (nameParts.length < 2 || nameParts.some(part => part.length < 2)) {
      document.getElementById("nameError").textContent = "Please enter your full name (first and last, each at least 2 characters).";
      valid = false;
    }

    // Email: basic format check
    if (!email.includes("@") || !email.includes(".")) {
      document.getElementById("emailError").textContent = "Please enter a valid email address.";
      valid = false;
    }

    // Phone: must start with +358 and be followed by 9 digits
    if (!/^\+358\d{9}$/.test(phone)) {
      document.getElementById("phoneError").textContent = "Phone must follow Finnish format: +358 followed by 9 digits.";
      valid = false;
    }

    // Birth date: not in the future, optional age check ≥ 13
    const birth = new Date(birthDate);
    const today = new Date();
    const age = today.getFullYear() - birth.getFullYear();
    if (birth > today || age < 13) {
      document.getElementById("birthError").textContent = "Birth date must be valid and age must be at least 13.";
      valid = false;
    }

    // Terms checkbox
    if (!termsAccepted) {
      document.getElementById("termsError").textContent = "You must accept the terms to register.";
      valid = false;
    }

    if (!valid) return;

    // Add row to table
    const newRow = document.createElement("tr");
    [timestamp, fullName, email, phone, birthDate].forEach(value => {
      const cell = document.createElement("td");
      cell.textContent = value;
      newRow.appendChild(cell);
    });

    tableBody.appendChild(newRow);
    form.reset();
  });
});