// Author: Chinemerem Adilike
// Date: 2025-10-24

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("addCourseForm");
  const tableBody = document.querySelector("#timetable tbody");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const courseName = document.getElementById("courseName").value.trim();
    const checkedDays = Array.from(form.querySelectorAll("input[name='day']:checked")).map(input => input.value);

    // Create new row
    const newRow = document.createElement("tr");

    // Course name cell
    const courseCell = document.createElement("td");
    courseCell.textContent = courseName || "Untitled Course";
    newRow.appendChild(courseCell);

    // Days: Mon through Fri
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
    days.forEach(day => {
      const cell = document.createElement("td");
      cell.textContent = checkedDays.includes(day) ? "✅" : "❌";
      newRow.appendChild(cell);
    });

    // Append to table
    tableBody.appendChild(newRow);

    // Reset form
    form.reset();
  });
});